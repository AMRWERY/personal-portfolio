import nodemailer from "nodemailer";

const EMAIL_PATTERN = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

const clean = (value: unknown, max: number): string =>
  typeof value === "string" ? value.trim().slice(0, max) : "";

/**
 * POST /api/contact
 * Validates the message and emails it to the owner's Gmail via SMTP
 * (env: NUXT_GMAIL_USER, NUXT_GMAIL_APP_PASSWORD).
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

  const { gmailUser, gmailAppPassword } = useRuntimeConfig(event);
  if (!gmailUser || !gmailAppPassword) {
    // Not configured yet: report it clearly instead of silently dropping mail
    throw createError({
      statusCode: 503,
      statusMessage: "Contact form is not configured",
    });
  }

  const text = [
    `Name: ${name}`,
    `Email: ${email}`,
    `Subject: ${subject || "-"}`,
    "",
    message,
  ].join("\n");

  try {
    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: { user: gmailUser, pass: gmailAppPassword },
    });
    await transporter.sendMail({
      from: `"Portfolio Contact" <${gmailUser}>`,
      to: gmailUser,
      replyTo: `"${name.replace(/["\r\n]/g, "")}" <${email}>`,
      subject: `Portfolio: ${subject || `Message from ${name}`}`.replace(
        /[\r\n]/g,
        " ",
      ),
      text,
    });
  } catch {
    throw createError({
      statusCode: 502,
      statusMessage: "Could not deliver message",
    });
  }

  return { ok: true };
});
