<template>
  <div
    ref="containerRef"
    class="relative flex items-center gap-2 md:gap-2.5 overflow-x-auto no-scrollbar pb-1 md:flex-wrap md:overflow-visible"
    role="tablist"
    :aria-label="
      locale === 'en'
        ? 'Filter projects by category'
        : 'تصفية المشاريع حسب الفئة'
    "
  >
    <!-- Sliding active pill (sits behind the tabs) -->
    <span
      v-show="indicator.ready"
      class="absolute top-0 left-0 rounded-full bg-accent pointer-events-none transition-[transform,width,height] duration-(--duration-panel) ease-panel motion-reduce:transition-none"
      :style="{
        width: `${indicator.width}px`,
        height: `${indicator.height}px`,
        transform: `translate(${indicator.x}px, ${indicator.y}px)`,
      }"
      aria-hidden="true"
    />

    <button
      v-for="option in options"
      :key="option.value"
      :ref="(el) => setTabRef(option.value, el)"
      type="button"
      role="tab"
      :aria-selected="modelValue === option.value"
      class="relative z-10 shrink-0 inline-flex items-center min-h-11 lg:min-h-0 px-3.5 py-1.5 md:px-4 md:py-2 rounded-full font-headline text-label-sm md:text-label-md border transition-[color,background-color,border-color,font-weight] duration-(--duration-standard) motion-reduce:transition-none focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent cursor-pointer"
      :class="
        modelValue === option.value
          ? [
              'font-semibold text-on-accent',
              // until the sliding pill is measured, paint the tab itself
              indicator.ready ? 'border-transparent bg-transparent' : 'bg-accent border-accent',
            ]
          : 'font-medium bg-surface-elevated text-text-secondary border-border hover:border-accent hover:text-text-primary'
      "
      @click="emit('update:modelValue', option.value)"
    >
      <!-- Check mark: expands + pops in when active, collapses when not -->
      <span
        class="inline-flex overflow-hidden transition-all duration-(--duration-panel) ease-panel motion-reduce:transition-none"
        :class="
          modelValue === option.value
            ? 'w-3 md:w-3.5 me-1.5 md:me-2 opacity-100 scale-100 rotate-0'
            : 'w-0 me-0 opacity-0 scale-50 -rotate-45'
        "
        aria-hidden="true"
      >
        <LazyVAppIcon name="lucide:check" class="w-3 h-3 md:w-3.5 md:h-3.5" />
      </span>
      <span>{{ t(option.label) }} ({{ option.count }})</span>
    </button>
  </div>
</template>

<script lang="ts" setup>
import type { WorkFilter, WorkFilterBarProps } from "@/types/work";

const { locale, t } = useLocale();

const props = defineProps<WorkFilterBarProps & { modelValue: WorkFilter }>();

const emit = defineEmits<{
  "update:modelValue": [value: WorkFilter];
}>();

const containerRef = ref<HTMLElement | null>(null);
const tabRefs = new Map<WorkFilter, HTMLElement>();

const indicator = reactive({
  ready: false,
  x: 0,
  y: 0,
  width: 0,
  height: 0,
});

function setTabRef(key: WorkFilter, el: unknown): void {
  if (el instanceof HTMLElement) tabRefs.set(key, el);
  else tabRefs.delete(key);
}

/** Place the pill over the active tab. offset* are layout values, unaffected by transforms. */
function measure(): void {
  const el = tabRefs.get(props.modelValue);
  if (!el) return;
  indicator.x = el.offsetLeft;
  indicator.y = el.offsetTop;
  indicator.width = el.offsetWidth;
  indicator.height = el.offsetHeight;
  indicator.ready = true;
}

watch(
  [() => props.modelValue, locale],
  async () => {
    await nextTick();
    measure();
  },
  { flush: "post" },
);

// The check mark animates the active tab's width, which also shifts its
// neighbours. Observing every tab keeps the pill glued to it for the whole
// transition (and covers font loading / wrapping after mount).
let resizeObserver: ResizeObserver | null = null;

onMounted(() => {
  measure();
  resizeObserver = new ResizeObserver(measure);
  if (containerRef.value) resizeObserver.observe(containerRef.value);
  tabRefs.forEach((el) => resizeObserver?.observe(el));
  document.fonts?.ready.then(measure);
});

onBeforeUnmount(() => resizeObserver?.disconnect());
</script>
