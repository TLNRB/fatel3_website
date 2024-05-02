<script setup lang="ts">
/*-- Import Components --*/
import Hero from "@/components/HomePage/Hero.vue";
import Features from "@/components/Features/Features.vue";
import UseCases from "@/components/UseCases/UseCases.vue";
import Showcase from "@/components/HomePage/Showcase/Showcase.vue";
import Reviews from "@/components/HomePage/Reviews/Reviews.vue";
import FAQ from "@/components/FAQ/FAQ.vue";
import CTA from "@/components/CTA/CTA.vue";
/*-- Import Store --*/
import { useStoreFAQs } from "@/stores/storeFAQs";

// Store handling
const storeFAQs = useStoreFAQs();
</script>

<template>
  <main>
    <Hero />
    <Features />
    <UseCases />
    <Showcase />
    <Reviews />
    <FAQ
      :faqs="storeFAQs"
      collectionID="home"
      :descriptionCondition="true"
      :buttonCondition="true"
    />
    <CTA
      textFirstPart="Create Your Inventory with"
      textHighlighted="fatel3"
      textSecondPart="Today"
    />
  </main>
</template>

<style scoped></style>
