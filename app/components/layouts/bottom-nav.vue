<template>
  <!-- Phones only: floating tab bar at the bottom. Tablets use the header drawer, desktop the header links. -->
  <nav
    :aria-label="t('ui.header.mobileNavigation')"
    class="md:hidden fixed inset-x-3 z-50 bottom-[max(0.75rem,env(safe-area-inset-bottom))] rounded-2xl border border-border bg-surface/95 backdrop-blur-md shadow-xl shadow-black/20"
  >
    <ul class="grid grid-cols-4 p-1.5">
      <li v-for="item in items" :key="item.key">
        <nuxt-link-locale
          :to="item.to"
          class="flex flex-col items-center justify-center gap-0.5 min-h-14 rounded-xl font-headline text-label-sm transition-colors duration-(--duration-fast) ease-standard focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent"
          :class="
            activeRoute === item.key
              ? 'text-accent-ink font-semibold'
              : 'text-text-secondary font-medium hover:text-text-primary'
          "
          :aria-current="activeRoute === item.key ? 'page' : undefined"
        >
          <span
            class="flex items-center justify-center w-11 h-7 rounded-full transition-colors duration-(--duration-fast) ease-standard"
            :class="activeRoute === item.key ? 'bg-accent-soft' : ''"
          >
            <LazyVAppIcon :name="item.icon" class="w-5 h-5" />
          </span>
          <span>{{ t(item.label) }}</span>
        </nuxt-link-locale>
      </li>
    </ul>
  </nav>
</template>

<script lang="ts" setup>
import type { HeaderProps } from "@/types/layouts";
import type { IconifyName, NavItem } from "@/types/portfolio";

withDefaults(defineProps<HeaderProps>(), {
  activeRoute: "home",
});

const { t } = useLocale();

const items: {
  key: NavItem["key"];
  to: string;
  label: string;
  icon: IconifyName;
}[] = [
  { key: "home", to: "/", label: "content.navItems.home.label", icon: "lucide:house" },
  { key: "work", to: "/work", label: "content.navItems.work.label", icon: "lucide:briefcase" },
  { key: "about", to: "/about", label: "content.navItems.about.label", icon: "lucide:user" },
  { key: "contact", to: "/contact", label: "content.navItems.contact.label", icon: "lucide:mail" },
];
</script>
