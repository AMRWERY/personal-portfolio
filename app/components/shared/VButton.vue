<template>
  <component
    :is="tag"
    v-bind="tagAttrs"
    :class="[
      BASE_CLASSES,
      VARIANT_CLASSES[variant],
      SIZE_CLASSES[size],
      block && 'w-full',
    ]"
  >
    <slot />
  </component>
</template>

<script lang="ts" setup>
import type { RouteLocationRaw } from "vue-router";
import type { Variant, Size } from "~/types/shared/VButton";

const props = withDefaults(
  defineProps<{
    /** Force a specific tag/component. Defaults to NuxtLinkLocale (`to`), `a` (`href`) or `button`. */
    as?: string | object;
    /** Internal route. Rendered with NuxtLinkLocale and prefixed with the active locale. */
    to?: RouteLocationRaw;
    /** External / mailto / hash link. Rendered as a plain `a`. */
    href?: string;
    /** Native button type (only applied when rendered as a button). */
    type?: "button" | "submit" | "reset";
    variant?: Variant;
    size?: Size;
    /** Full-width on every breakpoint. */
    block?: boolean;
    disabled?: boolean;
  }>(),
  {
    as: undefined,
    to: undefined,
    href: undefined,
    type: "button",
    variant: "primary",
    size: "md",
    block: false,
    disabled: false,
  },
);

// Locale-aware link from @nuxtjs/i18n: adds the active locale prefix itself
const NuxtLinkLocale = resolveComponent("NuxtLinkLocale");

const tag = computed(() => {
  if (props.as) return props.as;
  if (props.to) return NuxtLinkLocale;
  if (props.href) return "a";
  return "button";
});

const isExternal = computed(
  () => !!props.href && /^(https?:)?\/\//.test(props.href),
);

const tagAttrs = computed(() => {
  if (tag.value === "button") {
    return { type: props.type, disabled: props.disabled };
  }

  const attrs: Record<string, unknown> = {};
  if (props.to) {
    attrs.to = props.to;
  }
  if (props.href) {
    attrs.href = props.href;
    if (isExternal.value) {
      attrs.target = "_blank";
      attrs.rel = "noopener noreferrer";
    }
  }
  if (props.disabled) {
    attrs["aria-disabled"] = "true";
    attrs.tabindex = -1;
  }
  return attrs;
});

const BASE_CLASSES =
  "group/btn inline-flex items-center justify-center gap-2 rounded-md font-headline transition-all duration-(--duration-fast) cursor-pointer active:scale-[0.97] motion-reduce:active:scale-100 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent aria-disabled:pointer-events-none aria-disabled:opacity-50 disabled:pointer-events-none disabled:opacity-50";

const VARIANT_CLASSES: Record<Variant, string> = {
  primary:
    "font-semibold bg-accent text-on-accent shadow-md shadow-accent/10 hover:brightness-110 hover:-translate-y-0.5 active:translate-y-0 focus-visible:ring-offset-2 focus-visible:ring-offset-background",
  secondary:
    "font-medium bg-surface-elevated text-text-primary border border-border hover:border-accent hover:text-accent-ink hover:-translate-y-0.5 active:translate-y-0",
  outline:
    "font-bold bg-surface border border-border text-text-secondary hover:text-accent-ink hover:border-accent",
  ghost:
    "font-semibold text-accent-ink hover:underline rounded-sm px-1.5 py-1 min-h-11 lg:min-h-0",
};

const SIZE_CLASSES: Record<Size, string> = {
  // Touch screens get a 44px minimum; desktop keeps the compact size
  icon: "w-11 h-11 lg:w-9 lg:h-9 text-label-sm",
  sm: "px-3 py-2 min-h-11 lg:min-h-0 text-label-sm",
  md: "px-6 py-3 min-h-11 text-label-md",
  lg: "px-8 py-3 lg:py-3.5 min-h-11 text-label-md",
};
</script>