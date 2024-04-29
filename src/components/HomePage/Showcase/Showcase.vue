<script setup lang="ts">
import { RouterLink } from "vue-router";
/*-- Import Components --*/
import SectionType from "@/components/Misc/SectionType.vue";
/*-- Import assets --*/
import arrowIcon from "@/assets/icons/arrow-right-up-line-primary.svg";
import tempImg from "@/assets/images/temp-fatel3.png";
</script>

<template>
  <section
    id="showcase"
    class="relative mb-[4rem] pt-[4rem] bg-ltPrimary lg:pb-[4rem] xl:mb-[6rem] xl:py-[6rem] xxl:py-[7rem] xxl:mb-[7rem]"
  >
    <div
      class="flex flex-col items-center gap-[2rem] px-[1rem] lg:px-[2rem] lg:w-[100%] lg:items-start xl:gap-[3rem] xxl:w-[1396px] xxl:mx-auto"
    >
      <div
        class="flex flex-col items-center gap-[1rem] lg:items-start xl:gap-[1.25rem]"
      >
        <SectionType
          text="showcase"
          bgColor="bg-BGLight"
          textColor="text-ltPrimary"
        />
        <h2
          class="w-[100%] text-center text-[2rem] text-TextLight font-[500] leading-[1.2] xs:w-[325px] sm:w-[500px] lg:w-[550px] lg:text-start lg:text-[3rem] lg:leading-[1.15] xxl:w-[700px] xxl:text-[4rem]"
        >
          Create Your Own Site with Our New Product
          <span
            class="px-[.375rem] bg-ltHoverPrimaryDark font-[500] rounded-[8px] lg:px-[.5rem] lg:rounded-[12px] xxl:px-[.75rem] xxl:rounded-[16px]"
            >Showcase</span
          >
        </h2>
      </div>
      <div
        class="w-[100%] text-center text-[15px] text-TextLight font-light leading-snug xs:w-[325px] sm:w-[500px] lg:w-[500px] lg:text-start lg:text-[1rem] xxl:w-[600px] xxl:text-[17px]"
      >
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua. Lorem ipsum dolor
        sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt
        ut labore et dolore magna aliqua.
      </div>
      <RouterLink
        :to="{ name: 'support', query: { id: 'getStarted' } }"
        class="btn w-fit flex justify-center items-center gap-[6px] pl-[1rem] pr-[.625rem] mx-auto py-[.625rem] bg-BGLight text-ltPrimary border-[1px] border-BGLight rounded-[11px] leading-tight cursor-pointer lg:ml-0 xxl:gap-[7px] xxl:pl-[1.25rem] xxl:pr-[13px]"
      >
        <div>Get Started</div>
        <img
          :src="arrowIcon"
          alt="arrow icon"
          class="btn-arrow h-[18px] flex justify-center items-center xxl:h-[20px]"
        />
      </RouterLink>
    </div>
    <div
      class="mt-[4rem] border-t-[1px] border-b-[1px] border-ltPrimary sm:px-[1rem] lg:w-[45%] lg:absolute lg:bottom-0 lg:right-0 lg:px-0 xxl:w-[42%] xxxxl:w-[37%]"
    >
      <img
        class="w-[100%] rounded-t-[20px] lg:rounded-tr-[0px] xxl:rounded-tl-[24px]"
        :src="tempImg"
        alt=""
      />
    </div>
  </section>
</template>

<style scoped>
.btn-arrow {
  transform: translateY(0.5px) rotate(0);
  transition: all 0.3s ease-in-out;
}

/*-- Hover isn't visible on touchscreen devices --*/
@media (hover: hover) {
  .btn:hover .btn-arrow {
    transform: translateY(0.5px) rotate(45deg);
  }
}
</style>
