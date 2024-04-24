<script setup lang="ts">
/*-- Import Components --*/
import Hero from "@/components/HomePage/Hero.vue";
import UseCases from "@/components/UseCases/UseCases.vue";
import Showcase from "@/components/HomePage/Showcase/Showcase.vue";
import Reviews from "@/components/HomePage/Reviews/Reviews.vue";
import FAQ from "@/components/HomePage/FAQ/FAQ.vue";
import CTA from "@/components/CTA/CTA.vue";
</script>

<template>
  <main>
    <Hero />
    <UseCases />
    <Showcase />
    <Reviews />
    <FAQ />
    <CTA
      textFirstPart="Create Your Inventory with"
      textHighlighted="fatel3"
      textSecondPart="Today"
    />
  </main>
</template>

<style scoped></style>
