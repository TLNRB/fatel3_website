<script setup lang="ts">
import { ref, reactive } from "vue";
/*-- Import Components --*/
/* import AddFAQ from "@/components/Admin/FAQs/AddFAQ.vue";
import EditFAQ from "@/components/Admin/FAQs/EditFAQ.vue";
import DeleteFAQ from "@/components/Admin/FAQs/DeleteFAQ.vue"; */

// Prop handling
const { storeReviews } = defineProps(["storeReviews"]);

//-- Review handling
// V-model for review inputs
const newReview: any = reactive({
  name: "",
  businessPosition: "",
  review: "",
  imgName: "",
  img: "",
});

const image = ref<any>(null);

// Clear values
const valueClear = () => {
  (newReview.name = ""),
    (newReview.businessPosition = ""),
    (newReview.review = ""),
    (newReview.imgName = ""),
    (newReview.img = ""),
    (image.value = null);
};

// Image upload class
const handleImageUpload = (file: any) => {
  image.value = file;
  storeReviews.getImageUrl(file.value.name, file.value);
};

// Add Review section
const addModal = ref<boolean>(false);

const toggleAdd = () => {
  if (editReviewid.value) {
    closeEditReview();
  }
  addModal.value = !addModal.value;
};

const addReview = () => {
  storeReviews.addReview(newReview);
  toggleAdd();
  valueClear();
};

const closeAddReview = () => {
  storeReviews.closeAddReview();
  toggleAdd();
  valueClear();
};

// Edit Review section
const editReviewid = ref<string>("");

const editReview = (index: string) => {
  editReviewid.value = index;
  for (let i = 0; i < storeReviews.reviews.length; i++) {
    // Getting the input values by id
    if (storeReviews.reviews[i].id === index) {
      newReview.name = storeReviews.reviews[i].name;
      newReview.businessPosition = storeReviews.reviews[i].businessPosition;
      newReview.review = storeReviews.reviews[i].review;
      newReview.imgName = storeReviews.reviews[i].imgName;
      newReview.img = storeReviews.reviews[i].img;
    }
  }
};

const saveEditReview = async () => {
  // Checking if the image changed
  storeReviews.updateImage(editReviewid.value);
  storeReviews.updateReview(newReview, editReviewid.value);
  valueClear();
  editReviewid.value = "";
};

const closeEditReview = () => {
  storeReviews.closeEditing(editReviewid.value);
  valueClear();
  editReviewid.value = "";
};

// Delete Review section
const deleteReviewid = ref<string>("");

const openDeleteModal = (index: string) => {
  if (editReviewid.value) {
    closeEditReview();
  }
  deleteReviewid.value = index;
};

const closeDeleteModal = () => {
  deleteReviewid.value = "";
};

const confirmDelete = () => {
  storeReviews.deleteReview(deleteReviewid.value);
  closeDeleteModal();
};
</script>

<template>
  <section class="w-[100%] flex flex-col gap-[3rem]">
    <!-- FAQs -->
    <div class="flex justify-center gap-[1rem] flex-wrap xl:gap-[1.5rem]">
      <div
        v-for="faq in collectionID === 'home'
          ? storeFAQs.faqsHome
          : storeFAQs.faqsPricing"
        :key="faq.id"
      >
        <!-- Display FAQ -->
        <div
          v-if="editFAQid !== faq.id"
          class="h-[100%] w-[100%] flex flex-col gap-[.5rem] p-[.75rem] bg-BGLight border-[1px] border-ltBorderNormal rounded-[10px] xs:w-[325px] sm:w-[400px] xxl:w-[425px]"
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
          <div class="flex items-center gap-[1rem] mb-[.5rem] xs:gap-[1.5rem]">
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
              @click="editSingleFAQ(faq.id)"
              class="py-[.375rem] px-[.875rem] bg-BGLight text-[.875rem] border-[1px] border-ltBorderNormal rounded-[8px] leading-tight cursor-pointer duration-[.15s] ease-in-out"
            >
              Edit
            </button>
            <button
              @click="openDeleteModal(faq.id)"
              class="py-[.375rem] px-[.875rem] bg-BGLight text-[.875rem] text-ltTextNegative border-[1px] border-ltTextNegative rounded-[8px] leading-tight cursor-pointer duration-[.15s] ease-in-out"
            >
              Delete
            </button>
          </div>
        </div>
        <!-- Edit FAQ -->
        <EditFAQ
          v-else-if="editFAQid === faq.id"
          :newFAQ="newFAQ"
          @savedChanges="saveEditFAQ"
          @canceledChanges="closeEditFAQ"
        />
        <!-- Delete FAQ -->
        <div
          v-if="deleteFAQid === faq.id"
          class="h-[100%] w-[100%] z-[9] fixed top-0 left-0 right-0 overflow-auto bg-BGLight"
        >
          <DeleteFAQ
            @savedChanges="confirmDelete"
            @canceledChanges="closeDeleteModal"
          />
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
