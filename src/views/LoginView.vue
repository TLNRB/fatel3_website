<script setup lang="ts">
/*-- Import Assets --*/
import logoPrimary from "@/assets/images/logo_primary.svg";
</script>

<template>
  <main
    class="min-h-[100vh] pt-[7rem] pb-[13rem] px-[1rem] flex flex-col justify-center items-center gap-[1rem] lg:px-[2rem] xl:pt-[17rem] xl:pb-[23rem]"
  >
    <div
      class="w-[250px] flex justify-center items-center xs:w-[325px] xl:w-[400px] xl:justify-start"
    >
      <img :src="logoPrimary" alt="fatel3 logo" class="h-[40px] xl:ml-[2rem]" />
    </div>
    <div
      class="w-[250px] py-[2rem] px-[1.25rem] border-[1px] border-ltPrimary rounded-[10px] xs:w-[325px] xl:w-[400px] xl:py-[2.5rem] xl:px-[2rem]"
    >
      <h2 class="text-[1.125rem] font-[500]">Log in to your account</h2>
      <div class="mt-[1.25rem] mb-[2.5rem] xl:mt-[1.5rem] xl:mb-[3rem]">
        <input
          type="email"
          name=""
          id=""
          placeholder="example@email.com"
          class="input-field w-[100%] py-[.5rem] px-[.875rem] text-[.875rem] font-light border-[1px] leading-tight rounded-[5px] outline-none xl:py-[.625rem] xl:px-[1rem] xl:text-[15px] xl:rounded-[6px]"
        />
      </div>
      <div
        class="btn w-[100%] flex justify-center items-center py-[.5rem] bg-ltPrimary text-TextLight cursor-pointer rounded-[8px] duration-[.15s] ease-in-out xl:py-[9px] xl:text-[17px] xl:rounded-[9px]"
      >
        Log in
      </div>
    </div>
  </main>
</template>

<style scoped>
.input-field {
  border-color: var(--ltBorder);
  transition: all 0.15s ease-in-out;
}

.input-field:focus {
  border-color: var(--ltPrimary);
}

/*-- Hover isn't visible on touchscreen devices --*/
@media (hover: hover) {
  .btn:hover {
    background-color: var(--ltPrimaryDark);
  }
}

::placeholder {
  color: var(--TextSemiNormal);
  font-weight: 200;
}
</style>
