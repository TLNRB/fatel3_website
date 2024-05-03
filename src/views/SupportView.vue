<script setup lang="ts">
import { ref, reactive, watch, onMounted } from "vue";
import { useRouter } from "vue-router";
/*-- Import Components --*/
import SectionType from "@/components/Misc/SectionType.vue";
/*-- Import Store --*/
import { useStoreBookings } from "@/stores/storeBookings";

// Store handling
const storeBookings = useStoreBookings();

const router = useRouter();

/* Dynamic data */
// Get Started
const getStartedSection = ref<string>("get started");
const getStartedTitleFirst = ref<string>("Get Started with");
const getStartedTitleHighlighted = ref<string>("fatel3");
const getStartedTitleLast = ref<string>("Today");
const getStartedContent = ref<string>(
  "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
);

// Contact us
const contactSection = ref<string>("contact us");
const contactTitleFirst = ref<string>("Get in Touch with");
const contactTitleHighlighted = ref<string>("fatel3");
const contactTitleLast = ref<string>("to Get Help");
const contactContent = ref<string>(
  "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
);

/* Support */
const activeItem = ref<string>("");
const toggleActiveItem = (id: string) => {
  activeItem.value = activeItem.value === id ? "" : id;
};
// Topic
const topics: any = [
  { id: "getStarted", title: "Get Started" },
  { id: "priceAndBilling", title: "Price & Billing" },
  { id: "showcaseSetup", title: "Showcase setup" },
  { id: "somethingWentWrong", title: "Something went wrong" },
  { id: "somethingElse", title: "Something else" },
];

const activeTopic = ref<string>("");
const activeTopicTitle = ref<string>();
const setActiveTopic = (id: string) => {
  activeTopic.value = id;
  activeTopicTitle.value = topics.find((topic: any) => topic.id === id)?.title;
  toggleActiveItem("");
};

watch(
  () => router.currentRoute.value,
  () => {
    if (router.currentRoute.value.query.id) {
      setActiveTopic(router.currentRoute.value.query.id as string);
    }
  }
);

// Time
const times: any = ref([
  { startTime: "12:00", endTime: "13:00", reserved: false },
  { startTime: "13:00", endTime: "14:00", reserved: false },
  { startTime: "14:00", endTime: "15:00", reserved: false },
  { startTime: "15:00", endTime: "16:00", reserved: false },
  { startTime: "16:00", endTime: "17:00", reserved: false },
  { startTime: "17:00", endTime: "18:00", reserved: false },
  { startTime: "18:00", endTime: "19:00", reserved: false },
]);

const activeStartTime = ref<string>("");
const activeEndTime = ref<string>("");
const setActiveTime = (startTime: string, endTime: string) => {
  activeStartTime.value = startTime;
  activeEndTime.value = endTime;
};

// Date
const monthNames: string[] = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
];

const weekdayNames: string[] = [
  "Sun",
  "Mon",
  "Tue",
  "Wed",
  "Thu",
  "Fri",
  "Sat",
];

// Get today's date
const today = new Date();
// Get today's day and month and week day
const currentDay = today.getDate();
const currentMonth = monthNames[today.getMonth()];
const currentYear = today.getFullYear();
const weekday = weekdayNames[today.getDay()];

// Make today's day and month active as default
const clickedDay = ref<number | null>();
const clickedMonth = ref<string | null>();
const clickedYear = ref<number | null>();
const clickedWeekday = ref<string | null>();

// Define an array of days that will be displayed
const days: any = ref([
  {
    date: currentDay,
    month: currentMonth,
    year: currentYear,
    weekDay: weekday,
    active: false,
  },
]);

// Loop through the next 6 days after todays date
for (let i = 1; i <= 6; i++) {
  const nextDay = new Date();
  // Get the next day's date
  nextDay.setDate(currentDay + i);
  // Get the next day's day and month and week day
  const nextDayOfMonth = nextDay.getDate();
  const nextMonth = monthNames[nextDay.getMonth()];
  const nextYear = nextDay.getFullYear();
  const weekday = weekdayNames[nextDay.getDay()];
  // Push the next day's data to the days array
  days.value.push({
    date: nextDayOfMonth,
    month: nextMonth,
    year: nextYear,
    weekDay: weekday,
    active: false,
  });
}

const setActiveDate = (
  weekday: string,
  date: number,
  month: string,
  year: number
) => {
  // Make the clicked day active for styling
  days.value.forEach((day: any) =>
    day.date === date ? (day.active = true) : (day.active = false)
  );
  // Display and store the clicked day's data
  clickedDay.value = date;
  clickedMonth.value = month;
  clickedYear.value = year;
  clickedWeekday.value = weekday;
};

/* Booking */
const newBooking: any = reactive({
  topic: "",
  day: "",
  month: "",
  year: "",
  startTime: "",
  endTime: "",
  firstName: "",
  lastName: "",
  email: "",
  information: "",
});

const valueClear = () => {
  newBooking.topic = "";
  newBooking.day = "";
  newBooking.month = "";
  newBooking.year = "";
  newBooking.startTime = "";
  newBooking.endTime = "";
  newBooking.firstName = "";
  newBooking.lastName = "";
  newBooking.email = "";
  newBooking.information = "";
  setActiveTopic("");
  setActiveTime("", "");
  setActiveDate("", 0, "", 0);
};

const bookingModal = ref<boolean>(false);
const error = ref<string>("");

const addBooking = () => {
  if (
    !activeTopicTitle.value ||
    !clickedDay.value ||
    !clickedMonth.value ||
    !clickedYear.value ||
    !activeStartTime.value ||
    !activeEndTime.value ||
    !newBooking.firstName ||
    !newBooking.lastName ||
    !newBooking.email
  ) {
    error.value = "Fill in every information";
  } else {
    newBooking.topic = activeTopicTitle;
    newBooking.day = clickedDay.value;
    newBooking.month = monthNames.indexOf(clickedMonth.value) + 1;
    newBooking.year = clickedYear.value;
    newBooking.startTime = activeStartTime.value;
    newBooking.endTime = activeEndTime.value;
    storeBookings.addBooking(newBooking);
    bookingModal.value = true;
    valueClear();
    error.value = "";
  }
};

onMounted(() => {
  const supportId = router.currentRoute.value.query.id as string;
  if (supportId) {
    setActiveTopic(supportId);
  }
});
</script>

<template>
  <main
    class="pt-[3rem] pb-[4rem] px-[1rem] flex flex-col items-center gap-[3rem] lg:pt-[4rem] lg:pb-[5rem] lg:px-[2rem] xl:gap-[4rem] xl:pt-[5rem] xl:pb-[6rem] xxl:w-[1396px] xxl:mx-auto xxl:px-0"
  >
    <section class="flex flex-col items-center">
      <div class="flex flex-col items-center gap-[1rem] xl:gap-[1.25rem]">
        <SectionType
          :text="
            activeTopic === 'getStarted' ? getStartedSection : contactSection
          "
          bgColor="bg-ltPrimary"
          textColor="text-TextLight"
        />
        <h2
          class="w-[100%] text-center text-[2rem] font-[500] leading-[1.15] xs:w-[300px] sm:w-[350px] lg:w-[500px] lg:text-[3rem] xxl:w-[700px] xxl:text-[4rem]"
        >
          {{
            activeTopic === "getStarted"
              ? getStartedTitleFirst
              : contactTitleFirst
          }}
          <span class="font-[500] text-ltPrimary">{{
            activeTopic === "getStarted"
              ? getStartedTitleHighlighted
              : contactTitleHighlighted
          }}</span>
          {{
            activeTopic === "getStarted"
              ? getStartedTitleLast
              : contactTitleLast
          }}
        </h2>
      </div>
      <div
        class="w-[100%] mt-[1.5rem] text-center text-TextNormal font-light leading-snug xs:w-[325px] sm:w-[400px] lg:w-[550px] lg:text-[1.125rem] xl:mt-[2rem] xxl:w-[600px] xxl:text-[1.25rem]"
      >
        {{ activeTopic === "getStarted" ? getStartedContent : contactContent }}
      </div>
    </section>
    <form
      @submit.prevent="addBooking"
      class="w-[100%] flex flex-col items-center gap-[2.5rem] md:w-[700px] xxl:w-[816px]"
    >
      <!-- Topic -->
      <div class="w-[100%] flex flex-col">
        <div class="font-[500] leading-none">What can we help you with?</div>
        <div
          class="flex justify-between items-center mt-[1rem] py-[.625rem] pl-[.875rem] pr-[.625rem] border-[1px] border-ltBorderNormal rounded-[6px] cursor-pointer duration-[.15s] ease-in-out xxl:mt-[1.25rem] xxl:py-[.75rem] xxl:pl-[1rem] xxl:rounded-[7px]"
          :class="[
            activeItem === 'topic'
              ? 'border-ltPrimary'
              : 'border-ltBorderNormal',
            error && !activeTopicTitle ? 'border-ltTextNegative' : '',
          ]"
          @click="toggleActiveItem('topic')"
        >
          <div
            class="text-[.875rem] font-light leading-tight translate-y-[1px] xxl:text-[15px] xxl:translate-y-[.5px]"
            :class="
              activeTopic && activeTopic !== 'support'
                ? 'text-TextSemiDark'
                : 'text-TextSemiNormal'
            "
          >
            {{
              activeTopic && activeTopic !== "support"
                ? topics.find((topic: any) => topic.id === activeTopic)?.title
                : "Select a topic"
            }}
          </div>
          <i
            class="ri-arrow-down-s-line text-[1.25rem] h-[16px] flex justify-center items-center text-TextSemiDark xxl:text-[1.5rem] xxl:h-[20px]"
            :class="
              activeItem === 'topic' ? 'item-arrow-open' : 'item-arrow-close'
            "
          ></i>
        </div>
        <div
          class="flex flex-col gap-[.125rem] mt-[.625rem] p-[.625rem] border-[1px] border-ltBorderNormal rounded-[6px] xxl:rounded-[7px]"
          :class="activeItem === 'topic' ? 'block' : 'hidden'"
        >
          <div
            v-for="(topic, index) in topics"
            :key="index"
            class="py-[.5rem] px-[.75rem] text-[.875rem] font-light leading-tight translate-y-[1px] rounded-[5px] duration-[.15s] ease-in-out cursor-pointer xxl:text-[15px] xxl:translate-y-[.5px]"
            :class="
              activeTopic === topic.id
                ? 'bg-ltHoverPrimary text-ltPrimary'
                : 'bg-transparent text-TextSemidark'
            "
            @click="setActiveTopic(topic.id)"
          >
            {{ topic.title }}
          </div>
        </div>
      </div>
      <!-- Date -->
      <div class="w-[100%] flex flex-col">
        <div
          class="font-[500] leading-none"
          :class="
            error && (!clickedDay || !clickedMonth || !clickedYear)
              ? 'text-ltTextNegative font-[400]'
              : ''
          "
        >
          Select Date
          <span
            v-if="clickedMonth && clickedYear"
            class="font-light text-TextNormal"
            >- {{ clickedMonth }} {{ clickedYear }}</span
          >
        </div>
        <div
          class="flex items-center gap-[1.125rem] flex-wrap mt-[1rem] xxl:gap-[1.5rem] xxl:mt-[1.25rem]"
        >
          <div
            v-for="(day, index) in days"
            :key="index"
            class="w-[90px] h-[80px] flex flex-col justify-center items-center gap-[.625rem] p-[.875rem] border-[1px] rounded-[10px] cursor-pointer duration-[.15s] ease-in-out xxl:w-[96px] xxl:h-[86px] xxl:p-[1rem]"
            :class="day.active ? 'border-ltPrimary' : 'border-ltBorderNormal'"
            @click="setActiveDate(day.weekDay, day.date, day.month, day.year)"
          >
            <div
              class="text-[.875rem] font-light uppercase leading-none duration-[.15s] ease-in-out xxl:text-[15px]"
              :class="day.active ? 'text-ltPrimary' : 'text-TextNormal'"
            >
              {{ day.weekDay }}
            </div>
            <div
              class="text-[1.375rem] font-[500] leading-none duration-[.15s] ease-in-out"
              :class="day.active ? 'text-ltPrimary' : 'text-TextSemiDark'"
            >
              {{ day.date }}
            </div>
          </div>
        </div>
      </div>
      <!-- Time -->
      <div class="w-[100%] relative flex flex-col">
        <div
          class="font-[500] leading-none"
          :class="
            error && (!activeStartTime || !activeEndTime)
              ? 'text-ltTextNegative font-[400]'
              : ''
          "
        >
          Select Time
        </div>
        <div
          class="flex items-center gap-[1.125rem] flex-wrap mt-[1rem] xxl:gap-[1.25rem] xxl:mt-[1.25rem]"
        >
          <div
            v-for="(time, index) in times"
            :key="index"
            class="flex justify-center items-center py-[.625rem] px-[.875rem] text-[.875rem] font-light border-[1px] rounded-[6px] leading-[1.2] duration-[.15s] ease-in-out xxl:text-[15px] xxl:rounded-[7px]"
            :class="[
              activeStartTime === time.startTime &&
              activeEndTime === time.endTime
                ? 'border-ltPrimary text-ltPrimary'
                : 'border-ltBorderNormal text-TextSemiDark',
              time.reserved
                ? 'text-ltBorderNormal line-through cursor-not-allowed'
                : 'cursor-pointer',
            ]"
            @click="
              !time.reserved ? setActiveTime(time.startTime, time.endTime) : ''
            "
          >
            {{ time.startTime }} - {{ time.endTime }}
          </div>
        </div>
      </div>
      <!-- Name  -->
      <div
        class="w-[100%] flex flex-col gap-[2.5rem] mt-[1rem] md:flex-row md:justify-between md:gap-0 md:flex-wrap"
      >
        <div
          class="w-[100%] flex flex-col gap-[1rem] md:w-[47.5%] xxl:gap-[1.25rem]"
        >
          <div class="font-[500] leading-none">First Name</div>
          <input
            type="text"
            v-model="newBooking.firstName"
            placeholder="Your first name"
            class="input-field py-[.625rem] px-[.875rem] text-[.875rem] font-light border-[1px] leading-tight rounded-[6px] outline-none xxl:py-[.75rem] xxl:px-[1rem] xxl:text-[15px] xxl:rounded-[7px]"
            :class="error && !newBooking.firstName ? 'input-error' : ''"
          />
        </div>
        <div
          class="w-[100%] flex flex-col gap-[1rem] md:w-[47.5%] xxl:gap-[1.25rem]"
        >
          <div class="font-[500] leading-none">Last Name</div>
          <input
            type="text"
            v-model="newBooking.lastName"
            placeholder="Your last name"
            class="input-field py-[.625rem] px-[.875rem] text-[.875rem] font-light border-[1px] leading-tight rounded-[6px] outline-none xxl:py-[.75rem] xxl:px-[1rem] xxl:text-[15px] xxl:rounded-[7px]"
            :class="error && !newBooking.lastName ? 'input-error' : ''"
          />
        </div>
      </div>
      <!-- Email -->
      <div class="w-[100%] flex flex-col gap-[1rem] xxl:gap-[1.25rem]">
        <div class="font-[500] leading-none">Email Address</div>
        <input
          type="email"
          v-model="newBooking.email"
          placeholder="example@email.com"
          class="input-field py-[.625rem] px-[.875rem] text-[.875rem] font-light border-[1px] leading-tight rounded-[6px] outline-none xxl:py-[.75rem] xxl:px-[1rem] xxl:text-[15px] xxl:rounded-[7px]"
          :class="error && !newBooking.email ? 'input-error' : ''"
        />
      </div>

      <!-- Email -->
      <div class="w-[100%] flex flex-col gap-[1rem] xxl:gap-[1.25rem]">
        <div class="font-[500] leading-none">
          Add more information
          <span class="font-light text-TextNormal">(Optional)</span>
        </div>
        <textarea
          placeholder="I have a problem with..."
          v-model="newBooking.information"
          class="input-field min-h-[100px] py-[.625rem] px-[.875rem] text-[.875rem] font-light border-[1px] leading-tight rounded-[6px] outline-none xxl:py-[.75rem] xxl:px-[1rem] xxl:text-[15px] xxl:rounded-[7px]"
        ></textarea>
      </div>
      <div
        v-if="error"
        class="mr-auto text-[.875rem] font-light text-ltTextNegative"
      >
        {{ error }}
      </div>
      <button
        type="submit"
        class="btn w-fit flex justify-center items-center mr-auto py-[.5rem] px-[1rem] text-TextLight rounded-[10px] leading-tight cursor-pointer xxl:py-[.625rem] xxl:px-[1.25rem] xxl:rounded-[11px]"
      >
        Reserve
      </button>
    </form>
    <!-- Successfull booking modal -->
    <div
      v-if="bookingModal"
      class="h-[100%] w-[100%] z-[9] fixed top-0 left-0 right-0 overflow-auto bg-BGLight"
    >
      <div
        class="w-[245px] absolute top-[50%] left-[50%] translate-y-[-50%] translate-x-[-50%] flex flex-col gap-[.5rem] py-[1.5rem] px-[.75rem] bg-BGLight border-[1px] border-ltPrimary rounded-[10px] xs:w-[325px] sm:w-[400px] xxl:w-[425px]"
      >
        <h2 class="text-center text-[1rem] font-[500]">
          Successfull reservation!
        </h2>
        <!-- BTNs -->
        <div
          class="flex justify-center items-center gap-[.75rem] flex-wrap mt-[1rem]"
        >
          <button
            type="button"
            @click="bookingModal = false"
            class="py-[.375rem] px-[.875rem] bg-BGLight text-[.875rem] border-[1px] border-ltBorderNormal rounded-[8px] leading-tight cursor-pointer duration-[.15s] ease-in-out"
          >
            Close
          </button>
        </div>
      </div>
    </div>
  </main>
</template>

<style scoped>
/* Button */
.btn {
  background-color: var(--ltPrimary);
  transition: background-color 0.15s ease-in-out;
}

/*-- Hover isn't visible on touchscreen devices --*/
@media (hover: hover) {
  .btn:hover {
    background-color: var(--ltPrimaryDark);
  }
}

/* Item Arrow */
.item-arrow-open {
  transform: translateY(1px) rotate(180deg);
  transition: transform 0.25s ease-in-out;
}

.item-arrow-close {
  transform: translateY(1px) rotate(0deg);
  transition: transform 0.25s ease-in-out;
}

/* Input Field */
.input-field {
  border-color: var(--ltBorderNormal);
  transition: all 0.15s ease-in-out;
}

.input-field:focus {
  border-color: var(--ltPrimary);
}

.input-error {
  border-color: var(--ltTextNegative);
}

::placeholder {
  color: var(--TextSemiNormal);
  font-weight: 200;
}

textarea {
  resize: none;
}
</style>
