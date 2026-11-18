<template>
  <header
    class="sticky top-0 z-50 w-full border-b backdrop-blur-md transition-[background-color,border-color,box-shadow] duration-(--duration-standard) ease-standard motion-reduce:transition-none"
    :class="
      isScrolled
        ? 'border-border bg-background/95 shadow-[0_1px_12px_-6px_rgb(0_0_0/0.35)]'
        : 'border-transparent bg-background/70'
    "
  >
    <div
      class="max-w-(--container-max) mx-auto px-5 lg:px-12 h-16 md:h-20 flex items-center justify-between"
    >
      <!-- Monogram Wordmark & Compact Avatar -->
      <nuxt-link-locale
        to="/"
        class="flex items-center gap-2.5 md:gap-3.5 group focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent rounded-lg p-1 min-h-11"
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
      </nuxt-link-locale>

      <!-- Desktop Navigation -->
      <nav
        aria-label="Primary navigation"
        class="hidden md:flex items-center gap-8"
      >
        <nuxt-link-locale
          v-for="item in NAV_ITEMS"
          :key="item.key"
          :to="item.to"
          class="font-headline text-body-sm relative py-3 transition-colors duration-(--duration-fast) ease-standard focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent rounded-sm"
          :class="
            activeRoute === item.key
              ? 'font-semibold text-accent-ink'
              : 'font-medium text-text-secondary hover:text-text-primary'
          "
          :aria-current="activeRoute === item.key ? 'page' : undefined"
        >
          {{ t(item.label) }}
          <!-- v-if: the draw animation replays each time a link becomes the active one -->
          <svg
            v-if="activeRoute === item.key"
            class="underline-draw underline-draw-fast absolute inset-x-0 bottom-1 w-full h-2 rtl:-scale-x-100 overflow-visible"
            viewBox="0 0 200 12"
            preserveAspectRatio="none"
            fill="none"
            aria-hidden="true"
          >
            <path
              d="M1 7 C 17 1, 33 13, 50 7 S 83 1, 100 7 S 133 13, 150 7 S 183 1, 199 6"
              stroke="currentColor"
              stroke-width="2.5"
              stroke-linecap="round"
              vector-effect="non-scaling-stroke"
            />
          </svg>
        </nuxt-link-locale>
      </nav>

      <!-- Persistent Utilities -->
      <div class="flex items-center gap-2 md:gap-3.5">
        <LazyVToggleTheme />

        <LazyVToggleLocale />

        <!-- Desktop Contact Action -->
        <div class="hidden sm:block">
          <LazyVButton to="/contact" variant="secondary" size="sm">
            {{ locale === "en" ? "Let's talk" : "لنتحدث" }}
          </LazyVButton>
        </div>

        <!-- Mobile Menu Trigger -->
        <LazyVButton
          ref="menuTriggerRef"
          variant="outline"
          size="icon"
          class="md:hidden"
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
        </LazyVButton>
      </div>
    </div>

    <!-- Mobile sidebar. Teleported to <body>: this header's backdrop-blur would otherwise
         become the containing block of the fixed elements below and break their positioning. -->
    <Teleport to="body">
      <Transition
        enter-active-class="transition-opacity duration-(--duration-panel) ease-standard"
        enter-from-class="opacity-0"
        leave-active-class="transition-opacity duration-[240ms] ease-standard"
        leave-to-class="opacity-0"
      >
        <div
          v-if="isMobileOpen"
          class="md:hidden fixed inset-0 z-60 bg-background/70 backdrop-blur-[2px]"
          aria-hidden="true"
          @click="closeMobileMenu(true)"
        />
      </Transition>

      <!-- Slides in from the inline-end edge: right in LTR, left in RTL -->
      <Transition
        enter-active-class="transition-[translate,opacity] duration-(--duration-panel) ease-panel"
        enter-from-class="opacity-0 ltr:translate-x-full rtl:-translate-x-full"
        leave-active-class="transition-[translate,opacity] duration-[240ms] ease-standard"
        leave-to-class="opacity-0 ltr:translate-x-full rtl:-translate-x-full"
      >
        <aside
          v-if="isMobileOpen"
          id="mobile-drawer"
          ref="drawerRef"
          role="dialog"
          aria-modal="true"
          :aria-label="locale === 'en' ? 'Navigation menu' : 'قائمة التنقل'"
          class="md:hidden fixed inset-y-0 end-0 z-61 w-[min(20rem,86vw)] flex flex-col bg-surface border-s border-border shadow-2xl"
          @keydown="onDrawerKeydown"
        >
          <div
            class="h-16 shrink-0 px-5 flex items-center justify-between border-b border-border"
          >
            <span
              class="font-headline text-headline-sm font-bold tracking-tight text-text-primary"
            >
              {{ PROFILE.monogram }}<span class="text-accent">.</span>
            </span>
            <LazyVButton
              ref="closeButtonRef"
              variant="outline"
              size="icon"
              :aria-label="
                locale === 'en' ? 'Close navigation menu' : 'إغلاق قائمة التنقل'
              "
              @click="closeMobileMenu(true)"
            >
              <LazyVAppIcon name="lucide:x" class="w-4 h-4" />
            </LazyVButton>
          </div>

          <nav
            :aria-label="locale === 'en' ? 'Mobile navigation' : 'التنقل'"
            class="flex-1 overflow-y-auto px-3 py-4 flex flex-col gap-1 font-headline text-body-md font-semibold"
          >
            <nuxt-link-locale
              v-for="item in NAV_ITEMS"
              :key="item.key"
              :to="item.to"
              class="flex items-center min-h-12 px-3 rounded-lg transition-ui duration-(--duration-fast) ease-standard focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent"
              :class="
                activeRoute === item.key
                  ? 'bg-accent-soft text-accent-ink'
                  : 'text-text-secondary hover:bg-surface-elevated hover:text-text-primary'
              "
              :aria-current="activeRoute === item.key ? 'page' : undefined"
              @click="closeMobileMenu(false)"
            >
              {{ t(item.label) }}
            </nuxt-link-locale>
          </nav>

          <div
            class="shrink-0 p-5 border-t border-border pb-[max(1.25rem,env(safe-area-inset-bottom))]"
          >
            <LazyVButton to="/contact" block @click="closeMobileMenu(false)">
              {{ locale === "en" ? "Let's talk" : "لنتحدث" }}
            </LazyVButton>
          </div>
        </aside>
      </Transition>
    </Teleport>
  </header>
</template>

<script lang="ts" setup>
import { NAV_ITEMS, PROFILE } from "@/data/home";
import type { NavItem } from "@/types/portfolio";
import type { HeaderProps } from "@/types/layouts";

const { locale, t } = useLocale();

// Header gains a solid background + border once the page has scrolled a little
const { y: scrollY } = useWindowScroll();
const isScrolled = computed(() => scrollY.value > 8);

withDefaults(defineProps<HeaderProps>(), {
  activeRoute: "home",
});

const isMobileOpen = ref(false);
// LazyVButton is a component, so these refs hold its instance; focus via $el
const menuTriggerRef = ref<{ $el: HTMLElement } | null>(null);
const closeButtonRef = ref<{ $el: HTMLElement } | null>(null);
const drawerRef = ref<HTMLElement | null>(null);

async function openMobileMenu(): Promise<void> {
  isMobileOpen.value = true;
  await nextTick();
  closeButtonRef.value?.$el.focus();
}

function closeMobileMenu(restoreFocus = true): void {
  isMobileOpen.value = false;
  if (restoreFocus) {
    nextTick(() => menuTriggerRef.value?.$el.focus());
  }
}

function toggleMobileMenu(): void {
  if (isMobileOpen.value) {
    closeMobileMenu(true);
  } else {
    openMobileMenu();
  }
}

/** Esc closes; Tab / Shift+Tab stay inside the open sidebar (modal dialog). */
function onDrawerKeydown(event: KeyboardEvent): void {
  if (event.key === "Escape") {
    event.stopPropagation();
    closeMobileMenu(true);
    return;
  }
  if (event.key !== "Tab" || !drawerRef.value) return;

  const focusable = [
    ...drawerRef.value.querySelectorAll<HTMLElement>(
      "a[href], button:not([disabled])",
    ),
  ];
  const first = focusable[0];
  const last = focusable[focusable.length - 1];
  if (!first || !last) return;

  if (event.shiftKey && document.activeElement === first) {
    event.preventDefault();
    last.focus();
  } else if (!event.shiftKey && document.activeElement === last) {
    event.preventDefault();
    first.focus();
  }
}

// Page behind the sidebar doesn't scroll while it is open
watch(isMobileOpen, (open) => {
  document.documentElement.style.overflow = open ? "hidden" : "";
});

// Close on navigation, and if the screen grows to the desktop layout
const route = useRoute();
watch(
  () => route.fullPath,
  () => {
    if (isMobileOpen.value) closeMobileMenu(false);
  },
);
const isDesktop = useMediaQuery("(min-width: 768px)");
watch(isDesktop, (desktop) => {
  if (desktop && isMobileOpen.value) closeMobileMenu(false);
});

onBeforeUnmount(() => {
  document.documentElement.style.overflow = "";
});
</script>