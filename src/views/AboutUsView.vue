<script setup lang="ts">
/*-- Import Components --*/
import CTA from "@/components/CTA/CTA.vue";
import SectionType from "@/components/Misc/SectionType.vue";
import ButtonFilled from "@/components/Misc/ButtonFilled.vue";
/*-- Import assets --*/
import arrowIcon from "@/assets/icons/arrow-right-up-line-primary.svg";
import aboutUsImage from "@/assets/images/temp-review.jpg";
import personOneImg from "@/assets/images/best2.jpg";
import personTwoImg from "@/assets/images/best.jpg";

// Values
const ourValues = [
  {
    icon: "ri-shield-check-line",
    title: "Trust",
    description:
      "We understand the importance of reliability and transparency in every interaction, that is why we guarantee you can always depend on us to support your business growth.",
  },
  {
    icon: "ri-heart-add-line",
    title: "Customer driven",
    description:
      "We prioritize your needs and feedback, aiming to deliver solutions that exceed your expectations and drive success for your business.",
  },
  {
    icon: "ri-speed-up-line",
    title: "Speed",
    description:
      "We recognize the value of efficiency and speed in today's fast-paced business environment, we aim to provide you with services that keep your operations run smoothly.",
  },
];

// People
const ourPeople = [
  {
    personName: "Ádám Lőrincz",
    personTitle: "Co-founder",
    personImg: personOneImg,
  },
  {
    personName: "Norbert Tolnai",
    personTitle: "Co-founder",
    personImg: personTwoImg,
  },
];
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
        Read about our story, the values we believe in and strive for, and the people behind the scenes.
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
            We started this journey with a vision to simplify inventory management for businesses of all sizes. Our goal is to provide a platform that is easy to use, reliable, and affordable.<br><br> We believe that every business deserves a chance to grow and succeed, and we are here to help you achieve that.
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
        <div
          v-for="(person, index) in ourPeople"
          :key="index"
          class="flex flex-col items-center"
        >
          <div
            class="h-[125px] w-[125px] flex justify-center items-center p-[3px] border-[2px] border-ltPrimary rounded-[41px] xxl:h-[150px] xxl:w-[150px] xxl:rounded-[49px]"
          >
            <img
              :src="person.personImg"
              alt="person image"
              class="w-[100%] h-[100%] object-cover  rounded-[38px] xxl:rounded-[46px]"
            />
          </div>
          <div
            class="mt-[1rem] mb-[.25rem] text-[1.375rem] font-[500] text-TextLight leading-tight xxl:mt-[1.125rem] xxl:mb-[.375rem] xxl:text-[1.75rem]"
          >
            {{ person.personName }}
          </div>
          <div
            class="font-light text-ltPrimary leading-tight xxl:text-[1.125rem]"
          >
            {{ person.personTitle }}
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
        class="flex flex-col justify-center items-start gap-[2rem] lg:flex-row xxl:gap-[4rem]"
      >
        <div
          v-for="(value, index) in ourValues"
          :key="index"
          class="w-[240px] flex flex-col xs:w-[275px]"
        >
          <div
            class="min-w-[50px] min-h-[50px] w-[50px] h-[50px] flex justify-center items-center border-[1px] border-ltBorderNormal rounded-[16px] xxl:min-w-[56px] xxl:min-h-[56px] xxl:w-[56px] xxl:h-[56px] xxl:rounded-[18px]"
          >
            <i
              class="text-[1.75rem] h-[28px] flex justify-center items-center text-ltPrimary xxl:text-[2rem] xxl:h-[32px]"
              :class="value.icon"
            ></i>
          </div>
          <div
            class="mt-[1rem] mb-[.5rem] pl-[.125rem] text-[1.125rem] font-[500] leading-tight xxl:pl-[3px]"
          >
            {{ value.title }}
          </div>
          <div
            class="pl-[.125rem] text-[.875rem] font-light leading-tight xxl:pl-[3px]"
          >
            {{ value.description }}
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
