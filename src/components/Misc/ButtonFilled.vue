<script setup lang="ts">
import { RouterLink } from "vue-router";
// Prop handling
const { text, icon, altText, route } = defineProps([
  "text",
  "icon",
  "altText",
  "route",
]);
</script>

<template>
  <RouterLink
    :to="route"
    class="btn w-fit flex justify-center items-center mx-auto py-[.625rem] text-TextLight border-[1px] rounded-[11px] leading-tight cursor-pointer"
    :class="
      icon
        ? 'gap-[6px] pl-[1rem] pr-[.625rem] xxl:gap-[7px] xxl:pl-[1.25rem] xxl:pr-[13px]'
        : 'px-[1rem] xxl:px-[1.25rem]'
    "
  >
    <div>{{ text }}</div>
    <img
      v-if="icon"
      :src="icon"
      :alt="altText"
      class="btn-arrow h-[18px] flex justify-center items-center xxl:h-[20px]"
    />
  </RouterLink>
</template>

<style scoped>
.btn {
  background-color: var(--ltPrimary);
  border-color: var(--ltPrimary);
  transition: border-color, background-color 0.15s ease-in-out;
}

.btn-arrow {
  transform: translateY(0.5px) rotate(0);
  transition: all 0.3s ease-in-out;
}

/*-- Hover isn't visible on touchscreen devices --*/
@media (hover: hover) {
  .btn:hover {
    background-color: var(--ltPrimaryDark);
    border-color: var(--ltPrimaryDark);
  }

  .btn:hover .btn-arrow {
    transform: translateY(0.5px) rotate(45deg);
  }
}
</style>
