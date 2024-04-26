import tempImg from "@/assets/images/temp-review.jpg";

const useCases = [
  {
    title: "Reselling",
    route: "reselling",
    icon: "ri-price-tag-3-line",
    shortDesc: "For the ones reselling various items and products",
    longDesc:
      "Ambitious resellers who sell different types of products and seek for a system that helps grow their business.",
    commingSoon: false,
    pageTitle: "Meets fatel3 for Managing Inventory",
    pageDesc: [
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    ],
    pageReviewText:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    pageReviewAuthor: "John Doe",
    pageReviewAuthorTitle: "CEO at Company",
    pageReviewImage: tempImg,
    pageApps: [
      {
        title: "Showcase",
        icon: "ri-stack-line",
        route: "/#showcase",
      },
    ],
  },
  {
    title: "E-commerce",
    route: "e-commerce",
    icon: "ri-shopping-cart-line",
    shortDesc: "Integration with the most used e-commerce platforms",
    longDesc:
      "Having a website on one of the popular e-commerce platforms or having your own, doesn't matter, we are here to help.",
    commingSoon: true,
  },
];

export default useCases;
