<script setup lang="ts"></script>

<template>
  <section
    class="mt-[66px] py-[5rem] px-[1rem] flex flex-col justify-center items-center gap-[1.25rem] lg:mt-[72px] lg:py-[5rem] lg:px-[2rem]"
  >
    <h1 class="font-neueRegradeBold text-[2.5rem] text-ltPrimary leading-tight">
      Page Not Found
    </h1>
    <div
      class="w-[250px] mb-[1.25rem] text-center text-[1.125rem] text-TextNormal font-light"
    >
      Sorry, the page you were looking for could not be found.
    </div>
    <button
      class="nav-btn-solid w-fit flex justify-center items-center py-[.5rem] px-[1rem] text-TextLight border-[1px] rounded-[10px] leading-tight xl:whitespace-nowrap xl:text-[.875rem]"
    >
      Get Started
    </button>
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
