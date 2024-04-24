<script setup lang="ts">
// Prop handling
const { text, bgColor, textColor } = defineProps([
  "text",
  "bgColor",
  "textColor",
]);
</script>

<template>
  <div
    class="w-fit py-[.25rem] px-[.625rem] text-[.75rem] rounded-[6px] leading-tight xxl:px-[.75rem] xxl:text-[.875rem] xxl:rounded-[7px]"
    :class="[bgColor, textColor]"
  >
    {{ text }}
  </div>
</template>

<style scoped></style>
