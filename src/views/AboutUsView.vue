<script setup lang="ts">
/*-- Import Components --*/
import CTA from "@/components/CTA/CTA.vue";
import SectionType from "@/components/Misc/SectionType.vue";
import ButtonFilled from "@/components/Misc/ButtonFilled.vue";
/*-- Import assets --*/
import arrowIcon from "@/assets/icons/arrow-right-up-line-primary.svg";
import aboutUsImage from "@/assets/images/temp-review.jpg";
</script>

<template>
  <main class="flex flex-col items-center pt-[3rem] lg:pt-[4rem] xl:pt-[5rem]">
    <section class="px-[1rem] lg:px-[2rem] xxl:w-[1396px] xxl:mx-auto xxl:px-0">
      <div class="flex flex-col items-center gap-[1rem] xl:gap-[1.25rem]">
        <SectionType
          text="about us"
          bgColor="bg-ltPrimary"
          textColor="text-TextLight"
        />
        <h1
          class="w-[100%] text-center text-[2rem] font-[500] leading-[1.15] xs:w-[325px] sm:w-[350px] lg:w-[550px] lg:text-[3rem] xxl:w-[700px] xxl:text-[4rem]"
        >
          We Make Inventorying
          <span
            class="px-[.375rem] bg-BGSemiNormal font-[500] rounded-[8px] lg:px-[.5rem] lg:rounded-[12px] xxl:px-[.75rem] xxl:rounded-[16px]"
            >Easier</span
          >
          for
          <span class="font-[500] text-ltPrimary">You</span>
        </h1>
      </div>
      <div
        class="w-[100%] mt-[1.5rem] mx-auto text-center text-TextNormal font-light leading-snug xs:w-[330px] sm:w-[400px] lg:w-[550px] lg:text-[1.125rem] xl:mt-[2rem] xxl:w-[600px] xxl:text-[1.25rem]"
      >
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua.
      </div>
      <div
        class="flex flex-col-reverse gap-[3rem] my-[4rem] md:flex-row md:flex-wrap md:justify-center md:items-center lg:gap-[6rem] lg:my-[6rem] xxl:gap-[7rem] xxl:my-[8rem]"
      >
        <div
          class="w-[100%] rounded-[20px] sm:w-[500px] md:w-[350px] lg:max-h-[290px] lg:w-[425px] overflow-hidden xxl:max-h-[325px] xxl:w-[500px]"
        >
          <img
            :src="aboutUsImage"
            alt="about us image"
            class="rounded-[16px] sm:rounded-[20px]"
          />
        </div>
        <div
          class="w-[100%] flex flex-col gap-[1.25rem] sm:w-[500px] md:w-[325px] lg:w-[425px] xxl:gap-[2rem] xxl:w-[500px]"
        >
          <h2
            class="text-[1.75rem] font-[500] text-ltPrimary leading-tight lg:text-[2rem] xxl:text-[2.5rem]"
          >
            Our Story
          </h2>
          <div class="font-light text-TextNormal leading-snug">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua ut labore
            et dolore magna aliqua.<br /><br />
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua ut labore
            et dolore magna aliqua.
          </div>
        </div>
      </div>
    </section>
    <section
      class="w-[100%] py-[4rem] px-[1rem] flex flex-col items-center gap-[2rem] bg-BGDark lg:py-[5rem] lg:px-[2rem] xxl:gap-[3rem] xxl:py-[6rem]"
    >
      <h2
        class="text-[1.75rem] font-[500] text-TextLight leading-tight lg:text-[2rem] xxl:text-[3rem]"
      >
        Our People
      </h2>
      <div
        class="flex justify-center items-center gap-[3rem] flex-wrap xxl:gap-[4rem]"
      >
        <div class="flex flex-col items-center">
          <div
            class="h-[125px] w-[125px] flex justify-center items-center p-[3px] border-[2px] border-ltPrimary rounded-[41px] xxl:h-[150px] xxl:w-[150px] xxl:rounded-[49px]"
          >
            <img
              :src="aboutUsImage"
              alt="person image"
              class="h-[100%] object-cover rounded-[38px] xxl:rounded-[46px]"
            />
          </div>
          <div
            class="mt-[1rem] mb-[.25rem] text-[1.375rem] font-[500] text-TextLight leading-tight xxl:mt-[1.125rem] xxl:mb-[.375rem] xxl:text-[1.75rem]"
          >
            Ádám Lőrincz
          </div>
          <div
            class="font-light text-ltPrimary leading-tight xxl:text-[1.125rem]"
          >
            Co-founder
          </div>
        </div>
        <div class="flex flex-col items-center">
          <div
            class="h-[125px] w-[125px] flex justify-center items-center p-[3px] border-[2px] border-ltPrimary rounded-[41px] xxl:h-[150px] xxl:w-[150px] xxl:rounded-[49px]"
          >
            <img
              :src="aboutUsImage"
              alt="person image"
              class="h-[100%] object-cover rounded-[38px] xxl:rounded-[46px]"
            />
          </div>
          <div
            class="mt-[1rem] mb-[.25rem] text-[1.375rem] font-[500] text-TextLight leading-tight xxl:mt-[1.125rem] xxl:mb-[.375rem] xxl:text-[1.75rem]"
          >
            Norbert Tolnai
          </div>
          <div
            class="font-light text-ltPrimary leading-tight xxl:text-[1.125rem]"
          >
            Co-founder
          </div>
        </div>
      </div>
    </section>
    <section
      class="flex flex-col items-center gap-[2rem] my-[4rem] px-[1rem] lg:gap-[3rem] lg:my-[6rem] lg:px-[2rem] xxl:w-[1396px] xxl:my-[8rem] xxl:mx-auto xxl:px-0"
    >
      <h2
        class="text-[1.75rem] font-[500] text-ltPrimary leading-tight lg:text-[2rem] xxl:text-[3rem]"
      >
        Our Values
      </h2>
      <div
        class="flex justify-center items-center gap-[2rem] sm:gap-[3rem] xxl:gap-[4rem]"
      >
        <div class="w-[240px] flex flex-col">
          <div
            class="mt-[1rem] mb-[.5rem] text-[1.125rem] font-[500] leading-tight"
          >
            Trust
          </div>
          <div class="text-[.875rem] font-light leading-tight">
            Ambitious resellers who sell different types of products and seek
            for a system that helps grow their business.
          </div>
        </div>
      </div>
    </section>
    <CTA
      textFirstPart="Create Your Inventory with"
      textHighlighted="fatel3"
      textSecondPart="Today"
      class="w-[100%]"
    />
  </main>
</template>

<style scoped></style>
