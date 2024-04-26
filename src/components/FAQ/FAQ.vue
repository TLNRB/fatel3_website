<script setup lang="ts">
import { ref } from "vue";
/*-- Import components --*/
import ButtonOutline from "@/components/Misc/ButtonOutline.vue";
/*-- Import assets --*/
import addIcon from "@/assets/icons/add-line.svg";

// Prop handling
const { faqs, descriptionCondition, buttonCondition } = defineProps([
  "faqs",
  "descriptionCondition",
  "buttonCondition",
]);

// Toggle FAQ answer
const activeFAQIndex = ref<number>(-1);
const toggleActiveFAQ = (index: number) => {
  if (activeFAQIndex.value === index) {
    activeFAQIndex.value = -1;
  } else {
    activeFAQIndex.value = index;
  }
};
</script>

<template>
  <section
    class="pt-[5rem] pb-[4rem] px-[1rem] flex flex-col items-center gap-[1.5rem] lg:px-[2rem] xl:gap-[2rem] xl:py-[6rem] xxl:w-[1396px] xxl:mx-auto xxl:py-[7rem] xxl:px-0"
  >
    <h2
      class="w-[100%] text-center text-[2rem] font-[500] leading-[1.15] xs:w-[300px] lg:w-[550px] lg:text-[3rem] xxl:text-[4rem]"
    >
      Frequently Asked Questions
    </h2>
    <div
      v-if="descriptionCondition"
      class="w-[100%] text-center text-TextNormal font-light leading-snug xs:w-[325px] sm:w-[400px] lg:w-[500px] lg:text-[1.125rem] xxl:w-[550px] xxl:text-[1.25rem]"
    >
      Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
      tempor incididunt ut labore et dolore magna aliqua.
    </div>
    <div
      class="flex flex-col gap-[1rem] my-[1.5rem] xl:gap-[1.125rem] xl:my-[2rem]"
    >
      <div
        v-for="(faq, index) in faqs"
        :key="index"
        class="w-[100%] p-[1.25rem] border-[1px] border-ltPrimary rounded-[14px] md:w-[725px] lg:w-[775px] lg:p-[1.5rem] xxl:w-[825px] xxl:px-[1.75rem]"
      >
        <div
          class="flex justify-between items-center gap-[1.25rem] lg:gap-[1.5rem] xxl:gap-[1.75rem]"
        >
          <div class="leading-tight lg:text-[1.125rem] xxl:text-[1.25rem]">
            {{ faq.question }}
          </div>
          <div
            @click="toggleActiveFAQ(index)"
            class="btn min-w-[30px] min-h-[30px] w-[30px] h-[30px] p-[5px] bg-ltPrimary rounded-[10px] cursor-pointer duration-[.15s] ease-in-out translate-x-[1px] xxl:min-w-[34px] xxl:min-h-[34px] xxl:w-[34px] xxl:h-[34px] xxl:p-[6px] xxl:rounded-[11px]"
          >
            <img
              :src="addIcon"
              alt="icon"
              class="btn-icon"
              :class="activeFAQIndex === index ? 'btn-icon-active' : ''"
            />
          </div>
        </div>
        <div
          class="text-[.875rem] font-light text-TextNormal leading-snug overflow-hidden lg:text-[15px] xxl:text-[1rem]"
          :class="
            activeFAQIndex === index
              ? 'h-auto mt-[1.25rem] visible opacity-[1]'
              : 'h-0 invisible opacity-0'
          "
        >
          {{ faq.answer }}
        </div>
      </div>
    </div>
    <ButtonOutline
      v-if="buttonCondition"
      text="Contact us"
      theme="light"
      route="/support"
    />
  </section>
</template>

<style scoped>
.btn-icon {
  transform: rotate(0);
  transition: all 0.3s ease-in-out;
}

.btn-icon-active {
  transform: rotate(45deg);
}

/*-- Hover isn't visible on touchscreen devices --*/
@media (hover: hover) {
  .btn:hover {
    background-color: var(--ltPrimaryDark);
  }
}
</style>
