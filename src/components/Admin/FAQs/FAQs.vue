<script setup lang="ts">
import { ref, reactive } from "vue";
/*-- Import Components --*/
import AddFAQ from "@/components/Admin/FAQs/AddFAQ.vue";
// Prop handling
const { storeFAQs } = defineProps(["storeFAQs"]);

//-- FAQ handling
// V-model for faq inputs
const newFAQ = reactive({
  question: "",
  answer: "",
});

// Clear values
const valueClear = () => {
  newFAQ.question = "";
  newFAQ.answer = "";
};

// Add FAQ section
const addModal = ref<boolean>(false);

const toggleAdd = () => {
  addModal.value = !addModal.value;
};

const addFAQ = () => {
  storeFAQs.addFAQ(newFAQ);
  toggleAdd();
  valueClear();
};

const closeAddFAQ = () => {
  toggleAdd();
  valueClear();
};
</script>

<template>
  <section class="w-[100%] flex flex-col gap-[3rem]">
    <!-- FAQs -->
    <div class="flex justify-center gap-[1rem] flex-wrap xl:gap-[1.5rem]">
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
    </div>
    <!--  Add FAQ -->
    <button
      class="btn w-fit flex justify-center items-center gap-[.25rem] mx-auto py-[.5rem] pl-[.875rem] pr-[.5rem] bg-ltPrimary text-[.875rem] text-TextLight rounded-[9px] leading-tight cursor-pointer duration-[.15s] ease-in-out"
      @click="toggleAdd"
    >
      <div>Add</div>
      <i
        class="ri-add-line text-[1.125rem] h-[18px] flex justify-center items-center"
      ></i>
    </button>
    <div
      v-if="addModal"
      class="h-[100%] w-[100%] z-[9] fixed top-0 left-0 right-0 overflow-auto bg-BGLight"
    >
      <AddFAQ
        :newFAQ="newFAQ"
        @savedChanges="addFAQ"
        @canceledChanges="closeAddFAQ"
      />
    </div>
  </section>
</template>

<style scoped>
.modal {
  background-color: var(--BGLight);
}

.btn {
  background-color: var(--ltPrimary);
}

@media (hover: hover) {
  .btn:hover {
    background-color: var(--ltPrimaryDark);
  }
}
</style>
