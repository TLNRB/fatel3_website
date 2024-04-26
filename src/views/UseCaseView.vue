<script setup lang="ts">
import { ref } from "vue";
import { useRoute } from "vue-router";
/*-- Import Components --*/
import ButtonFilled from "@/components/Misc/ButtonFilled.vue";
/*-- Import assets --*/
import arrowIcon from "@/assets/icons/arrow-right-up-line.svg";
/*-- Import data --*/
import useCasesData from "@/data/useCasesData";

// Getting the right use case
const route = useRoute();

const useCase = () => {
  useCasesData.find((useCase) => useCase.route === route.params.route);
};
</script>

<template>
  <main
    class="py-[4rem] px-[1rem] flex flex-col items-center lg:py-[5rem] lg:px-[2rem] xl:py-[6rem] xxl:w-[1396px] xxl:mx-auto xxl:px-0"
  >
    <div class="flex flex-col items-center gap-[1rem] xl:gap-[1.25rem]">
      <h2
        class="w-[100%] text-center text-[2rem] font-[500] leading-[1.15] xs:w-[300px] sm:w-[350px] lg:w-[550px] lg:text-[3rem] xxl:w-[700px] xxl:text-[4rem]"
      >
        All the Tools <span class="font-[500] text-ltPrimary">You</span> Need
        for Inventorying
      </h2>
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
