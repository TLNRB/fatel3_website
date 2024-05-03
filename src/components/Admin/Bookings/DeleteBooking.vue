<script setup lang="ts">
// Emit handling
const emit = defineEmits(["savedChanges", "canceledChanges"]);

const saveChanges = () => {
  emit("savedChanges");
};

const cancelChanges = () => {
  emit("canceledChanges");
};
</script>

<template>
  <div
    class="w-[245px] absolute top-[50%] left-[50%] translate-y-[-50%] translate-x-[-50%] flex flex-col gap-[.5rem] py-[1.5rem] px-[.75rem] bg-BGLight border-[1px] border-ltPrimary rounded-[10px] xs:w-[325px] sm:w-[400px] xxl:w-[425px]"
  >
    <h2 class="text-center text-[1rem] font-[500]">
      Are you sure you want to delete?
    </h2>
    <!-- BTNs -->
    <div
      class="flex justify-center items-center gap-[.75rem] flex-wrap mt-[1rem]"
    >
      <button
        type="button"
        @click="saveChanges"
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
  </div>
</template>

<style scoped></style>
