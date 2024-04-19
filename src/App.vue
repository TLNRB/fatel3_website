<script setup lang="ts">
import { RouterView } from "vue-router";
/*-- Import Components --*/
import Navbar from "@/components/Nav/Navbar.vue";
</script>

<template>
  <Navbar />
  <RouterView />
  <div
    class="hidden bg-red-500 h-[150vh] w-[100&] flex justify-center items-center"
  >
    hello
  </div>
</template>

<style scoped></style>
