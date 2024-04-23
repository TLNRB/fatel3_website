<script setup lang="ts">
/*-- Import Components --*/
import SectionType from "@/components/Misc/SectionType.vue";
</script>

<template>
  <section
    class="py-[4rem] px-[1rem] bg-BGSemiDark xs:mx-[1rem] xs:rounded-[24px] lg:mx-[2rem] lg:px-[2rem] xl:py-[5rem] xxl:w-[1396px] xxl:mx-auto"
  >
    <div class="flex flex-col items-center gap-[3rem] xl:gap-[4rem]">
      <div class="flex flex-col items-center gap-[1rem] xl:gap-[1.25rem]">
        <SectionType text="reviews" />
        <h2
          class="w-[100%] text-center text-[2rem] text-TextLight font-[500] leading-[1.2] xs:w-[300px] lg:w-[500px] lg:text-[3rem] xxl:w-[550px] xxl:text-[4rem]"
        >
          What Others Say about
          <span class="font-[500] text-ltPrimary">fatel3</span>
        </h2>
      </div>
      <div></div>
    </div>
  </section>
</template>

<style scoped></style>
