<script setup lang="ts">
/*-- Import Components --*/
import SectionType from "@/components/Misc/SectionType.vue";
/*-- Import assets --*/
import tempImg from "@/assets/images/temp-review.jpg";

// FAQs
const reviews: any = [
  {
    name: "Reviewer Name",
    businessName: "Business Name",
    img: tempImg,
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
  },
  {
    name: "Reviewer Name",
    businessName: "Business Name",
    img: tempImg,
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
  },
  {
    name: "Reviewer Name",
    businessName: "Business Name",
    img: tempImg,
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
  },
];
</script>

<template>
  <section
    class="pt-[4rem] px-[1rem] bg-ltPrimary lg:px-[2rem] xl:py-[5rem] xxl:w-[1396px] xxl:mx-auto xxl:pb-[8rem]"
  >
    <div class="flex flex-col items-center gap-[3rem] xl:gap-[4rem]">
      <div class="flex flex-col items-center gap-[1rem] xl:gap-[1.25rem]">
        <SectionType
          text="reviews"
          bgColor="bg-BGLight"
          textColor="text-ltPrimary"
        />
        <h2
          class="w-[100%] text-center text-[2rem] text-TextLight font-[500] leading-[1.15] xs:w-[300px] lg:w-[500px] lg:text-[3rem] xxl:w-[550px] xxl:text-[4rem]"
        >
          What Others Say about
          <span class="font-[500] text-ltPrimary">fatel3</span>
        </h2>
      </div>
    </div>
  </section>
</template>

<style scoped></style>
