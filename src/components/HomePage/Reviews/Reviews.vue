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
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
  },
  {
    name: "Reviewer Name",
    businessName: "Business Name",
    img: tempImg,
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
  },
  {
    name: "Reviewer Name",
    businessName: "Business Name",
    img: tempImg,
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
  },
];
</script>

<template>
  <section
    class="py-[4rem] px-[1rem] bg-BGDark xs:mx-[1rem] xs:rounded-[24px] lg:mx-[2rem] lg:px-[2rem] xl:py-[5rem] xxl:w-[1396px] xxl:mx-auto"
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
      <div
        class="flex justify-center items-start gap-[1rem] flex-wrap xl:gap-[1.5rem]"
      >
        <div
          class="w-[240px] p-[.375rem] border-[2px] border-ltPrimary rounded-[20px]"
        >
          <div
            class="flex flex-col gap-[1.25rem] p-[1rem] bg-BGSemiDark rounded-[14px]"
          >
            <div
              class="min-w-[38px] min-h-[38px] w-[38px] h-[38px] flex justify-center items-center bg-BGLight rounded-[12px]"
            >
              <i
                class="ri-double-quotes-r text-[1.375rem] h-[22px] flex justify-center items-center text-ltPrimary translate-y-[1px]"
              ></i>
            </div>
            <div class="text-TextLight leading-snug">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </div>
            <div class="flex items-center gap-[.75rem]">
              <img
                :src="tempImg"
                alt=""
                class="min-w-[38px] min-h-[38px] w-[38px] h-[38px] object-cover content-center drop-shadow-lg rounded-[12px]"
              />
              <div class="flex flex-col">
                <div class="text-[13px] text-TextLight leading-tight">
                  Person Name
                </div>
                <div
                  class="text-[13px] font-light text-TextSemiNormal leading-tight"
                >
                  Business Name
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped></style>
