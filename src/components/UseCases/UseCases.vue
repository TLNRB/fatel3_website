<script setup lang="ts">
import { RouterLink } from "vue-router";
/*-- Import Components --*/
import SectionType from "@/components/Misc/SectionType.vue";
import ButtonFilled from "@/components/Misc/ButtonFilled.vue";
/*-- Import assets --*/
import arrowIcon from "@/assets/icons/arrow-right-up-line.svg";
/*-- Import data --*/
import useCases from "@/data/useCasesData";
</script>

<template>
  <section
    class="py-[4rem] px-[1rem] flex flex-col items-center lg:py-[5rem] lg:px-[2rem] xl:py-[6rem] xxl:w-[1396px] xxl:mx-auto xxl:py-[7rem] xxl:px-0"
  >
    <div class="flex flex-col items-center gap-[1rem] xl:gap-[1.25rem]">
      <SectionType
        text="use cases"
        bgColor="bg-ltPrimary"
        textColor="text-TextLight"
      />
      <h2
        class="w-[100%] text-center text-[2rem] font-[500] leading-[1.15] xs:w-[300px] md:w-[350px] lg:w-[550px] lg:text-[3rem] xxl:w-[700px] xxl:text-[4rem]"
      >
        Different Cases where We Are Useful
      </h2>
    </div>
    <div
      class="w-[100%] mt-[1.5rem] text-center text-TextNormal font-light leading-snug xs:w-[325px] sm:w-[400px] lg:w-[550px] lg:text-[1.125rem] xl:mt-[2rem] xxl:w-[600px] xxl:text-[1.25rem]"
    >
      Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
      tempor incididunt ut labore et dolore magna aliqua.
    </div>
    <div
      class="flex justify-center gap-[1rem] flex-wrap my-[3rem] xl:gap-[1.5rem] xl:my-[4rem]"
    >
      <div
        v-for="(useCase, index) in useCases"
        :key="index"
        class="min-h-[100%] w-[240px] p-[.375rem] border-[2px] border-ltPrimary rounded-[20px] xs:w-[300px] xl:w-[350px]"
      >
        <div
          class="min-h-[100%] flex flex-col justify-between p-[1rem] bg-BGSemiLight rounded-[14px] xs:p-[1.25rem] xl:p-[1.5rem]"
        >
          <div class="flex flex-col gap-[1rem] xl:gap-[1.5rem]">
            <div
              class="min-w-[38px] min-h-[38px] w-[38px] h-[38px] flex justify-center items-center bg-BGLight rounded-[12px] xxl:min-w-[48px] xxl:min-h-[48px] xxl:w-[48px] xxl:h-[48px] xxl:rounded-[16px]"
            >
              <i
                class="text-[1.375rem] h-[22px] flex justify-center items-center text-ltPrimary translate-y-[1px] xxl:text-[1.625rem] xxl:h-[26px] xxl:translate-x-[.5px]"
                :class="useCase.icon"
              ></i>
            </div>
            <div class="flex flex-col gap-[.5rem]">
              <div
                class="flex flex-col-reverse gap-[.25rem] xs:flex-row xs:items-center xs:gap-[.625rem]"
              >
                <div
                  class="text-[1.125rem] font-[500] leading-tight xxl:text-[1.25rem]"
                >
                  {{ useCase.title }}
                </div>
                <span
                  v-if="useCase.commingSoon"
                  class="w-fit py-[.125rem] px-[.25rem] text-[.625rem] bg-BGLight border-[1px] border-ltPrimary text-ltPrimary leading-tight rounded-[4px] duration-[.15] ease-in-out"
                  >Comming soon
                </span>
              </div>
              <div class="text-[15px] font-light leading-snug xxl:text-[1rem]">
                {{ useCase.longDesc }}
              </div>
            </div>
          </div>
          <RouterLink
            v-if="!useCase.commingSoon"
            :to="`/use-cases/${useCase.route}`"
            class="mt-[1rem] ml-0 mr-auto text-TextNormal text-[.875rem] font-light underline cursor-pointer"
          >
            Read more
          </RouterLink>
        </div>
      </div>
    </div>
    <ButtonFilled
      text="Get Started"
      :icon="arrowIcon"
      altText="arrow icon"
      route="/support"
    />
  </section>
</template>

<style scoped></style>
