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
    class="py-[4rem] px-[1rem] bg-BGDark xs:mx-[1rem] xs:rounded-[24px] lg:mx-[2rem] lg:px-[2rem] xl:py-[5rem] xxl:w-[1396px] xxl:mx-auto xxl:pb-[8rem]"
  >
    <div class="flex flex-col items-center gap-[3rem] xl:gap-[4rem]">
      <div class="flex flex-col items-center gap-[1rem] xl:gap-[1.25rem]">
        <SectionType text="reviews" />
        <h2
          class="w-[100%] text-center text-[2rem] text-TextLight font-[500] leading-[1.15] xs:w-[300px] lg:w-[500px] lg:text-[3rem] xxl:w-[550px] xxl:text-[4rem]"
        >
          What Others Say about
          <span class="font-[500] text-ltPrimary">fatel3</span>
        </h2>
      </div>
      <div
        class="h-[100%] flex justify-center gap-[1rem] flex-wrap xl:gap-[1.5rem]"
      >
        <div
          v-for="(review, index) in reviews"
          :key="index"
          class="min-h-[100%] w-[240px] p-[.375rem] border-[2px] border-ltPrimary rounded-[20px] xs:w-[300px] xl:w-[350px]"
        >
          <div
            class="min-h-[100%] flex flex-col justify-between p-[1rem] bg-BGSemiDark rounded-[14px] xs:p-[1.25rem] xl:p-[1.5rem]"
          >
            <div
              class="min-w-[38px] min-h-[38px] w-[38px] h-[38px] flex justify-center items-center bg-BGLight rounded-[12px] xxl:min-w-[40px] xxl:min-h-[40px] xxl:w-[40px] xxl:h-[40px] xxl:rounded-[13px]"
            >
              <i
                class="ri-double-quotes-r text-[1.375rem] h-[22px] flex justify-center items-center text-ltPrimary translate-y-[1px] xxl:translate-x-[.5px]"
              ></i>
            </div>
            <div
              class="my-[1.25rem] text-TextLight font-light leading-snug xl:my-[1.5rem] xxl:text-[1.125rem]"
            >
              {{ review.text }}
            </div>
            <div class="flex items-center gap-[.75rem]">
              <img
                :src="review.img"
                alt=""
                class="min-w-[38px] min-h-[38px] w-[38px] h-[38px] object-cover content-center drop-shadow-lg rounded-[12px] xxl:min-w-[40px] xxl:min-h-[40px] xxl:w-[40px] xxl:h-[40px] xxl:rounded-[13px]"
              />
              <div class="flex flex-col">
                <div
                  class="text-[13px] text-TextLight leading-tight xxl:text-[.875rem]"
                >
                  {{ review.name }}
                </div>
                <div
                  class="text-[13px] font-light text-TextSemiNormal leading-tight xxl:text-[.875rem]"
                >
                  {{ review.businessName }}
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
