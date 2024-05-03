<script setup lang="ts">
import { ref } from "vue";

// Prop handling
const { newReview, storeReviews } = defineProps(["newReview", "storeReviews"]);

// Emit handling
const emit = defineEmits(["savedChanges", "canceledChanges", "imageSelected"]);

const error = ref<string>("");
const image = ref<any>("");

// Handle image selection
const handleChange = (e: any) => {
  const file = e.target.files[0];
  image.value = file;
  emit("imageSelected", image);
};

// Handle form submission
const saveChanges = () => {
  if (
    !newReview.name ||
    !newReview.businessPosition ||
    !newReview.review ||
    !storeReviews.imgName ||
    !storeReviews.img
  ) {
    error.value = "Fill in every information or wait for image upload (5s)";
  } else {
    emit("savedChanges");
    error.value = "";
    image.value = "";
  }
};

// Handle form cancelation
const cancelChanges = () => {
  if (
    (!storeReviews.imgName && !storeReviews.img) ||
    (storeReviews.imgName && storeReviews.img)
  ) {
    emit("canceledChanges");
    error.value = "";
    image.value = "";
  } else {
    error.value = "Wait for image upload";
  }
};
</script>

<template>
  <form
    @submit.prevent="saveChanges"
    class="w-[245px] absolute top-[50%] left-[50%] translate-y-[-50%] translate-x-[-50%] flex flex-col gap-[.5rem] p-[.75rem] bg-BGLight border-[1px] border-ltPrimary rounded-[10px] xs:w-[325px] sm:w-[400px] xxl:w-[425px]"
  >
    <!-- Name -->
    <div class="flex items-start gap-[1rem] xs:gap-[1.5rem]">
      <div
        class="min-w-[70px] w-[70px] mt-[.5rem] text-[13px] font-light text-TextNormal sm:min-w-[75px] sm:w-[75px] sm:text-[.875rem]"
      >
        Name
      </div>
      <input
        type="text"
        placeholder="Name"
        v-model="newReview.name"
        class="w-[100%] py-[.5rem] px-[.75rem] text-[13px] font-light border-[1px] border-ltBorder rounded-[7px] leading-tight sm:text-[.875rem]"
        :class="error && !newReview.name ? ' border-ltTextNegative' : ''"
      />
    </div>
    <!-- Business Position -->
    <div class="flex items-start gap-[1rem] xs:gap-[1.5rem]">
      <div
        class="min-w-[70px] w-[70px] mt-[.5rem] text-[13px] font-light text-TextNormal sm:min-w-[75px] sm:w-[75px] sm:text-[.875rem]"
      >
        Business
      </div>
      <input
        type="text"
        placeholder="Business Position"
        v-model="newReview.businessPosition"
        class="w-[100%] py-[.5rem] px-[.75rem] text-[13px] font-light border-[1px] border-ltBorder rounded-[7px] leading-tight sm:text-[.875rem]"
        :class="
          error && !newReview.businessPosition ? ' border-ltTextNegative' : ''
        "
      />
    </div>
    <!-- Image -->
    <div class="flex items-start gap-[1rem] xs:gap-[1.5rem]">
      <div
        class="min-w-[70px] w-[70px] mt-[.5rem] text-[13px] font-light text-TextNormal sm:min-w-[75px] sm:w-[75px] sm:text-[.875rem]"
      >
        Image
      </div>
      <div
        class="w-[100%] flex flex-col items-start sm:flex-row sm:items-center sm:gap-[1rem]"
      >
        <img
          v-if="image"
          :src="image ? storeReviews.img : newReview.img"
          alt="Image of the reviewer or the business"
          class="h-[50px] text-[12px] font-light text-TextNormal sm:text-[13px]"
        />
        <label
          class="h-[34px] w-[100%] overflow-hidden flex flex-col justify-center cursor-pointer sm:h-[35px]"
          :class="error && !newReview.imgName ? ' border-ltTextNegative' : ''"
        >
          <span
            class="font-light leading-tight"
            :class="
              image || newReview.imgName
                ? 'text-TextSemiDark text-[12px] sm:text-[13px]'
                : 'text-ltBorderNormal pl-[.75rem] text-[13px] sm:text-[14px]'
            "
            >{{
              image
                ? image.name
                : newReview.imgName
                ? newReview.imgName
                : "Choose file"
            }}</span
          >
          <input type="file" @change="handleChange" />
        </label>
      </div>
    </div>
    <!-- Review -->
    <div class="flex items-start gap-[1rem] mb-[.25rem] xs:gap-[1.5rem]">
      <div
        class="min-w-[70px] w-[70px] mt-[.5rem] text-[13px] font-light text-TextNormal sm:min-w-[75px] sm:w-[75px] sm:text-[.875rem]"
      >
        Review
      </div>
      <textarea
        placeholder="Review"
        v-model="newReview.review"
        class="h-[90px] w-[100%] py-[.5rem] px-[.75rem] text-[13px] font-light border-[1px] border-ltBorder rounded-[7px] leading-tight sm:text-[.875rem]"
        :class="error && !newReview.review ? ' border-ltTextNegative' : ''"
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
        Add
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

input[type="file"] {
  display: none;
}

textarea {
  resize: none;
}

::placeholder {
  color: var(--ltBorderNormal);
}
</style>
