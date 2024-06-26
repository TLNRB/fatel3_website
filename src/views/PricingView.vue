<script setup lang="ts">
import { ref, computed, onMounted, onUnmounted } from "vue";
import { RouterLink } from "vue-router";
/*-- Import Components --*/
import CTA from "@/components/CTA/CTA.vue";
import FAQ from "@/components/FAQ/FAQ.vue";
import SectionType from "@/components/Misc/SectionType.vue";
/*-- Import assets --*/
import dropdownIcon from "@/assets/icons/arrow-down-s-line.svg";
/*-- Import data --*/
import plansData from "@/data/plansData";
/*-- Import Store --*/
import { useStoreFAQs } from "@/stores/storeFAQs";

// Store handling
const storeFAQs = useStoreFAQs();

// Active Button
let btnActive = ref<string>("yearly");

// Active Feature List
let featureListActive = ref<boolean>(false);

// Active Plan
const activePlan = ref<string>("Basic");

const setActivePlan = (plan: string) => {
  activePlan.value = plan;
};

const activePlanLongSubMenus = computed(() => {
  return plansData.find((plan: any) => plan.title === activePlan.value);
});

// Screen width
const screenWidth = ref<number>(window.innerWidth); // Get initial screen width

function handleResize() {
  screenWidth.value = window.innerWidth; // Update screen width on resize
}

// Add resize event listener when component is mounted
onMounted(() => {
  window.addEventListener("resize", handleResize);
});
// Remove resize event listener when component is mounted
onUnmounted(() => {
  window.removeEventListener("resize", handleResize);
});
</script>

<template>
  <main class="flex flex-col items-center pt-[3rem] lg:pt-[4rem] xl:pt-[5rem]">
    <section class="px-[1rem] lg:px-[2rem] xxl:w-[1396px] xxl:mx-auto xxl:px-0">
      <div class="flex flex-col items-center gap-[1rem] xl:gap-[1.25rem]">
        <SectionType
          text="pricing"
          bgColor="bg-ltPrimary"
          textColor="text-TextLight"
        />
        <h1
          class="w-[100%] text-center text-[2rem] font-[500] leading-[1.15] xs:w-[325px] lg:w-[500px] lg:text-[3rem] xxl:w-[650px] xxl:text-[4rem]"
        >
          Find the Suitable Plan for
          <span class="font-[500] text-ltPrimary">You</span>
        </h1>
      </div>
      <div
        class="w-[100%] mt-[1.5rem] mx-auto text-center text-TextNormal font-light leading-snug xs:w-[330px] sm:w-[400px] lg:w-[550px] lg:text-[1.125rem] xl:mt-[2rem] xxl:w-[600px] xxl:text-[1.25rem]"
      >
        Explore our plans to find the right fit for your business needs.
      </div>
    </section>
    <section
      class="flex flex-col items-center gap-[3rem] mt-[3rem] mb-[5rem] px-[1rem] lg:px-[2rem] xl:mt-[4rem] xl:mb-[6rem] xxl:w-[1396px] xxl:mx-auto xxl:px-0"
    >
      <!-- Yearly/Monthly Button -->
      <div
        class="w-fit flex justify-center items-center p-[.25rem] border-[1px] border-ltBorder rounded-[14px]"
      >
        <div
          class="py-[.5rem] px-[1rem] rounded-[10px] leading-tight translate-y-[.5px] cursor-pointer duration-[.15s] ease-in-out"
          :class="
            btnActive === 'yearly'
              ? 'bg-ltPrimary text-TextLight'
              : 'bg-BGLight text-TextSemiDark'
          "
          @click="btnActive = 'yearly'"
        >
          Yearly
        </div>
        <div
          class="py-[.5rem] px-[1rem] rounded-[10px] leading-tight translate-y-[.5px] cursor-pointer duration-[.15s] ease-in-out"
          :class="
            btnActive === 'monthly'
              ? 'bg-ltPrimary text-TextLight'
              : 'bg-BGLight text-TextSemiDark'
          "
          @click="btnActive = 'monthly'"
        >
          Monthly
        </div>
      </div>
      <!-- Plans -->
      <div
        class="flex justify-center items-end gap-[1.5rem] flex-wrap lg:gap-[2rem]"
      >
        <div
          v-for="(plan, index) in plansData"
          :key="index"
          class="w-[250px] border-[1px] rounded-[14px] lg:w-[300px] lg:rounded-[16px]"
          :class="
            plan.isMostPopular ? ' border-ltPrimary' : ' border-ltBorderNormal'
          "
        >
          <div
            v-if="plan.isMostPopular"
            class="flex justify-center items-center py-[.375rem] bg-ltPrimary text-[.875rem] text-TextLight leading-tight rounded-t-[12px] lg:rounded-t-[14px]"
          >
            Most Popular
          </div>
          <div class="p-[1rem] lg:p-[1.5rem]">
            <div>
              <div class="flex justify-between items-center">
                <h3 class="text-[1.375rem] font-[500] leading-tight">
                  {{ plan.title }}
                </h3>
                <div
                  v-if="btnActive === 'yearly' && plan.title !== 'Enterprise'"
                  class="py-[.25rem] px-[.625rem] bg-ltPrimary text-[.75rem] text-TextLight rounded-[8px] leading-tight"
                >
                  Save 20%
                </div>
              </div>
              <div
                class="mt-[.5rem] mb-[1.5rem] text-[.875rem] font-light text-TextNormal leading-tight"
              >
                {{ plan.desc }}
              </div>
              <div
                v-if="btnActive === 'monthly' && plan.title !== 'Enterprise'"
                class="flex items-center gap-[.625rem]"
              >
                <div class="text-[3rem] font-[500] leading-none">
                  <span class="font-extralight">€</span>{{ plan.monthlyPrice }}
                </div>
                <div class="text-[1.125rem] font-light translate-y-[1px]">
                  eur/month
                </div>
              </div>
              <div
                v-else-if="
                  btnActive === 'yearly' && plan.title !== 'Enterprise'
                "
                class="flex items-center gap-[.625rem]"
              >
                <div class="text-[3rem] font-[500] leading-none">
                  <span class="font-extralight">€</span>{{ plan.yearlyPrice }}
                </div>
                <div class="text-[1.125rem] font-light translate-y-[1px]">
                  eur/year
                </div>
              </div>
              <div
                v-else-if="plan.title === 'Enterprise'"
                class="h-[48px] flex items-center text-[1.25rem] font-[500] leading-none"
              >
                {{ plan.monthlyPrice }}
              </div>
              <div
                v-if="btnActive === 'monthly'"
                class="mt-[.5rem] text-[.875rem] font-light text-TextNormal"
              >
                Billed monthly
              </div>
              <div
                v-else-if="btnActive === 'yearly'"
                class="mt-[.5rem] text-[.875rem] font-light text-TextNormal"
              >
                Billed annualy
              </div>
            </div>
            <hr class="my-[1.5rem] border-ltBorder" />
            <div class="flex flex-col gap-[1rem]">
              <div
                v-for="(shortSubItem, index) in plan.shortSubList"
                ::key="index"
                class="text-[15px] font-light leading-tight"
              >
                {{ shortSubItem.data }} {{ shortSubItem.title }}
              </div>
            </div>
            <RouterLink
              :to="{ name: 'support', query: { id: 'getStarted' } }"
              class="btn w-fit flex justify-center items-center mt-[3rem] mx-auto py-[.5rem] px-[1rem] text-TextLight border-[1px] rounded-[10px] leading-tight cursor-pointer xxl:py-[.625rem] xxl:px-[1.25rem] xxl:rounded-[11px]"
            >
              Get started
            </RouterLink>
          </div>
        </div>
      </div>
    </section>
    <section
      class="flex flex-col items-center mb-[2rem] px-[1rem] lg:px-[2rem] xxl:w-[1396px] xxl:mx-auto xxl:px-0"
    >
      <div class="flex flex-col items-center gap-[1.5rem]">
        <h2
          class="w-[100%] text-center text-[2rem] font-[500] leading-[1.15] xs:w-[325px] lg:w-[500px] lg:text-[3rem]"
        >
          Compare Our Plans
        </h2>
        <div
          class="w-[100%] mx-auto text-center text-TextNormal font-light leading-snug xs:w-[330px] sm:w-[475px] lg:w-[550px] lg:text-[1.125rem] xxl:w-[600px] xxl:text-[1.125rem]"
        >
          Compare our plans side by side to determine which one aligns best with your goals.
        </div>
      </div>
      <!-- Feature list dropdown btn -->
      <div
        class="btn w-fit flex justify-center items-center gap-[6px] mt-[3rem] mb-[2.5rem] pl-[1rem] pr-[.625rem] mx-auto py-[.625rem] text-TextLight border-[1px] rounded-[11px] leading-tight cursor-pointer xxl:gap-[7px] xxl:pl-[1.25rem] xxl:pr-[13px]"
        @click="featureListActive = !featureListActive"
      >
        <div>Feature list</div>
        <img
          :src="dropdownIcon"
          alt="dropdown icon"
          class="btn-arrow h-[18px] flex justify-center items-center xxl:h-[20px]"
          :class="{ 'btn-arrow-active': featureListActive }"
        />
      </div>
      <!-- Feature list -->
      <div v-if="featureListActive">
        <!-- Plans btn for small screen -->
        <div
          v-if="screenWidth < 768"
          class="sticky top-[66px] flex justify-center items-center gap-[.75rem] flex-wrap bg-BGLight py-[.5rem] pb-[1.5rem]"
        >
          <div
            v-for="(plan, index) in plansData"
            :key="index"
            @click="setActivePlan(plan.title)"
            class="py-[.375rem] px-[.875rem] bg-BGLight text-[.875rem] border-[1px] rounded-[8px] leading-tight cursor-pointer duration-[.15s] ease-in-out"
            :class="
              activePlan === plan.title
                ? 'text-ltPrimary border-ltPrimary'
                : 'text-TextSemiDark border-ltBorderNormal'
            "
          >
            {{ plan.title }}
          </div>
        </div>

        <!-- Feature list table -->
        <div class="w-[100%] xs:w-[300px] md:w-[700px] xl:w-[1000px]">
          <table class="min-w-full">
            <!-- Plans btn for large screen -->
            <thead class="sticky top-[66px] bg-BGLight lg:top-[72px]">
              <tr v-if="screenWidth >= 768">
                <th></th>
                <th
                  v-for="(plan, index) in plansData"
                  :key="index"
                  class="min-w-[100px] pt-[.5rem] pb-[1.5rem]"
                >
                  <div class="text-[1.125rem] font-[500] leading-none">
                    {{ plan.title }}
                  </div>
                  <RouterLink
                    :to="{ name: 'support', query: { id: 'getStarted' } }"
                    class="btn-light w-fit flex justify-center items-center mt-[1rem] mx-auto py-[.375rem] px-[.875rem] text-[.875rem] rounded-[9px] leading-tight cursor-pointer"
                  >
                    Get started
                  </RouterLink>
                </th>
              </tr>
            </thead>
            <tbody
              class="border-[1px] border-BGSemiNormal"
              v-for="(
                featureList, featureListIndex
              ) in activePlanLongSubMenus?.longSubList"
              :key="featureListIndex"
            >
              <tr>
                <th
                  :colspan="screenWidth >= 768 ? '4' : '2'"
                  class="sticky top-[128px] w-[100%] py-[.75rem] px-[1rem] text-left font-[500] bg-BGSemiNormal leading-none md:top-[161px] lg:top-[167px]"
                >
                  {{ featureList.title }}
                </th>
              </tr>
              <tr
                v-for="(feature, featureIndex) in featureList.features"
                :key="featureIndex"
                class="border-b-[1px] border-BGSemiNormal last:border-b-0"
              >
                <td
                  class="py-[1rem] pl-[1rem] text-[.875rem] font-light leading-tight"
                >
                  {{ feature.title }}
                </td>
                <td
                  v-if="screenWidth < 768"
                  class="min-w-[100px] p-[1rem] text-center text-[.875rem] leading-tight"
                >
                  <div v-if="feature.data" class="font-light">
                    {{ feature.data }}
                  </div>
                  <i
                    v-else-if="feature.icon"
                    class="text-[1.25rem] h-[18px] flex justify-center items-center"
                    :class="feature.icon"
                  ></i>
                  <div v-else></div>
                </td>
                <td
                  v-else-if="screenWidth >= 768"
                  v-for="(plan, id) in plansData"
                  :key="id"
                  class="min-w-[100px] p-[1rem] text-center text-[.875rem] leading-tight"
                >
                  <div
                    v-if="
                      plan.longSubList[featureListIndex]?.features[featureIndex]
                        .data
                    "
                    class="font-light"
                  >
                    {{
                      plan.longSubList[featureListIndex]?.features[featureIndex]
                        .data
                    }}
                  </div>
                  <i
                    v-else-if="
                      plan.longSubList[featureListIndex]?.features[featureIndex]
                        .icon
                    "
                    class="text-[1.25rem] h-[18px] flex justify-center items-center"
                    :class="
                      plan.longSubList[featureListIndex]?.features[featureIndex]
                        .icon
                    "
                  ></i>
                  <div v-else></div>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </section>
    <FAQ
      :faqs="storeFAQs"
      collectionID="pricing"
      :descriptionCondition="false"
      :buttonCondition="false"
    />
    <CTA
      textFirstPart="Create Your Inventory with"
      textHighlighted="fatel3"
      textSecondPart="Today"
      class="w-[100%]"
    />
  </main>
</template>

<style scoped>
.btn {
  background-color: var(--ltPrimary);
  border-color: var(--ltPrimary);
  transition: border-color, background-color 0.15s ease-in-out;
}

.btn-light {
  background-color: var(--ltHoverPrimary);
  color: var(--ltPrimary);
  transition: all 0.15s ease-in-out;
}

.btn-arrow {
  transform: translateY(0.5px) rotate(0);
  transition: all 0.3s ease-in-out;
}

.btn-arrow-active {
  transform: translateY(0.5px) rotate(180deg);
}

/*-- Hover isn't visible on touchscreen devices --*/
@media (hover: hover) {
  .btn:hover {
    background-color: var(--ltPrimaryDark);
    border-color: var(--ltPrimaryDark);
  }

  .btn-light:hover {
    background-color: var(--ltPrimary);
    color: var(--TextLight);
  }
}
</style>
