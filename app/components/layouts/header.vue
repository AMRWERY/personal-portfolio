<template>
  <header
    class="sticky top-0 z-50 w-full border-b border-border bg-background/95 backdrop-blur-md transition-colors duration-(--duration-standard)"
  >
    <div
      class="max-w-(--container-max) mx-auto px-5 lg:px-12 h-16 md:h-20 flex items-center justify-between"
    >
      <!-- Monogram Wordmark & Compact Avatar -->
      <a
        href="/"
        class="flex items-center gap-2.5 md:gap-3.5 group focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent rounded-lg p-1"
      >
        <ProfileAvatar
          variant="compact"
          :src="PROFILE.avatarSrc"
          :monogram="PROFILE.monogram"
        />
        <span
          class="font-headline text-headline-sm font-bold tracking-tight text-text-primary group-hover:text-accent-ink transition-colors duration-(--duration-fast)"
        >
          {{ PROFILE.monogram }}<span class="text-accent">.</span>
        </span>
      </a>

      <!-- Desktop Navigation -->
      <nav
        aria-label="Primary navigation"
        class="hidden md:flex items-center gap-8"
      >
        <a
          v-for="item in NAV_ITEMS"
          :key="item.key"
          :href="item.to"
          class="font-headline text-body-sm relative py-1 transition-colors duration-(--duration-fast) focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent rounded-sm"
          :class="
            activeRoute === item.key
              ? 'font-semibold text-accent-ink after:absolute after:bottom-0 after:start-0 after:w-full after:h-0.5 after:bg-accent after:rounded-full'
              : 'font-medium text-text-secondary hover:text-text-primary'
          "
        >
          {{ t(item.label) }}
        </a>
      </nav>

      <!-- Persistent Utilities -->
      <div class="flex items-center gap-2 md:gap-3.5">
        <button
          type="button"
          :aria-label="
            theme === 'dark' ? 'Switch to light theme' : 'Switch to dark theme'
          "
          class="inline-flex items-center justify-center w-10 h-10 md:w-9 md:h-9 rounded-md bg-surface border border-border text-text-secondary hover:text-accent-ink hover:border-accent transition-colors duration-(--duration-fast) focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent cursor-pointer"
          @click="toggleTheme"
        >
          <LazyVAppIcon
            :name="theme === 'dark' ? 'lucide:moon' : 'lucide:sun'"
            class="w-4 h-4"
          />
        </button>

        <button
          type="button"
          :aria-label="
            locale === 'en'
              ? 'Switch language to Arabic'
              : 'Switch language to English'
          "
          class="inline-flex items-center justify-center px-3 h-10 md:h-9 rounded-md bg-surface border border-border text-label-sm font-bold text-text-secondary hover:text-accent-ink hover:border-accent transition-colors duration-(--duration-fast) focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent cursor-pointer"
          @click="toggleLocale"
        >
          {{ locale === "en" ? "عربي" : "EN" }}
        </button>

        <!-- Desktop Contact Action -->
        <a
          href="/contact"
          class="hidden sm:inline-flex items-center justify-center px-4 py-2 rounded-md font-headline font-semibold text-label-md bg-surface-elevated text-text-primary border border-border hover:border-accent hover:text-accent-ink transition-all duration-(--duration-fast) focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent"
        >
          {{ locale === "en" ? "Let's talk" : "لنتحدث" }}
        </a>

        <!-- Mobile Menu Trigger -->
        <button
          ref="menuTriggerRef"
          type="button"
          class="md:hidden inline-flex items-center justify-center w-10 h-10 rounded-md bg-surface border border-border text-text-primary hover:text-accent-ink focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent cursor-pointer"
          :aria-expanded="isMobileOpen"
          aria-controls="mobile-drawer"
          :aria-label="
            isMobileOpen ? 'Close navigation menu' : 'Open navigation menu'
          "
          @click="toggleMobileMenu"
        >
          <LazyVAppIcon
            :name="isMobileOpen ? 'lucide:x' : 'lucide:menu'"
            class="w-4 h-4"
          />
        </button>
      </div>
    </div>

    <!-- Collapsible Mobile Drawer -->
    <Transition
      enter-active-class="transition-all duration-(--duration-panel) ease-panel"
      enter-from-class="opacity-0 -translate-y-2"
      enter-to-class="opacity-100 translate-y-0"
      leave-active-class="transition-all duration-(--duration-standard) ease-standard"
      leave-from-class="opacity-100 translate-y-0"
      leave-to-class="opacity-0 -translate-y-2"
    >
      <div
        v-if="isMobileOpen"
        id="mobile-drawer"
        class="md:hidden border-b border-border bg-surface px-5 py-5 space-y-4"
      >
        <nav
          aria-label="Mobile navigation"
          class="flex flex-col gap-1 font-headline text-body-md font-semibold"
        >
          <a
            v-for="(item, idx) in NAV_ITEMS"
            :key="item.key"
            :ref="
              idx === 0
                ? (el) => (drawerFirstLinkRef = el as HTMLAnchorElement)
                : undefined
            "
            :href="item.to"
            class="py-2.5 border-b border-border/50 last:border-b-0 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent rounded-sm"
            :class="
              activeRoute === item.key
                ? 'text-accent-ink'
                : 'text-text-secondary hover:text-text-primary'
            "
            @click="closeMobileMenu(false)"
          >
            {{ t(item.label) }}
          </a>
        </nav>

        <a
          href="/contact"
          class="w-full inline-flex items-center justify-center py-3 rounded-md font-headline font-semibold text-label-md bg-accent text-on-accent shadow-md"
          @click="closeMobileMenu(false)"
        >
          {{ locale === "en" ? "Let's talk" : "لنتحدث" }}
        </a>
      </div>
    </Transition>
  </header>
</template>

<script lang="ts" setup>
import { NAV_ITEMS, PROFILE } from "@/data/home";
import type { NavItem } from "@/types/portfolio";
import type { HeaderProps } from "@/types/layouts";

const { locale, toggleLocale, t } = useLocale();

const { theme, toggleTheme } = useTheme();

withDefaults(defineProps<HeaderProps>(), {
  activeRoute: "home",
});

const isMobileOpen = ref(false);
const menuTriggerRef = ref<HTMLButtonElement | null>(null);
const drawerFirstLinkRef = ref<HTMLAnchorElement | null>(null);

async function openMobileMenu(): Promise<void> {
  isMobileOpen.value = true;
  await nextTick();
  drawerFirstLinkRef.value?.focus();
}

function closeMobileMenu(restoreFocus = true): void {
  isMobileOpen.value = false;
  if (restoreFocus) {
    nextTick(() => menuTriggerRef.value?.focus());
  }
}

function toggleMobileMenu(): void {
  if (isMobileOpen.value) {
    closeMobileMenu(true);
  } else {
    openMobileMenu();
  }
}

function handleKeydown(event: KeyboardEvent): void {
  if (event.key === "Escape" && isMobileOpen.value) {
    closeMobileMenu(true);
  }
}

onMounted(() => window.addEventListener("keydown", handleKeydown));

onBeforeUnmount(() => window.removeEventListener("keydown", handleKeydown));
</script>