<script setup lang="ts">
/*-- Import Components --*/
import CTA from "@/components/CTA/CTA.vue";
import SectionType from "@/components/Misc/SectionType.vue";
import ButtonFilled from "@/components/Misc/ButtonFilled.vue";
/*-- Import assets --*/
import arrowIcon from "@/assets/icons/arrow-right-up-line-primary.svg";
</script>

<template>
  <main
    class="py-[4rem] px-[1rem] flex flex-col items-center lg:py-[5rem] lg:px-[2rem] xl:py-[6rem] xxl:w-[1396px] xxl:mx-auto xxl:px-0"
  >
    <div class="flex flex-col items-center gap-[1rem] xl:gap-[1.25rem]">
      <SectionType
        text="about us"
        bgColor="bg-ltPrimary"
        textColor="text-TextLight"
      />
      <h1
        class="w-[100%] text-center text-[2rem] font-[500] leading-[1.15] xs:w-[300px] sm:w-[350px] lg:w-[550px] lg:text-[3rem] xxl:w-[700px] xxl:text-[4rem]"
      >
        We Make Inventorying
        <span
          class="px-[.375rem] bg-BGSemiNormal font-[500] rounded-[8px] lg:px-[.5rem] lg:rounded-[12px] xxl:px-[.75rem] xxl:rounded-[16px]"
          >Easier</span
        >
        for
        <span class="font-[500] text-ltPrimary">You</span>
      </h1>
    </div>
    <div
      class="w-[100%] mt-[1.5rem] text-center text-TextNormal font-light leading-snug xs:w-[325px] sm:w-[400px] lg:w-[550px] lg:text-[1.125rem] xl:mt-[2rem] xxl:w-[600px] xxl:text-[1.25rem]"
    >
      Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
      tempor incididunt ut labore et dolore magna aliqua.
    </div>
  </main>
</template>

<style scoped></style>
