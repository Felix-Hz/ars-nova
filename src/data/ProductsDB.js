/*                                             |

·  ---------------- DATABASE ----------------  ·

|                                              */

const Products = [
  {
    id: 1,
    type: "helmets",
    name: "Asian Flow",
    price: 0.5,
    img: "helmets/asian-flow.png",
    description:
      "Favoured among combat pures for being the lowest level headgear to offer a great defense.",
    quantity: 25,
    rating: 3.5,
  },
  {
    id: 2,
    type: "helmets",
    name: "Audette Ops",
    price: 0.3,
    img: "helmets/audette_ops.png",
    description: "The metal purity that characterizes French defense gear.",
    quantity: 25,
    rating: 4.5,
  },
  {
    id: 3,
    type: "Helmets",
    name: "Augustus Helm",

    price: 0.7,
    img: "helmets/augusts-helm.png",

    description:
      "There's a long tradition within the mystical traditions to carry the Augustus force with them.",
    quantity: 25,
    rating: 5,
  },
  {
    id: 4,
    type: "helmets",
    name: "Persian Gladiator",

    price: 1.2,
    img: "helmets/gladiator.png",

    description: "For real warriors.",
    stock: 25,
    rating: 7,
  },
  {
    id: 5,
    type: "helmets",
    name: "God's Dead",

    price: 0.4,
    img: "helmets/gods-dead.png",

    description: "Provocative, and full scope defense gear.",
    quantity: 25,
    rating: 4,
  },
  {
    id: 6,
    type: "helmets",
    name: "Holy Wings",
    price: 1.2,
    img: "helmets/holy-wings.png",

    description: "Stylish gear for brave fighters.",
    rating: 4.7,
  },
  {
    id: 7,
    type: "helmets",
    name: "Horny King",

    price: 0.8,
    img: "helmets/horny-king.png",

    description:
      "The Horny King was designed in special days. No further comment.",
    quantity: 25,
    rating: 5,
  },
  {
    id: 8,
    type: "helmets",
    name: "Pigface Bascinet",

    price: 0.5,
    img: "helmets/pigface-bascinet.png",

    description: "Strong metals that can only be wield by the strongest.",
    quantity: 25,
    rating: 4.5,
  },
  {
    id: 9,
    type: "helmets",
    name: "Swift Destroyer",

    price: 0.4,
    img: "helmets/swift-destroyer.png",

    description: "",
    quantity: 25,
    rating: 5,
  },
  {
    id: 10,
    type: "helmets",
    name: "Trojan Rise",

    price: 1.1,
    img: "helmets/trojan-rise.png",

    description: "",
    quantity: 25,
    rating: 4.7,
  },

  {
    id: 11,
    type: "weapons",
    name: "Abyssal Battleaxe",
    description: "",
    quantity: 10,
    price: 0.7,

    img: "weapons/battle-axe.png",
    rating: 4.2,
  },
  {
    id: 12,
    type: "weapons",
    name: "Christian Mace",
    description: "",
    quantity: 10,
    price: 0.4,
    img: "weapons/christian_mace.png",
    rating: 4.5,
  },
  {
    id: 13,
    type: "weapons",
    name: "Scimitar Skinned",
    description: "",
    quantity: 10,
    price: 0.7,

    img: "weapons/scimitar-skinned.png",
    rating: 3.8,
  },
  {
    id: 14,
    type: "weapons",
    name: "Black Longsword",
    description: "",
    quantity: 10,
    price: 1.2,

    img: "weapons/long_sword.png",
    rating: 4.4,
  },
  {
    id: 15,
    type: "weapons",
    name: "White Mace",
    description: "",
    quantity: 10,
    price: 0.9,

    img: "weapons/mace.png",
    rating: 5,
  },
  {
    id: 16,
    type: "weapons",
    name: "Royal Dagger",
    description: "",
    quantity: 10,
    price: 0.5,

    img: "weapons/royal_dagger.png",
    rating: 5,
  },
  {
    id: 17,
    type: "weapons",
    name: "Spanish Spear",
    description: "",
    quantity: 10,
    price: 0.9,

    img: "weapons/spanish_spear.png",
    rating: 3,
  },
  {
    id: 18,
    type: "weapons",
    name: "Defender Halberd",
    description: "",
    quantity: 10,
    price: 0.7,

    img: "weapons/spear-axe.png",
    rating: 3.5,
  },
  {
    id: 19,
    type: "weapons",
    name: "Warhammer Tower",
    description: "",
    quantity: 10,
    price: 0.6,

    img: "weapons/warhammer.png",
    rating: 5,
  },
  {
    id: 20,
    type: "weapons",
    name: "Swiss Spear",
    description: "",
    quantity: 10,
    price: 0.7,

    img: "weapons/swiss-spear.png",
    rating: 4,
  },
  // {
  //   id: 00  ,
  //   type: "clothes",
  //   name: "",
  //   description: "",
  //   quantity: 10,
  //   price: 0.7,
  //   img: "weapons/swiss-spear.png",
  //   rating: 4,
  // },
  // {
  //   id: 00  ,
  //   type: "shields",
  //   name: "",
  //   description: "",
  //   quantity: 10,
  //   price: 0.7,
  //   img: "weapons/swiss-spear.png",
  //   rating: 4,
  // },
];

export const listProducts = () => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(Products);
    }, 500);
  });
};

export const productType = (type) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(Products.filter((p) => p.type === type));
    }, 250);
  });
};

export const getProduct = (id) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(Products.find((p) => p.id === id));
    }, 500);
  });
};
