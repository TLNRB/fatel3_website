<script setup lang="ts">
import { ref } from "vue";
/*-- Import components --*/
import ButtonOutline from "@/components/Misc/ButtonOutline.vue";
/*-- Import assets --*/
import addIcon from "@/assets/icons/add-line.svg";

// FAQs
const faqs: any = [
  {
    question:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod?",
    answer:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    height: 115,
  },
  {
    question: "Lorem ipsum dolor sit amet, consectetur adipiscing elit?",
    answer:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. sed do eiusmod tempor incididunt ut labore et dolore magna aliqua",
    height: 135,
  },
  {
    question:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod, consectetur adipiscing elit, sed do eiusmod?",
    answer:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    height: 77,
  },
];

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
    class="pt-[5rem] pb-[4rem] px-[1rem] flex flex-col items-center gap-[1.5rem] lg:px-[2rem] xl:gap-[2rem] xl:pt-[8rem] xl:pb-[5rem] xxl:w-[1396px] xxl:mx-auto xxl:px-0"
  >
    <h2 class="text-center text-[2rem] font-[500] leading-tight">
      Frequently Asked Questions
    </h2>
    <div class="text-center text-TextNormal font-light leading-snug">
      Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
      tempor incididunt ut labore et dolore magna aliqua.
    </div>
    <div class="flex flex-col gap-[1.125rem] my-[1.5rem]">
      <div
        v-for="(faq, index) in faqs"
        :key="index"
        class="p-[1.25rem] border-[1px] border-ltPrimary rounded-[14px]"
      >
        <div class="flex items-center gap-[1.25rem]">
          <div class="leading-tight">
            {{ faq.question }}
          </div>
          <div
            class="btn min-w-[30px] min-h-[30px] w-[30px] h-[30px] p-[5px] bg-ltPrimary rounded-[10px] cursor-pointer translate-x-[1px]"
          >
            <img
              :src="addIcon"
              alt="icon"
              class="btn-icon"
              :class="activeFAQIndex === index ? 'btn-icon-active' : ''"
              @click="toggleActiveFAQ(index)"
            />
          </div>
        </div>
        <div
          class="text-[.875rem] font-light text-TextNormal leading-snug overflow-hidden duration-[.3s] ease-in-out"
          :class="
            activeFAQIndex === index
              ? 'mt-[1.25rem] visible opacity-[1]'
              : 'invisible opacity-0'
          "
          :style="{
            height: activeFAQIndex === index ? faq.height + 'px' : '0',
          }"
        >
          {{ faq.answer }}
        </div>
      </div>
    </div>
    <ButtonOutline text="Contact us" theme="light" route="/support" />
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
  .btn:hover .btn-icon {
    transform: rotate(45deg);
  }
}
</style>
