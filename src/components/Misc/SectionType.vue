<script setup lang="ts">
// Prop handling
const { text } = defineProps(["text"]);
</script>

<template>
  <div
    class="py-[.25rem] px-[.625rem] bg-ltPrimary text-[.75rem] text-TextLight rounded-[6px] leading-tight xxl:px-[.75rem] xxl:text-[.875rem] xxl:rounded-[7px]"
  >
    {{ text }}
  </div>
</template>

<style scoped></style>
