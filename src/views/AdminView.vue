<script setup lang="ts">
import { ref } from "vue";
/*-- Import Components --*/
import SectionType from "@/components/Misc/SectionType.vue";
import Bookings from "@/components/Admin/Bookings/Bookings.vue";

// Sections
const sections = [
  {
    title: "Bookings",
  },
  {
    title: "FAQ Home",
  },
  {
    title: "FAQ Pricing",
  },
  {
    title: "Features",
  },
  {
    title: "Use cases",
  },
];

// Active Section
const activeSection = ref<string>("Bookings");

const setActiveSection = (section: string) => {
  activeSection.value = section;
};

// Bookings
const bookings = [
  {
    day: 10,
    month: 5,
    year: 2024,
    startTime: "14:00",
    endTime: "15:00",
    firstName: "John",
    lastName: "Doe",
    email: "example@email.com",
    topic: "Get Started",
    message:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
  },
  {
    day: 10,
    month: 5,
    year: 2024,
    startTime: "14:00",
    endTime: "15:00",
    firstName: "John",
    lastName: "Doe",
    email: "example@email.com",
    topic: "Get Started",
    message: "",
  },
];
</script>

<template>
  <main
    class="pt-[3rem] pb-[4rem] px-[1rem] flex flex-col items-center lg:pt-[4rem] lg:pb-[5rem] lg:px-[2rem] xl:pb-[6rem] xxl:w-[1396px] xxl:mx-auto xxl:px-0"
  >
    <SectionType
      text="admin"
      bgColor="bg-ltPrimary"
      textColor="text-TextLight"
    />
    <!-- Section BTNs -->
    <div
      class="flex justify-center items-center gap-[.75rem] flex-wrap mt-[3rem] mb-[2rem] bg-BGLight"
    >
      <div
        v-for="(section, index) in sections"
        :key="index"
        @click="setActiveSection(section.title)"
        class="py-[.375rem] px-[.875rem] bg-BGLight text-[.875rem] border-[1px] rounded-[8px] leading-tight cursor-pointer duration-[.15s] ease-in-out"
        :class="
          activeSection === section.title
            ? 'text-ltPrimary border-ltPrimary'
            : 'text-TextSemiDark border-ltBorderNormal'
        "
      >
        {{ section.title }}
      </div>
    </div>
    <!-- Section Content -->
    <Bookings v-if="activeSection === 'Bookings'" :bookings="bookings" />
  </main>
</template>

<style scoped></style>
