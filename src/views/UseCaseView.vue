<script setup lang="ts">
import { ref, computed, onMounted } from "vue";
import { useRoute } from "vue-router";
/*-- Import Components --*/
import ButtonFilled from "@/components/Misc/ButtonFilled.vue";
/*-- Import assets --*/
import arrowIcon from "@/assets/icons/arrow-right-up-line.svg";
/*-- Import data --*/
import useCasesData from "@/data/useCasesData";

// Getting the right use case
const route = useRoute();

const useCase = computed(() =>
  useCasesData.find((useCase: any) => useCase.route == route.params.route)
);
</script>

<template>
  <main
    class="py-[4rem] px-[1rem] flex flex-col flex-wrap lg:py-[5rem] lg:px-[2rem] xl:py-[6rem] xxl:w-[1396px] xxl:mx-auto xxl:px-0"
  >
    <div class="flex flex-col gap-[3rem]">
      <h1
        class="w-[100%] text-[2rem] font-[500] leading-[1.15] xs:w-[325px] sm:w-[375px] lg:w-[550px] lg:text-[3rem] xxl:w-[750px] xxl:text-[4rem]"
      >
        <span class="font-[500] text-ltPrimary">{{ useCase?.title }}</span>
        {{ useCase?.pageTitle }}
      </h1>
      <div
        class="w-[100%] flex flex-col gap-[1rem] pl-[.25rem] text-TextNormal xs:w-[330px] sm:w-[380px] lg:w-[555px] xxl:w-[605px]"
      >
        <div
          v-for="(paragraph, index) in useCase?.pageDesc"
          :key="index"
          class="font-light"
        >
          {{ paragraph }}
        </div>
      </div>
      <ButtonFilled
        text="Get Started"
        :icon="arrowIcon"
        altText="arrow icon"
        route="/support"
        class="hidden md:flex md:mx-0 xl:mt-[1rem]"
      />
    </div>
    <div class="w-[100%] xs:w-[300px] lg:w-[400px]"></div>
    <ButtonFilled
      text="Get Started"
      :icon="arrowIcon"
      altText="arrow icon"
      route="/support"
      class="flex mt-[3rem] md:hidden"
    />
  </main>
</template>

<style scoped></style>
