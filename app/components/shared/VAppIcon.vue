<template>
  <Icon :name="name" aria-hidden="true" class="shrink-0" />
</template>

<script lang="ts" setup>
import type { IconifyName } from "@/types/portfolio";
import type { Props } from "@/types/shared/VAppIcon";

defineProps<Props>();
</script>