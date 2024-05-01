<script setup lang="ts">
import { ref, reactive } from "vue";
/*-- Import Components --*/
import AddFAQ from "@/components/Admin/FAQs/AddFAQ.vue";
import EditFAQ from "@/components/Admin/FAQs/EditFAQ.vue";
import DeleteFAQ from "@/components/Admin/FAQs/DeleteFAQ.vue";

// Prop handling
const { storeFAQs, collectionID } = defineProps(["storeFAQs", "collectionID"]);

// Collecyion index to string
const collectionIndex = ref<string>(collectionID);

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
  closeEditFAQ();
  addModal.value = !addModal.value;
};

const addFAQ = () => {
  storeFAQs.addFAQ(collectionIndex.value, newFAQ);
  toggleAdd();
  valueClear();
};

const closeAddFAQ = () => {
  toggleAdd();
  valueClear();
};

// Edit FAQ section
const editFAQid = ref<string>("");

const editSingleFAQ = (index: string) => {
  editFAQid.value = index;
  if (collectionID === "home") {
    for (let i = 0; i < storeFAQs.faqsHome.length; i++) {
      // Getting the input values by id
      if (storeFAQs.faqsHome[i].id === index) {
        newFAQ.question = storeFAQs.faqsHome[i].question;
        newFAQ.answer = storeFAQs.faqsHome[i].answer;
      }
    }
  } else {
    for (let i = 0; i < storeFAQs.faqsPricing.length; i++) {
      // Getting the input values by id
      if (storeFAQs.faqsPricing[i].id === index) {
        newFAQ.question = storeFAQs.faqsPricing[i].question;
        newFAQ.answer = storeFAQs.faqsPricing[i].answer;
      }
    }
  }
};

const saveEditFAQ = () => {
  storeFAQs.updateFAQ(collectionIndex.value, newFAQ, editFAQid.value);
  valueClear();
  editFAQid.value = "";
};

const closeEditFAQ = () => {
  valueClear();
  editFAQid.value = "";
};

// Delete FAQ section
const deleteFAQid = ref<string>("");

const openDeleteModal = (index: string) => {
  closeEditFAQ();
  deleteFAQid.value = index;
};

const closeDeleteModal = () => {
  deleteFAQid.value = "";
};

const confirmDelete = () => {
  storeFAQs.deleteFAQ(collectionIndex.value, deleteFAQid.value);
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
