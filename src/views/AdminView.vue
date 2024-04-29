<script setup lang="ts">
import { ref } from "vue";
/*-- Import Components --*/
import SectionType from "@/components/Misc/SectionType.vue";

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
    <div
      class="w-[100%] flex justify-center gap-[1rem] flex-wrap xl:gap-[1.5rem]"
    >
      <div
        v-for="(booking, index) in bookings"
        :key="index"
        class="w-[100%] flex flex-col gap-[.5rem] p-[.75rem] bg-BGLight border-[1px] border-ltPrimary rounded-[10px] xs:w-[325px] sm:w-[400px] xxl:w-[425px]"
      >
        <!-- Date&Tim -->
        <div class="flex items-center gap-[1.5rem]">
          <div
            class="min-w-[70px] w-[70px] text-[13px] font-light text-TextNormal sm:min-w-[75px] sm:w-[75px] sm:text-[.875rem]"
          >
            Date&Time
          </div>
          <div
            class="w-[100%] py-[.5rem] px-[.75rem] text-[13px] font-light border-[1px] border-ltBorder rounded-[7px] leading-tight sm:px-[.875rem] sm:text-[.875rem]"
          >
            {{ booking.day }}/{{ booking.month }}/{{ booking.year }}
            {{ booking.startTime }}-{{ booking.endTime }}
          </div>
        </div>
        <!-- Name -->
        <div class="flex items-center gap-[1.5rem]">
          <div
            class="min-w-[70px] w-[70px] text-[13px] font-light text-TextNormal sm:min-w-[75px] sm:w-[75px] sm:text-[.875rem]"
          >
            Name
          </div>
          <div
            class="w-[100%] py-[.5rem] px-[.75rem] text-[13px] font-light border-[1px] border-ltBorder rounded-[7px] leading-tight sm:text-[.875rem]"
          >
            {{ booking.firstName }} {{ booking.lastName }}
          </div>
        </div>
        <!-- Name -->
        <div class="flex items-center gap-[1.5rem]">
          <div
            class="min-w-[70px] w-[70px] text-[13px] font-light text-TextNormal sm:min-w-[75px] sm:w-[75px] sm:text-[.875rem]"
          >
            Email
          </div>
          <div
            class="w-[100%] py-[.5rem] px-[.75rem] text-[13px] font-light border-[1px] border-ltBorder rounded-[7px] leading-tight sm:text-[.875rem]"
          >
            {{ booking.email }}
          </div>
        </div>
        <!-- Message -->
        <div v-if="booking.message" class="flex items-center gap-[1.5rem]">
          <div
            class="min-w-[70px] w-[70px] text-[13px] font-light text-TextNormal sm:min-w-[75px] sm:w-[75px] sm:text-[.875rem]"
          >
            Message
          </div>
          <div
            class="w-[100%] py-[.5rem] px-[.75rem] text-[13px] font-light border-[1px] border-ltBorder rounded-[7px] leading-tight sm:text-[.875rem]"
          >
            {{ booking.message }}
          </div>
        </div>
        <!-- BTNs -->
        <div
          class="flex justify-center items-center gap-[.75rem] flex-wrap"
          :class="booking.message ? 'mt-[.25rem]' : 'mt-auto'"
        >
          <button
            class="py-[.375rem] px-[.875rem] bg-ltBGNegative text-[.875rem] text-ltTextNegative border-[1px] border-ltTextNegative rounded-[8px] leading-tight cursor-pointer duration-[.15s] ease-in-out"
          >
            Delete
          </button>
        </div>
      </div>
    </div>
  </main>
</template>

<style scoped></style>
