<script setup lang="ts">
import { ref, computed } from "vue";
/*-- Import Components --*/
import SectionType from "@/components/Misc/SectionType.vue";
/*-- Import assets --*/
/*-- Import data --*/

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
const topics = [
  { id: "getStarted", title: "Get Started", active: false },
  { id: "priceAndBilling", title: "Price & Billing", active: false },
  { id: "showcaseSetup", title: "Showcase setup", active: false },
  { id: "somethingWentWrong", title: "Something went wrong", active: false },
  { id: "somethingElse", title: "Something else", active: false },
];

const activeTopic = ref<string>("");
const setActiveTopic = (id: string) => {
  activeTopic.value = id;
  toggleActiveItem("");
};

// Date
const monthNames = [
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

const weekdayNames = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];

// Get today's date
const today = new Date();
// Get today's day and month and week day
const currentDay = today.getDate();
const currentMonth = monthNames[today.getMonth()];
const currentYear = today.getFullYear();
const weekday = weekdayNames[today.getDay()];

// Make today's day and month active as default
const clickedDay = ref();
const clickedMonth = ref();
const clickedYear = ref();
const clickedWeekday = ref();

// Define an array of days that will be displayed
const days = ref([
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

const handleTimetableFilter = (
  weekday: string,
  date: number,
  month: string,
  year: number
) => {
  console.log(weekday, date, month, year);
  // Make the clicked day active for styling
  days.value.forEach((day) =>
    day.date === date ? (day.active = true) : (day.active = false)
  );
  // Display and store the clicked day's data
  clickedDay.value = date;
  clickedMonth.value = month;
  clickedYear.value = year;
  clickedWeekday.value = weekday;
};

const activeDate = ref<string>("");
const setActiveDate = (id: string) => {
  activeDate.value = id;
  toggleActiveItem("");
};
</script>

<template>
  <main
    class="py-[4rem] px-[1rem] flex flex-col items-center gap-[3rem] lg:py-[5rem] lg:px-[2rem] xl:gap-[4rem] xl:py-[6rem] xxl:w-[1396px] xxl:mx-auto xxl:px-0"
  >
    <section class="flex flex-col items-center">
      <div class="flex flex-col items-center gap-[1rem] xl:gap-[1.25rem]">
        <SectionType
          :text="getStartedSection"
          bgColor="bg-ltPrimary"
          textColor="text-TextLight"
        />
        <h2
          class="w-[100%] text-center text-[2rem] font-[500] leading-[1.15] xs:w-[300px] sm:w-[350px] lg:w-[500px] lg:text-[3rem] xxl:w-[700px] xxl:text-[4rem]"
        >
          {{ getStartedTitleFirst }}
          <span class="font-[500] text-ltPrimary">{{
            getStartedTitleHighlighted
          }}</span>
          {{ getStartedTitleLast }}
        </h2>
      </div>
      <div
        class="w-[100%] mt-[1.5rem] text-center text-TextNormal font-light leading-snug xs:w-[325px] sm:w-[400px] lg:w-[550px] lg:text-[1.125rem] xl:mt-[2rem] xxl:w-[600px] xxl:text-[1.25rem]"
      >
        {{ getStartedContent }}
      </div>
    </section>
    <section
      class="w-[100%] flex flex-col items-center gap-[2.5rem] md:w-[700px] xxl:w-[800px]"
    >
      <!-- Topic -->
      <div class="w-[100%] relative flex flex-col">
        <div class="font-[500] leading-none">What can we help you with?</div>
        <div
          class="flex justify-between items-center mt-[1rem] py-[.625rem] pl-[.875rem] pr-[.625rem] border-[1px] border-ltBorderNormal rounded-[6px] cursor-pointer duration-[.15s] ease-in-out xxl:mt-[1.25rem] xxl:py-[.75rem] xxl:pl-[1rem] xxl:rounded-[7px]"
          :class="
            activeItem === 'topic'
              ? 'border-ltPrimary'
              : 'border-ltBorderNormal'
          "
          @click="toggleActiveItem('topic')"
        >
          <div
            class="text-[.875rem] font-light leading-tight translate-y-[1px] xxl:text-[15px] xxl:translate-y-[.5px]"
            :class="activeTopic ? 'text-TextSemiDark' : 'text-TextSemiNormal'"
          >
            {{
              activeTopic
                ? topics.find((topic) => topic.id === activeTopic)?.title
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
      <div class="w-[100%] relative flex flex-col">
        <div class="font-[500] leading-none">
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
            class="w-[90px] h-[80px] flex flex-col justify-center items-center gap-[.625rem] p-[.875rem] border-[1px] rounded-[10px] cursor-pointer duration-[.15s] ease-in-out"
            :class="day.active ? 'border-ltPrimary' : 'border-ltBorderNormal'"
            @click="
              handleTimetableFilter(day.weekDay, day.date, day.month, day.year)
            "
          >
            <div
              class="text-[.875rem] font-light uppercase leading-none duration-[.15s] ease-in-out"
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
    </section>
  </main>
</template>

<style scoped>
/* Nav Item Arrow */
.item-arrow-open {
  transform: translateY(1px) rotate(180deg);
  transition: transform 0.25s ease-in-out;
}

.item-arrow-close {
  transform: translateY(1px) rotate(0deg);
  transition: transform 0.25s ease-in-out;
}
</style>
