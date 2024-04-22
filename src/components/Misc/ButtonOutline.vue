<script setup lang="ts">
import { RouterLink } from "vue-router";
// Prop handling
const { text, theme, route } = defineProps(["text", "theme", "route"]);
</script>

<template>
  <RouterLink
    :to="route"
    class="w-fit flex justify-center items-center gap-[6px] mx-auto py-[.625rem] px-[1rem] bg-transparent border-[1px] rounded-[11px] leading-tight cursor-pointer xxl:px-[1.25rem]"
    :class="theme === 'light' ? 'btn-outline-light' : 'btn-outline-dark'"
  >
    <div>{{ text }}</div>
  </RouterLink>
</template>

<style scoped>
.btn-outline-light {
  color: var(--TextSemiDark);
  border-color: var(--ltBorderNormal);
  transition: all 0.15s ease-in-out;
}

.btn-outline-dark {
  color: var(--TextLight);
  border-color: var(--TextLight);
  transition: all 0.15s ease-in-out;
}

/*-- Hover isn't visible on touchscreen devices --*/
@media (hover: hover) {
  .btn-outline-light:hover {
    color: var(--ltPrimary);
    border-color: var(--ltPrimary);
  }

  .btn-outline-dark:hover {
    color: var(--ltPrimaryDark);
    border-color: var(--ltPrimaryDark);
  }
}
</style>
