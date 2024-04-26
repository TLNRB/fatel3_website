const plans = [
  {
    title: "Basic",
    desc: "For small businesses",
    monthlyPrice: "32",
    yearlyPrice: "29",
    isMostPopular: false,
    shortSubList: [
      {
        data: "1000",
        title: "items",
      },
      {
        data: "1000",
        title: "items",
      },
      {
        data: "2",
        title: "User License",
      },
      {
        data: "2",
        title: "Inventory Location",
      },
    ],
  },
  {
    title: "Standard",
    desc: "For medium businesses",
    monthlyPrice: "64",
    yearlyPrice: "59",
    isMostPopular: true,
    shortSubList: [
      {
        data: "2000",
        title: "items",
      },
      {
        data: "2000",
        title: "items",
      },
      {
        data: "3",
        title: "User License",
      },
      {
        data: "3",
        title: "Inventory Location",
      },
    ],
  },
  {
    title: "Enterprise",
    desc: "For large enterprises",
    monthlyPrice: "Custom pricing",
    yearlyPrice: "Custom pricing",
    isMostPopular: false,
    shortSubList: [
      {
        data: "Unlimited",
        title: "items",
      },
      {
        data: "Unlimited",
        title: "items",
      },
      {
        data: "10+",
        title: "User License",
      },
      {
        data: "10+",
        title: "Inventory Location",
      },
    ],
  },
];

export default plans;
