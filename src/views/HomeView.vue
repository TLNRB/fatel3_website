<script setup lang="ts">
/*-- Import Components --*/
import Hero from "@/components/HomePage/Hero.vue";
import Features from "@/components/Features/Features.vue";
import UseCases from "@/components/UseCases/UseCases.vue";
import Showcase from "@/components/HomePage/Showcase/Showcase.vue";
import Reviews from "@/components/HomePage/Reviews/Reviews.vue";
import FAQ from "@/components/FAQ/FAQ.vue";
import CTA from "@/components/CTA/CTA.vue";

// FAQs
const faqs: any = [
  {
    question:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod?",
    answer:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
  },
  {
    question: "Lorem ipsum dolor sit amet, consectetur adipiscing elit?",
    answer:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. sed do eiusmod tempor incididunt ut labore et dolore magna aliqua",
  },
  {
    question:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod, consectetur adipiscing elit, sed do eiusmod?",
    answer:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
  },
];
</script>

<template>
  <main>
    <Hero />
    <Features />
    <UseCases />
    <Showcase />
    <Reviews />
    <FAQ :faqs="faqs" :descriptionCondition="true" :buttonCondition="true" />
    <CTA
      textFirstPart="Create Your Inventory with"
      textHighlighted="fatel3"
      textSecondPart="Today"
    />
  </main>
</template>

<style scoped></style>
