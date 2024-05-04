<script setup lang="ts">
import { ref } from "vue";
/*-- Import Components --*/
/* import EditBooking from "@/components/Admin/Bookings/EditBooking.vue"; */
import DeleteBooking from "@/components/Admin/Bookings/DeleteBooking.vue";

// Prop handling
const { storeBookings } = defineProps(["storeBookings"]);

import { useStoreDays } from "@/stores/storeDays";

const storeDays = useStoreDays();

// Delete Booking section
const deleteBookingid = ref<string>("");
const dayID = ref<string>("");
const timeID = ref<number>(-1);

const openDeleteModal = (
  index: string,
  dayIndex: string,
  timeIndex: number
) => {
  deleteBookingid.value = index;
  dayID.value = dayIndex;
  timeID.value = timeIndex;
};

const closeDeleteModal = () => {
  deleteBookingid.value = "";
  dayID.value = "";
  timeID.value = -1;
};

const confirmDelete = () => {
  storeBookings.deleteBooking(deleteBookingid.value);
  storeDays.updateDayReservedTime(dayID.value, timeID.value, "delete");
  closeDeleteModal();
};
</script>

<template>
  <section
    class="w-[100%] flex justify-center gap-[1rem] flex-wrap xl:gap-[1.5rem]"
  >
    <div
      v-if="storeBookings.bookings.length > 0"
      v-for="(booking, index) in storeBookings.bookings"
      :key="index"
      class="w-[100%] flex flex-col gap-[.5rem] p-[.75rem] bg-BGLight border-[1px] border-ltPrimary rounded-[10px] overflow-hidden xs:w-[325px] sm:w-[400px] xxl:w-[425px]"
    >
      <!-- Date&Tim -->
      <div class="flex items-center gap-[1rem] xs:gap-[1.5rem]">
        <div
          class="min-w-[70px] w-[70px] text-[13px] font-light text-TextNormal sm:min-w-[75px] sm:w-[75px] sm:text-[.875rem]"
        >
          Date&Time
        </div>
        <div
          class="w-[100%] py-[.5rem] px-[.75rem] text-[13px] font-light border-[1px] border-ltBorder rounded-[7px] leading-tight sm:px-[.875rem] sm:text-[.875rem]"
        >
          {{ booking.day }}/{{ booking.month }}/{{ booking.year }}
          {{ booking.startTime }}-{{ booking.endTime }}
        </div>
      </div>
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
          {{ booking.firstName }} {{ booking.lastName }}
        </div>
      </div>
      <!-- Name -->
      <div class="flex items-center gap-[1rem] xs:gap-[1.5rem]">
        <div
          class="min-w-[70px] w-[70px] text-[13px] font-light text-TextNormal sm:min-w-[75px] sm:w-[75px] sm:text-[.875rem]"
        >
          Email
        </div>
        <div
          class="w-[100%] py-[.5rem] px-[.75rem] text-[13px] font-light border-[1px] border-ltBorder rounded-[7px] leading-tight sm:text-[.875rem]"
        >
          {{ booking.email }}
        </div>
      </div>
      <!-- Message -->
      <div
        v-if="booking.information"
        class="flex items-center gap-[1rem] xs:gap-[1.5rem]"
      >
        <div
          class="min-w-[70px] w-[70px] text-[13px] font-light text-TextNormal sm:min-w-[75px] sm:w-[75px] sm:text-[.875rem]"
        >
          Message
        </div>
        <div
          class="w-[100%] py-[.5rem] px-[.75rem] text-[13px] font-light border-[1px] border-ltBorder rounded-[7px] leading-tight sm:text-[.875rem]"
        >
          {{ booking.information }}
        </div>
      </div>
      <!-- BTNs -->
      <div
        class="flex justify-center items-center gap-[.75rem] flex-wrap"
        :class="booking.information ? 'mt-[.25rem]' : 'mt-auto'"
      >
        <button
          type="button"
          @click="openDeleteModal(booking.id, booking.dayID, booking.timeID)"
          class="py-[.375rem] px-[.875rem] bg-BGLight text-[.875rem] text-ltTextNegative border-[1px] border-ltTextNegative rounded-[8px] leading-tight cursor-pointer duration-[.15s] ease-in-out"
        >
          Delete
        </button>
      </div>
      <!-- Delete FAQ -->
      <div
        v-if="deleteBookingid === booking.id"
        class="h-[100%] w-[100%] z-[9] fixed top-0 left-0 right-0 overflow-auto bg-BGLight"
      >
        <DeleteBooking
          @savedChanges="confirmDelete"
          @canceledChanges="closeDeleteModal"
        />
      </div>
    </div>
    <div v-else class="text-TextNormal font-light italic">No bookings yet</div>
  </section>
</template>

<style scoped></style>
