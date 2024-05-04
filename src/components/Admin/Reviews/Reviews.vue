<script setup lang="ts">
import { ref, reactive } from "vue";
/*-- Import Components --*/
import AddReview from "@/components/Admin/Reviews/AddReview.vue";
import EditReview from "@/components/Admin/Reviews/EditReview.vue";
import DeleteReview from "@/components/Admin/Reviews/DeleteReview.vue";

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
// Emit the edit review id to parent for closing the edit modal properly and delete the unused image from storage in case of section change
const emit = defineEmits(["activeEditReviewID"]);

const editedReviewID = (reviewID: string) => {
  emit("activeEditReviewID", reviewID);
};

const editReviewid = ref<string>("");

const editReview = (index: string) => {
  editReviewid.value = index;
  editedReviewID(index);
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
    <!-- Reviews -->
    <div class="flex justify-center gap-[1rem] flex-wrap xl:gap-[1.5rem]">
      <div
        v-if="storeReviews.reviews.length > 0"
        v-for="review in storeReviews.reviews"
        :key="review.id"
      >
        <!-- Display Review -->
        <div
          v-if="editReviewid !== review.id"
          class="h-[100%] w-[100%] flex flex-col gap-[.5rem] p-[.75rem] bg-BGLight border-[1px] border-ltBorderNormal rounded-[10px] overflow-hidden xs:w-[325px] sm:w-[400px] xxl:w-[425px]"
        >
          <!-- Name -->
          <div class="flex items-center gap-[1rem] xs:gap-[1.5rem]">
            <div
              class="min-w-[70px] w-[70px] text-[13px] font-light text-TextNormal sm:min-w-[75px] sm:w-[75px] sm:text-[.875rem]"
            >
              Name
            </div>
            <div
              class="w-[100%] py-[.5rem] px-[.75rem] text-[13px] font-light border-[1px] border-ltBorder rounded-[7px] leading-tight sm:text-[.875rem]"
            >
              {{ review.name }}
            </div>
          </div>
          <!-- Business Position -->
          <div class="flex items-center gap-[1rem] xs:gap-[1.5rem]">
            <div
              class="min-w-[70px] w-[70px] text-[13px] font-light text-TextNormal sm:min-w-[75px] sm:w-[75px] sm:text-[.875rem]"
            >
              Business
            </div>
            <div
              class="w-[100%] py-[.5rem] px-[.75rem] text-[13px] font-light border-[1px] border-ltBorder rounded-[7px] leading-tight sm:text-[.875rem]"
            >
              {{ review.businessPosition }}
            </div>
          </div>
          <!-- Image -->
          <div class="flex items-center gap-[1rem] xs:gap-[1.5rem]">
            <div
              class="min-w-[70px] w-[70px] text-[13px] font-light text-TextNormal sm:min-w-[75px] sm:w-[75px] sm:text-[.875rem]"
            >
              Image
            </div>
            <div
              class="w-[100%] py-[.5rem] px-[.75rem] text-[13px] font-light border-[1px] border-ltBorder rounded-[7px] leading-tight sm:text-[.875rem]"
            >
              {{ review.imgName }}
            </div>
          </div>
          <!-- Review -->
          <div class="flex items-center gap-[1rem] mb-[.5rem] xs:gap-[1.5rem]">
            <div
              class="min-w-[70px] w-[70px] text-[13px] font-light text-TextNormal sm:min-w-[75px] sm:w-[75px] sm:text-[.875rem]"
            >
              Review
            </div>
            <div
              class="w-[100%] py-[.5rem] px-[.75rem] text-[13px] font-light border-[1px] border-ltBorder rounded-[7px] leading-tight sm:text-[.875rem]"
            >
              {{ review.review }}
            </div>
          </div>
          <!-- BTNs -->
          <div
            class="flex justify-center items-center gap-[.75rem] flex-wrap mt-auto"
          >
            <button
              @click="editReview(review.id)"
              class="py-[.375rem] px-[.875rem] bg-BGLight text-[.875rem] border-[1px] border-ltBorderNormal rounded-[8px] leading-tight cursor-pointer duration-[.15s] ease-in-out"
            >
              Edit
            </button>
            <button
              @click="openDeleteModal(review.id)"
              class="py-[.375rem] px-[.875rem] bg-BGLight text-[.875rem] text-ltTextNegative border-[1px] border-ltTextNegative rounded-[8px] leading-tight cursor-pointer duration-[.15s] ease-in-out"
            >
              Delete
            </button>
          </div>
        </div>
        <!-- Edit Review -->
        <EditReview
          v-else-if="editReviewid === review.id"
          :newReview="newReview"
          :storeReviews="storeReviews"
          @savedChanges="saveEditReview"
          @canceledChanges="closeEditReview"
          @imageSelected="handleImageUpload"
        />
        <!-- Delete Review -->
        <div
          v-if="deleteReviewid === review.id"
          class="h-[100%] w-[100%] z-[9] fixed top-0 left-0 right-0 overflow-auto bg-BGLight"
        >
          <DeleteReview
            @savedChanges="confirmDelete"
            @canceledChanges="closeDeleteModal"
          />
        </div>
      </div>
      <div v-else class="text-TextNormal font-light italic">No reviews yet</div>
    </div>
    <!--  Add Review -->
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
      <AddReview
        :newReview="newReview"
        :storeReviews="storeReviews"
        @savedChanges="addReview"
        @canceledChanges="closeAddReview"
        @imageSelected="handleImageUpload"
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
