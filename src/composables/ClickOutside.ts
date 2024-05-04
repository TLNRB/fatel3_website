import { ref } from "vue";

export const clickOutside = (dropdownWrapperID: string) => {
  const subMenuHeight = ref("0px"); // Initialize subMenuHeight as a simple string

  const getSubMenuHeight = (
    activeIndex: string,
    navItem: any,
    screenWidth: number
  ) => {
    if (activeIndex === navItem.id) {
      if (screenWidth < 560) {
        subMenuHeight.value = `${navItem.subMenuHeightXS}px`; // For extra small screens
      } else if (screenWidth < 768) {
        subMenuHeight.value = `${navItem.subMenuHeightSM}px`; // For small screens
      } else if (screenWidth < 1060) {
        subMenuHeight.value = `${navItem.subMenuHeightMD}px`; // For medium screens
      } else if (screenWidth < 1200) {
        subMenuHeight.value = `${navItem.subMenuHeightLG}px`; // For large screens
      } else {
        subMenuHeight.value = `${navItem.subMenuHeightXL}px`; // For the larger screens
        console.log(subMenuHeight.value);
      }
    } else {
      subMenuHeight.value = "0px"; // Reset subMenuHeight when activeIndex doesn't match
    }
  };

  const closeOnOutsideClick = (event) => {
    if (!event.target.closest(`#${dropdownWrapperID}`)) {
      subMenuHeight.value = "0px";
      console.log(subMenuHeight.value);
    }
  };

  return { subMenuHeight, getSubMenuHeight, closeOnOutsideClick };
};
