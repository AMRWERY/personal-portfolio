<template>
  <div class="border border-border bg-surface rounded-2xl p-5 sm:p-8">
    <Transition
      mode="out-in"
      enter-active-class="transition-ui duration-(--duration-standard) ease-standard"
      enter-from-class="opacity-0"
      leave-active-class="transition-ui duration-(--duration-fast) ease-standard"
      leave-to-class="opacity-0"
    >
    <!-- Success -->
    <div
      v-if="status === 'success'"
      key="success"
      role="status"
      class="py-8 md:py-10 px-2 md:px-4 text-center space-y-3 md:space-y-4"
    >
      <div
        class="w-12 h-12 md:w-14 md:h-14 rounded-full bg-emerald-500/10 border border-emerald-500/30 text-emerald-600 dark:text-emerald-400 mx-auto flex items-center justify-center"
      >
        <LazyVAppIcon
          name="lucide:circle-check"
          class="w-6 h-6 md:w-7 md:h-7"
        />
      </div>
      <h2
        class="font-headline text-headline-sm font-bold text-text-primary"
      >
        {{ locale === "en" ? "Message received" : "تم استلام رسالتك" }}
      </h2>
      <p
        class="text-body-sm md:text-body-md text-text-secondary max-w-md mx-auto leading-relaxed"
      >
        {{
          locale === "en"
            ? "Thank you for reaching out. I will review your requirements and respond within 24 hours."
            : "شكراً لتواصلك. سأراجع متطلباتك وأرد عليك خلال 24 ساعة."
        }}
      </p>
      <div class="pt-2 md:pt-4">
        <LazyVButton variant="secondary" @click="reset">
          <LazyVAppIcon name="lucide:rotate-ccw" class="w-4 h-4" />
          <span>{{
            locale === "en" ? "Send another message" : "إرسال رسالة أخرى"
          }}</span>
        </LazyVButton>
      </div>
    </div>

    <div v-else key="form">
      <!-- Announced to screen readers when a send fails (the banner below is visual) -->
      <p class="sr-only" role="alert">
        {{
          status === "error"
            ? locale === "en"
              ? "Message could not be sent."
              : "تعذّر إرسال الرسالة."
            : ""
        }}
      </p>

      <!-- Server failure: animates its height + opacity, so nothing jumps -->
      <div
        class="grid transition-[grid-template-rows,opacity,margin] duration-(--duration-standard) ease-standard motion-reduce:transition-none"
        :class="
          status === 'error'
            ? 'grid-rows-[1fr] opacity-100 mb-5 md:mb-6'
            : 'grid-rows-[0fr] opacity-0 mb-0'
        "
        :inert="status !== 'error'"
      >
        <div class="overflow-hidden">
      <div
        class="p-3.5 md:p-4 rounded-xl border border-rose-500/40 bg-rose-500/10 flex items-start gap-2.5 md:gap-3"
      >
        <LazyVAppIcon
          name="lucide:triangle-alert"
          class="w-4 h-4 md:w-5 md:h-5 text-rose-600 dark:text-rose-400 shrink-0 mt-0.5"
        />
        <div class="flex-1 text-body-sm">
          <span
            class="block font-semibold text-rose-600 dark:text-rose-400"
          >
            {{
              locale === "en"
                ? "Message could not be sent"
                : "تعذّر إرسال الرسالة"
            }}
          </span>
          <span class="text-text-secondary">
            {{
              locale === "en"
                ? "We hit a network issue reaching the service. Please retry, or email me directly at"
                : "واجهنا مشكلة في الاتصال بالخدمة. أعد المحاولة أو راسلني مباشرة على"
            }}
            <a
              :href="`mailto:${PROFILE.email}`"
              class="text-accent-ink underline"
              dir="ltr"
              >{{ PROFILE.email }}</a
            >.
          </span>
        </div>
        <button
          type="button"
          class="shrink-0 px-2.5 py-1 rounded bg-rose-500/20 text-rose-700 dark:text-rose-300 hover:bg-rose-500/30 text-label-sm font-medium transition-colors cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent"
          @click="onSubmit"
        >
          {{ locale === "en" ? "Retry" : "إعادة المحاولة" }}
        </button>
      </div>
        </div>
      </div>

      <form novalidate class="space-y-4 md:space-y-6" @submit.prevent="onSubmit">
        <VFormField
          id="contact-name"
          :label="locale === 'en' ? 'Name' : 'الاسم'"
          required
          :error="errors.name"
        >
          <template #default="{ describedBy, invalid }">
            <input
              id="contact-name"
              v-model="form.name"
              type="text"
              name="name"
              autocomplete="name"
              required
              :placeholder="locale === 'en' ? 'e.g. Sarah Jenkins' : 'مثال: سارة أحمد'"
              :aria-invalid="invalid"
              :aria-describedby="describedBy"
              :class="inputClass(invalid)"
              @input="errors.name = ''"
            />
          </template>
        </VFormField>

        <VFormField
          id="contact-email"
          :label="locale === 'en' ? 'Email address' : 'البريد الإلكتروني'"
          required
          :error="errors.email"
        >
          <template #default="{ describedBy, invalid }">
            <div class="relative">
              <span
                class="absolute inset-y-0 start-0 w-10 flex items-center justify-center pointer-events-none text-text-secondary"
                aria-hidden="true"
              >
                <LazyVAppIcon name="lucide:mail" class="w-4 h-4" />
              </span>
              <input
                id="contact-email"
                v-model="form.email"
                type="email"
                name="email"
                autocomplete="email"
                inputmode="email"
                required
                placeholder="you@company.com"
                :aria-invalid="invalid"
                :aria-describedby="describedBy"
                :class="inputClass(invalid, true)"
                @input="errors.email = ''"
              />
            </div>
          </template>
        </VFormField>

        <VFormField
          id="contact-subject"
          :label="locale === 'en' ? 'Subject' : 'الموضوع'"
          :optional-label="locale === 'en' ? 'Optional' : 'اختياري'"
        >
          <input
            id="contact-subject"
            v-model="form.subject"
            type="text"
            name="subject"
            :placeholder="
              locale === 'en'
                ? 'e.g. Frontend Contract / Nuxt.js Consulting'
                : 'مثال: عقد واجهات أمامية / استشارة Nuxt.js'
            "
            :class="inputClass(false)"
          />
        </VFormField>

        <VFormField
          id="contact-message"
          :label="locale === 'en' ? 'Message' : 'الرسالة'"
          required
          :error="errors.message"
        >
          <template #default="{ describedBy, invalid }">
            <textarea
              id="contact-message"
              v-model="form.message"
              name="message"
              required
              rows="5"
              :placeholder="
                locale === 'en'
                  ? 'Tell me about your project scope, timeline, and tech stack...'
                  : 'حدثني عن نطاق مشروعك والجدول الزمني والتقنيات...'
              "
              :aria-invalid="invalid"
              :aria-describedby="describedBy"
              :class="[inputClass(invalid), 'resize-y']"
              @input="errors.message = ''"
            />
          </template>
        </VFormField>

        <!-- Honeypot: hidden from people, tempting to bots -->
        <input
          v-model="form.website"
          type="text"
          name="website"
          tabindex="-1"
          autocomplete="off"
          aria-hidden="true"
          class="hidden"
        />

        <div class="pt-1 md:pt-2 space-y-2 md:space-y-3">
          <LazyVButton type="submit" size="lg" block :disabled="status === 'sending'">
            <span v-if="status === 'sending'" class="inline-flex items-center gap-2">
              <svg
                class="animate-spin motion-reduce:animate-none h-4 w-4"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                aria-hidden="true"
              >
                <circle
                  class="opacity-25"
                  cx="12"
                  cy="12"
                  r="10"
                  stroke="currentColor"
                  stroke-width="4"
                />
                <path
                  class="opacity-75"
                  fill="currentColor"
                  d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                />
              </svg>
              <span>{{
                locale === "en" ? "Sending message..." : "جارٍ إرسال الرسالة..."
              }}</span>
            </span>
            <span v-else class="inline-flex items-center gap-2">
              <span>{{ locale === "en" ? "Send message" : "إرسال الرسالة" }}</span>
              <LazyVAppIcon
                name="lucide:send"
                class="w-4 h-4 rtl:-scale-x-100 arrow-nudge-x"
              />
            </span>
          </LazyVButton>

          <p class="text-body-sm text-text-secondary text-center">
            {{
              locale === "en"
                ? "All inquiries are received privately. No spam or third-party sharing."
                : "تصلني جميع الاستفسارات بشكل خاص. دون رسائل مزعجة أو مشاركة مع أطراف أخرى."
            }}
          </p>
        </div>
      </form>
    </div>
    </Transition>
  </div>
</template>

<script lang="ts" setup>
import { PROFILE } from "@/data/home";

type Status = "idle" | "sending" | "success" | "error";

const { locale } = useLocale();

const EMAIL_PATTERN = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

const status = ref<Status>("idle");

const form = reactive({
  name: "",
  email: "",
  subject: "",
  message: "",
  website: "", // honeypot
});

const errors = reactive({ name: "", email: "", message: "" });

const inputClass = (invalid: boolean, withIcon = false) => [
  "w-full min-h-11 py-2.5 md:py-3",
  withIcon ? "ps-10 pe-3.5 md:pe-4" : "px-3.5 md:px-4",
  " rounded-md bg-background border text-text-primary placeholder:text-text-secondary/60 text-body-sm md:text-body-md transition-colors duration-(--duration-fast) focus:outline-none focus:ring-1",
  invalid
    ? "border-rose-500 focus:border-rose-500 focus:ring-rose-500"
    : "border-border focus:border-accent focus:ring-accent",
];

/** Fills `errors`; returns the id of the first invalid control (to focus it). */
function validate(): string | null {
  const en = locale.value === "en";
  errors.name = form.name.trim()
    ? ""
    : en
      ? "Please enter your name."
      : "من فضلك أدخل اسمك.";
  errors.email = EMAIL_PATTERN.test(form.email.trim())
    ? ""
    : en
      ? "Please enter a valid email address."
      : "من فضلك أدخل بريداً إلكترونياً صالحاً.";
  errors.message = form.message.trim()
    ? ""
    : en
      ? "Please provide details about your inquiry."
      : "من فضلك اكتب تفاصيل استفسارك.";

  if (errors.name) return "contact-name";
  if (errors.email) return "contact-email";
  if (errors.message) return "contact-message";
  return null;
}

async function onSubmit(): Promise<void> {
  if (status.value === "sending") return;

  const firstInvalid = validate();
  if (firstInvalid) {
    status.value = "idle";
    await nextTick();
    document.getElementById(firstInvalid)?.focus();
    return;
  }

  status.value = "sending";
  try {
    await $fetch("/api/contact", {
      method: "POST",
      body: {
        name: form.name,
        email: form.email,
        subject: form.subject,
        message: form.message,
        website: form.website,
      },
    });
    status.value = "success";
  } catch {
    status.value = "error";
  }
}

function reset(): void {
  form.name = form.email = form.subject = form.message = form.website = "";
  errors.name = errors.email = errors.message = "";
  status.value = "idle";
}
</script>
