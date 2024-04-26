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
    class="py-[4rem] px-[1rem] lg:py-[5rem] lg:px-[2rem] xl:py-[6rem] xxl:w-[1396px] xxl:mx-auto xxl:py-[7rem] xxl:px-0"
  >
    <div class="flex justify-center gap-[3rem] flex-wrap md:justify-between">
      <div class="w-fit flex flex-col gap-[3rem]">
        <h1
          class="w-[100%] text-[2rem] font-[500] leading-[1.15] sm:w-[500px] md:w-[380px] lg:w-[550px] lg:text-[3rem] xxl:w-[750px] xxl:text-[4rem]"
        >
          <span class="font-[500] text-ltPrimary">{{ useCase?.title }}</span>
          {{ useCase?.pageTitle }}
        </h1>
        <div
          class="w-[100%] flex flex-col gap-[1rem] pl-[.25rem] text-TextNormal sm:w-[500px] md:w-[380px] lg:w-[555px] xxl:w-[605px]"
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
          class="hidden md:flex md:mx-0 lg:mt-[1rem]"
        />
      </div>
      <div
        class="w-[100%] flex flex-col items-center gap-[1.25rem] xs:w-[300px] xl:w-[400px]"
      >
        <div
          class="flex flex-col gap-[1.25rem] p-[1rem] border-[1px] border-ltBorderNormal rounded-[16px] xs:p-[1.25rem] xl:p-[1.5rem] xl:gap-[1.5rem]"
        >
          <div
            class="min-w-[38px] min-h-[38px] w-[38px] h-[38px] flex justify-center items-center border-[1px] border-ltBorderNormal rounded-[12px] xxl:min-w-[40px] xxl:min-h-[40px] xxl:w-[40px] xxl:h-[40px] xxl:rounded-[13px]"
          >
            <i
              class="ri-double-quotes-r text-[1.375rem] h-[22px] flex justify-center items-center text-ltPrimary translate-y-[1px] xxl:translate-x-[.5px]"
            ></i>
          </div>
          <div class="leading-snug xxl:text-[1.125rem]">
            {{ useCase?.pageReviewText }}
          </div>
          <div class="flex items-center gap-[.75rem]">
            <img
              :src="useCase?.pageReviewImage"
              alt="review author image"
              class="min-w-[38px] min-h-[38px] w-[38px] h-[38px] object-cover content-center rounded-[12px] xxl:min-w-[40px] xxl:min-h-[40px] xxl:w-[40px] xxl:h-[40px] xxl:rounded-[13px]"
            />
            <div class="flex flex-col">
              <div class="text-[13px] leading-tight xxl:text-[.875rem]">
                {{ useCase?.pageReviewAuthor }}
              </div>
              <div
                class="text-[13px] font-light text-TextNormal leading-tight xxl:text-[.875rem]"
              >
                {{ useCase?.pageReviewAuthorTitle }}
              </div>
            </div>
          </div>
        </div>
        <div
          class="w-[100%] flex flex-col gap-[1.25rem] p-[1rem] bg-BGSemiNormal rounded-[16px] xs:p-[1.25rem] xl:p-[1.5rem] xl:gap-[1.5rem]"
        >
          <div class="text-center">Apps and Integrations</div>
          <div class="flex justify-center items-center gap-[1rem] flex-wrap">
            <a
              v-for="(app, index) in useCase?.pageApps"
              :key="index"
              :href="app.route"
              class="w-fit flex flex-col items-center gap-[.75rem] cursor-pointer"
            >
              <div
                class="min-w-[50px] min-h-[50px] w-[50px] h-[50px] flex justify-center items-center bg-BGLight rounded-[16px]"
              >
                <i
                  class="feature-icon text-[1.75rem] h-[28px] flex justify-center items-center text-ltPrimary translate-y-[.5px]"
                  :class="app.icon"
                ></i>
              </div>
              <div
                class="feature-icon-text text-center text-[.875rem] font-light text-ltPrimary leading-tight"
              >
                {{ app.title }}
              </div>
            </a>
          </div>
        </div>
      </div>
    </div>

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
