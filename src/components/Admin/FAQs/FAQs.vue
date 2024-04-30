<script setup lang="ts">
// Prop handling
const { storeFAQs } = defineProps(["storeFAQs"]);
</script>

<template>
  <section
    class="w-[100%] flex justify-center gap-[1rem] flex-wrap xl:gap-[1.5rem]"
  >
    <div
      v-for="(faq, index) in storeFAQs.faqs"
      :key="index"
      class="w-[100%] flex flex-col gap-[.5rem] p-[.75rem] bg-BGLight border-[1px] border-ltPrimary rounded-[10px] xs:w-[325px] sm:w-[400px] xxl:w-[425px]"
    >
      <!-- Question -->
      <div class="flex items-center gap-[1rem] xs:gap-[1.5rem]">
        <div
          class="min-w-[70px] w-[70px] text-[13px] font-light text-TextNormal sm:min-w-[75px] sm:w-[75px] sm:text-[.875rem]"
        >
          Question
        </div>
        <div
          class="w-[100%] py-[.5rem] px-[.75rem] text-[13px] font-light border-[1px] border-ltBorder rounded-[7px] leading-tight sm:text-[.875rem]"
        >
          {{ faq.question }}
        </div>
      </div>
      <!-- Answer -->
      <div class="flex items-center gap-[1rem] mb-[.25rem] xs:gap-[1.5rem]">
        <div
          class="min-w-[70px] w-[70px] text-[13px] font-light text-TextNormal sm:min-w-[75px] sm:w-[75px] sm:text-[.875rem]"
        >
          Answer
        </div>
        <div
          class="w-[100%] py-[.5rem] px-[.75rem] text-[13px] font-light border-[1px] border-ltBorder rounded-[7px] leading-tight sm:text-[.875rem]"
        >
          {{ faq.answer }}
        </div>
      </div>

      <!-- BTNs -->
      <div
        class="flex justify-center items-center gap-[.75rem] flex-wrap mt-auto"
      >
        <button
          class="py-[.375rem] px-[.875rem] bg-BGLight text-[.875rem] border-[1px] border-ltBorderNormal rounded-[8px] leading-tight cursor-pointer duration-[.15s] ease-in-out"
        >
          Edit
        </button>
        <button
          class="py-[.375rem] px-[.875rem] bg-BGLight text-[.875rem] text-ltTextNegative border-[1px] border-ltTextNegative rounded-[8px] leading-tight cursor-pointer duration-[.15s] ease-in-out"
        >
          Delete
        </button>
      </div>
    </div>
  </section>
</template>

<style scoped></style>
