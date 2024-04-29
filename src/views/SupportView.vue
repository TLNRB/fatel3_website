<script setup lang="ts">
import { ref, computed } from "vue";
/*-- Import Components --*/
import SectionType from "@/components/Misc/SectionType.vue";
/*-- Import assets --*/
/*-- Import data --*/

/* Dynamic data */
// Get Started
const getStartedSection = ref<string>("get started");
const getStartedTitleFirst = ref<string>("Get Started with");
const getStartedTitleHighlighted = ref<string>("fatel3");
const getStartedTitleLast = ref<string>("Today");
const getStartedContent = ref<string>(
  "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
);

// Contact us
const contactSection = ref<string>("contact us");
const contactTitleFirst = ref<string>("Get in Touch with");
const contactTitleHighlighted = ref<string>("fatel3");
const contactTitleLast = ref<string>("to Get Help");
const contactContent = ref<string>(
  "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
);
</script>

<template>
  <main
    class="py-[4rem] px-[1rem] flex flex-col items-center lg:py-[5rem] lg:px-[2rem] xl:py-[6rem] xxl:w-[1396px] xxl:mx-auto xxl:px-0"
  >
    <div class="flex flex-col items-center gap-[1rem] xl:gap-[1.25rem]">
      <SectionType
        :text="getStartedSection"
        bgColor="bg-ltPrimary"
        textColor="text-TextLight"
      />
      <h2
        class="w-[100%] text-center text-[2rem] font-[500] leading-[1.15] xs:w-[300px] sm:w-[350px] lg:w-[500px] lg:text-[3rem] xxl:w-[700px] xxl:text-[4rem]"
      >
        {{ getStartedTitleFirst }}
        <span class="font-[500] text-ltPrimary">{{
          getStartedTitleHighlighted
        }}</span>
        {{ getStartedTitleLast }}
      </h2>
    </div>
    <div
      class="w-[100%] mt-[1.5rem] text-center text-TextNormal font-light leading-snug xs:w-[325px] sm:w-[400px] lg:w-[550px] lg:text-[1.125rem] xl:mt-[2rem] xxl:w-[600px] xxl:text-[1.25rem]"
    >
      {{ getStartedContent }}
    </div>
  </main>
</template>

<style scoped></style>
