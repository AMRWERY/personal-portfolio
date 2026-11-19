<template>
  <div>
    <div
      class="bg-background text-text-primary font-body antialiased min-h-screen selection:bg-accent selection:text-on-accent overflow-x-clip pb-[calc(5.5rem+env(safe-area-inset-bottom))] md:pb-0 transition-colors duration-(--duration-standard)"
    >
      <Header :active-route="activeRoute" />

      <main>
        <slot />
      </main>

      <Footer />

      <BottomNav :active-route="activeRoute" />

      <LazyVScrollToTop />
    </div>
  </div>
</template>

<script lang="ts" setup>
import type { NavItem } from "@/types/portfolio";

const route = useRoute();

// "/en/work/abc" -> "work", "/en" -> "home"
const activeRoute = computed<NavItem["key"]>(() => {
  const section = route.path.replace(/^\/(en|ar)(?=\/|$)/, "").split("/")[1];
  return section === "work" || section === "about" || section === "contact"
    ? section
    : "home";
});

</script>