<script setup lang="ts">
import { RouterLink } from "vue-router";
</script>

<template>
  <section
    class="min-h-[50vh] py-[5rem] px-[1rem] flex flex-col justify-center items-center gap-[1rem] md:min-h-[70vh] lg:px-[2rem] xl:py-[10rem]"
  >
    <h1
      class="text-[2rem] font-semibold text-ltPrimary leading-tight xs:text-[2.5rem] md:text-[3rem] xl:text-[4rem]"
    >
      Page Not Found
    </h1>
    <div
      class="w-[250px] mb-[1rem] text-center text-[1rem] text-TextNormal font-light xs:w-[300px] xs:text-[1.125rem] xl:w-[400px] xl:mb-[1.5rem] xl:text-[1.25rem]"
    >
      Sorry, the page you were looking for could not be found.
    </div>
    <RouterLink
      to="/"
      class="nav-btn-solid flex justify-center items-center py-[.5rem] px-[1rem] text-TextLight border-[1px] rounded-[10px] leading-tight xl:whitespace-nowrap xl:text-[1.125rem] xl:py-[.625rem] xl:px-[1.5rem] xl:rounded-[12px]"
    >
      Go Home
    </RouterLink>
  </section>
</template>

<style scoped>
.nav-btn-solid {
  background-color: var(--ltPrimary);
  border-color: var(--ltPrimary);
  transition: all 0.15s ease-in-out;
}

/*-- Hover isn't visible on touchscreen devices --*/
@media (hover: hover) {
  .nav-btn-solid:hover {
    background-color: var(--ltPrimaryDark);
    border-color: var(--ltPrimaryDark);
    transition: all 0.15s ease-in-out;
  }
}
</style>
