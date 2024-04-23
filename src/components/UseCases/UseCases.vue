<script setup lang="ts">
/*-- Import Components --*/
import SectionType from "@/components/Misc/SectionType.vue";
import ButtonFilled from "@/components/Misc/ButtonFilled.vue";
/*-- Import assets --*/
import arrowIcon from "@/assets/icons/arrow-right-up-line.svg";
</script>

<template>
  <section
    class="py-[4rem] px-[1rem] flex flex-col items-center gap-[1.5rem] lg:py-[5rem] lg:px-[2rem] xl:gap-[2rem] xl:py-[6rem] xxl:w-[1396px] xxl:mx-auto xxl:px-0"
  >
    <div class="flex flex-col items-center gap-[1rem] xl:gap-[1.25rem]">
      <SectionType text="use cases" />
      <h2
        class="w-[100%] text-center text-[2rem] font-[500] leading-[1.15] xs:w-[300px] md:w-[350px] lg:w-[550px] lg:text-[3rem] xxl:w-[700px] xxl:text-[4rem]"
      >
        Different Cases where We Are Useful
      </h2>
    </div>
    <div
      class="w-[100%] text-center text-TextNormal font-light leading-snug xs:w-[325px] sm:w-[400px] lg:w-[550px] lg:text-[1.125rem] xxl:w-[600px] xxl:text-[1.25rem]"
    >
      Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
      tempor incididunt ut labore et dolore magna aliqua.
    </div>
    <div
      class="flex fjustify-center gap-[1rem] flex-wrap my-[3rem] xl:gap-[1.5rem] xl:my-[4rem]"
    >
      <div></div>
    </div>
    <ButtonFilled
      text="Get Started"
      :icon="arrowIcon"
      altText="arrow icon"
      route="/support"
    />
  </section>
</template>

<style scoped></style>
