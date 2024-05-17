<script setup lang="ts">
/*-- Import components --*/
import ButtonFilled from "@/components/Misc/ButtonFilled.vue";
/*-- Import assets --*/
import arrowIcon from "@/assets/icons/arrow-right-up-line.svg";
import tempImg from "@/assets/images/temp-fatel3.png";
</script>

<template>
  <section
    class="pt-[3rem] flex flex-col items-center gap-[4rem] sm:pt-[4rem] xl:gap-[6rem] xl:pt-[6rem] xxl:w-[1396px] xxl:mx-auto"
  >
    <div
      class="flex flex-col gap-[2.5rem] px-[1rem] lg:w-[100%] lg:flex-row lg:justify-between lg:items-center lg:flex-wrap lg:px-[2rem] xl:w-auto xl:gap-[6rem] xxl:w-[100%] xxl:gap-[8rem] xxl:px-0"
    >
      <h1
        class="text-center text-[3rem] font-[500] leading-[1.25] sm:w-[525px] sm:text-[4rem] sm:leading-[1.2] lg:text-start xxl:w-[750px] xxl:text-[5.5rem]"
      >
        Manage <span class="font-[500] text-ltPrimary">Your</span> Inventory
        <span
          class="px-[.5rem] bg-BGSemiNormal font-[500] rounded-[12px] sm:px-[.625rem] sm:rounded-[16px] xxl:px-[.75rem] xxl:rounded-[22px]"
          >Easier</span
        >
      </h1>
      <div
        class="flex flex-col gap-[2.5rem] sm:w-[525px] lg:w-[425px] lg:gap-[2rem] xl:w-[500px]"
      >
        <div
          class="text-center text-[1rem] font-light text-TextNormal sm:text-[1.125rem] sm:leading-snug lg:text-start xxl:text-[1.25rem]"
        >
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua.
        </div>
        <ButtonFilled
          text="Get Started"
          :icon="arrowIcon"
          altText="arrow icon"
          :route="{ name: 'support', query: { id: 'getStarted' } }"
          class="lg:ml-0 xxl:py-[.75rem] xxl:text-[1.125rem] xxl:rounded-[13px]"
        />
      </div>
    </div>
    <div
      class="pt-[.5rem] px-[.5rem] border-t-[1px] border-x-[1px] border-ltBorder rounded-t-[20px] lg:mx-[2rem] lg:rounded-t-[32px] xxl:pt-[1rem] xxl:px-[1rem] xl:w-[1121px] xxl:w-auto xxl:mx-0"
    >
      <img
        class="w-[100%] rounded-t-[12px] lg:rounded-t-[24px] xxl:w-[1396px]"
        :src="tempImg"
        alt="Image of fatel3 product"
      />
    </div>
  </section>
</template>

<style scoped></style>
