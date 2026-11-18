const EMAIL_PATTERN = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

const clean = (value: unknown, max: number): string =>
  typeof value === "string" ? value.trim().slice(0, max) : "";

/**
 * POST /api/contact
 * Validates the message and forwards it to the webhook configured in
 * `runtimeConfig.contactWebhookUrl` (env: NUXT_CONTACT_WEBHOOK_URL).
 */
export default defineEventHandler(async (event) => {
  const body = await readBody(event);

  // Honeypot: real visitors never fill this hidden field. Pretend success so
  // bots get no signal, but forward nothing.
  if (body?.website) return { ok: true };

  const name = clean(body?.name, 100);
  const email = clean(body?.email, 254);
  const subject = clean(body?.subject, 150);
  const message = clean(body?.message, 5000);

  if (!name || !message || !EMAIL_PATTERN.test(email)) {
    throw createError({ statusCode: 400, statusMessage: "Invalid input" });
  }

  const { contactWebhookUrl } = useRuntimeConfig(event);
  if (!contactWebhookUrl) {
    // Not configured yet: report it clearly instead of silently dropping mail
    throw createError({
      statusCode: 503,
      statusMessage: "Contact form is not configured",
    });
  }

  try {
    await $fetch(contactWebhookUrl, {
      method: "POST",
      headers: { Accept: "application/json" },
      body: { name, email, subject, message },
      timeout: 10_000,
    });
  } catch {
    throw createError({
      statusCode: 502,
      statusMessage: "Could not deliver message",
    });
  }

  return { ok: true };
});
