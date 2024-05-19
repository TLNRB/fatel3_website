import tempImg from "@/assets/images/temp-review.jpg";

const useCases: any = [
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
      "It is designed for ambitious resellers who aim to streamline their inventory management processes. Whether you're selling various items or your own products, this solution is here to help you efficiently manage your inventory and scale your business.",
      "With specific features and functionalities, we provide a comprehensive platform to track, monitor, and optimize your inventory operations. By stock tracking, gain full control over your inventory management with ease.",
    ],
    pageReviewText:
      "fatel3 is an amazing app for resellers looking to elevate their inventory management game. It has an intuitive interface and a lot of features to make inventory management a breeze. Highly recommended for any reseller who wants to scale their business efficiently.",
    pageReviewAuthor: "John Doe",
    pageReviewAuthorTitle: "Reseller",
    pageReviewImage: tempImg,
    pageApps: [
      {
        title: "Showcase",
        icon: "ri-stack-line",
        route: "/#showcase",
      },
    ],
  },
];

export default useCases;
