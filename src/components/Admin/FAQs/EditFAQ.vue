<script setup>
import { ref } from "vue";

// Prop handling
const { newFAQ } = defineProps(["newFAQ"]);

// Emit handling
const emit = defineEmits(["savedChanges", "canceledChanges"]);

// Temporary data
const error = ref("");

// Handle form submission
const saveChanges = () => {
  if (!newFAQ.question || !newFAQ.answer) {
    error.value = "Fill in every information";
  } else {
    emit("savedChanges");
    error.value = "";
  }
};

// Handle form cancelation
const cancelChanges = () => {
  emit("canceledChanges");
  error.value = "";
};
</script>

<template>
  <form
    @submit.prevent="saveChanges"
    class="w-[100%] flex flex-col gap-[.5rem] p-[.75rem] bg-BGLight border-[1px] border-ltPrimary rounded-[10px] xs:w-[325px] sm:w-[400px] xxl:w-[425px]"
  >
    <!-- Question -->
    <div class="flex items-start gap-[1rem] xs:gap-[1.5rem]">
      <div
        class="min-w-[70px] w-[70px] mt-[.5rem] text-[13px] font-light text-TextNormal sm:min-w-[75px] sm:w-[75px] sm:text-[.875rem]"
      >
        Question
      </div>
      <textarea
        placeholder="Question"
        v-model="newFAQ.question"
        class="h-[90px] w-[100%] py-[.5rem] px-[.75rem] text-[13px] font-light border-[1px] border-ltBorder rounded-[7px] leading-tight sm:text-[.875rem]"
        :class="error && !newFAQ.question ? ' border-ltTextNegative' : ''"
      ></textarea>
    </div>
    <!-- Answer -->
    <div class="flex items-start gap-[1rem] mb-[.25rem] xs:gap-[1.5rem]">
      <div
        class="min-w-[70px] w-[70px] mt-[.5rem] text-[13px] font-light text-TextNormal sm:min-w-[75px] sm:w-[75px] sm:text-[.875rem]"
      >
        Answer
      </div>
      <textarea
        placeholder="Answer"
        v-model="newFAQ.answer"
        class="h-[90px] w-[100%] py-[.5rem] px-[.75rem] text-[13px] font-light border-[1px] border-ltBorder rounded-[7px] leading-tight sm:text-[.875rem]"
        :class="error && !newFAQ.answer ? ' border-ltTextNegative' : ''"
      ></textarea>
    </div>
    <div
      v-if="error"
      class="text-center text-[.875rem] font-light text-ltTextNegative"
    >
      {{ error }}
    </div>
    <!-- BTNs -->
    <div
      class="flex justify-center items-center gap-[.75rem] flex-wrap mt-[.5rem]"
    >
      <button
        type="submit"
        class="py-[.375rem] px-[.875rem] bg-BGLight text-[.875rem] border-[1px] border-ltBorderNormal rounded-[8px] leading-tight cursor-pointer duration-[.15s] ease-in-out"
      >
        Confirm
      </button>
      <button
        type="button"
        @click="cancelChanges"
        class="py-[.375rem] px-[.875rem] bg-BGLight text-[.875rem] text-ltTextNegative border-[1px] border-ltTextNegative rounded-[8px] leading-tight cursor-pointer duration-[.15s] ease-in-out"
      >
        Cancel
      </button>
    </div>
  </form>
</template>

<style scoped>
input[type="text"],
textarea {
  outline: none;
}

textarea {
  resize: none;
}

::placeholder {
  color: var(--ltBorderNormal);
}
</style>
