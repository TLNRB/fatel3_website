<script setup lang="ts">
import { ref } from "vue";
import { RouterLink } from "vue-router";
/*-- Import assets --*/
import arrowIcon from "@/assets/icons/arrow-right-up-line-primary.svg";

// Prop handling
const { textFirstPart, textHighlighted, textSecondPart } = defineProps([
  "textFirstPart",
  "textHighlighted",
  "textSecondPart",
]);
</script>

<template>
  <section
    class="mb-[3rem] py-[4rem] px-[1rem] flex flex-col items-center gap-[2.5rem] bg-ltPrimary md:justify-center md:gap-[5rem] md:flex-row md:flex-wrap lg:py-[5rem] lg:px-[2rem] xl:mb-[4rem] xl:gap-[8rem] xxl:gap-[10rem] xxl:py-[6rem]"
  >
    <h2
      class="w-[100%] text-center text-[2rem] font-[500] leading-[1.15] text-TextLight xs:w-[325px] sm:w-[350px] md:text-start lg:w-[525px] lg:text-[3rem] xxl:w-[700px] xxl:text-[4rem]"
    >
      {{ textFirstPart }}
      <span class="text-ltPrimaryLight">{{ textHighlighted }}</span>
      {{ textSecondPart }}
    </h2>
    <RouterLink
      :to="{ name: 'support', query: { id: 'getStarted' } }"
      class="btn w-fit flex justify-center items-center gap-[6px] mx-auto py-[.625rem] pl-[1rem] pr-[.625rem] text-ltPrimary border-[1px] rounded-[11px] leading-tight cursor-pointer md:mx-0 xxl:gap-[10px] xxl:py-[1rem] xxl:pl-[1.5rem] xxl:pr-[1.125rem] xxl:text-[1.25rem] xxl:rounded-[16px]"
    >
      <div>Get Started</div>
      <img
        :src="arrowIcon"
        alt="arrow icon"
        class="btn-arrow h-[18px] flex justify-center items-center xxl:h-[22px]"
      />
    </RouterLink>
  </section>
</template>

<style scoped>
.btn {
  background-color: var(--BGLight);
  border-color: var(--BGLight);
  transition: border-color, background-color 0.15s ease-in-out;
}

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
