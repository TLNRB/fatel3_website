<script setup lang="ts">
import { ref } from "vue";
/*-- Import Components --*/
import SectionType from "@/components/Misc/SectionType.vue";
import Bookings from "@/components/Admin/Bookings/Bookings.vue";
import FAQs from "@/components/Admin/FAQs/FAQs.vue";
import Reviews from "@/components/Admin/Reviews/Reviews.vue";
/*-- Import Store --*/
import { useStoreFAQs } from "@/stores/storeFAQs";
import { useStoreReviews } from "@/stores/storeReviews";

// Store handling
const storeFAQs = useStoreFAQs();
const storeReviews = useStoreReviews();

// Sections
const sections: any = [
  {
    id: "bookings",
    title: "Bookings",
  },
  {
    id: "reviews",
    title: "Reviews",
  },
  {
    id: "faqHome",
    title: "FAQ Home",
  },
  {
    id: "faqPricing",
    title: "FAQ Pricing",
  },
];

// Set id of active edit for reviews
let editReviewID: string = "";
const setEditReviewID = (id: string) => {
  editReviewID = id;
};

// Active Section
const activeSection = ref<string>("Bookings");

const setActiveSection = (section: string) => {
  activeSection.value = section;
  // Close editing review if active section is not reviews (its becasue of the image upload)
  if (editReviewID) {
    storeReviews.closeEditing(editReviewID);
    editReviewID = "";
  }
};

// Bookings
const bookings: any = [
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
        @click="setActiveSection(section.id)"
        class="py-[.375rem] px-[.875rem] bg-BGLight text-[.875rem] border-[1px] rounded-[8px] leading-tight cursor-pointer duration-[.15s] ease-in-out"
        :class="
          activeSection === section.id
            ? 'text-ltPrimary border-ltPrimary'
            : 'text-TextSemiDark border-ltBorderNormal'
        "
      >
        {{ section.title }}
      </div>
    </div>
    <!-- Section Content -->
    <Bookings v-if="activeSection === 'bookings'" :bookings="bookings" />
    <Reviews
      v-else-if="activeSection === 'reviews'"
      :storeReviews="storeReviews"
      @activeEditReviewID="setEditReviewID"
    />
    <FAQs
      v-else-if="activeSection === 'faqHome'"
      :storeFAQs="storeFAQs"
      collectionID="home"
    />
    <FAQs
      v-else-if="activeSection === 'faqPricing'"
      :storeFAQs="storeFAQs"
      collectionIndex="pricing"
    />
  </main>
</template>

<style scoped></style>
@/stores/storeFAQs
