/*                                             |

·  ---------------- DATABASE ----------------  ·

|                                              */

const Products = [
  {
    id: 1,
    type: "helmets",
    name: "Asian Flow",
    size: "Small",
    origin: "India",
    price: 0.5,
    img: "helmets/asian-flow.png",
    category: "Helmet",
    description:
      "Favoured among combat pures for being the lowest level headgear to offer a great defense.",
    quantity: 25,
    rating: 3.5,
  },
  {
    id: 2,
    type: "helmets",
    name: "Audette Ops",
    size: "Large",
    origin: "France",
    price: 0.3,
    img: "helmets/audette_ops.png",
    category: "Helmet",
    description: "The metal purity that characterizes French defense gear.",
    quantity: 25,
    rating: 4.5,
  },
  {
    id: 3,
    type: "Helmets",
    name: "Augustus Helm",
    size: "Medium",
    origin: "England",
    price: 0.7,
    img: "helmets/augusts-helm.png",
    category: "Helmet",
    description:
      "There's a long tradition within the mystical traditions to carry the Augustus force with them.",
    quantity: 25,
    rating: 5,
  },
  {
    id: 4,
    type: "helmets",
    name: "Persian Gladiator",
    size: "Small",
    origin: "Persia",
    price: 1.2,
    img: "helmets/gladiator.png",
    category: "Helmet",
    description: "For real warriors.",
    stock: 25,
    rating: 7,
  },
  {
    id: 5,
    type: "helmets",
    name: "God's Dead",
    size: "Medium",
    origin: "Spain",
    price: 0.4,
    img: "helmets/gods-dead.png",
    category: "Helmet",
    description: "Provocative, and full scope defense gear.",
    quantity: 25,
    rating: 4,
  },
  {
    id: 6,
    type: "helmets",
    name: "Holy Wings",
    size: "Small",
    origin: "Portugal",
    price: 1.2,
    img: "helmets/holy-wings.png",
    category: "Helmet",
    description: "Stylish gear for brave fighters.",
    rating: 4.7,
  },
  {
    id: 7,
    type: "helmets",
    name: "Horny King",
    size: "X-Large",
    origin: "Spain",
    price: 0.8,
    img: "helmets/horny-king.png",
    category: "Helmet",
    description:
      "The Horny King was designed in special days. No further comment.",
    quantity: 25,
    rating: 5,
  },
  {
    id: 8,
    type: "helmets",
    name: "Pigface Bascinet",
    size: "Small",
    origin: "Turkey",
    price: 0.5,
    img: "helmets/pigface-bascinet.png",
    category: "Helmet",
    description: "Strong metals that can only be wield by the strongest.",
    quantity: 25,
    rating: 4.5,
  },
  {
    id: 9,
    type: "helmets",
    name: "Swift Destroyer",
    size: "Small",
    origin: "Sweden",
    price: 0.4,
    img: "helmets/swift-destroyer.png",
    category: "Helmet",
    description: "",
    quantity: 25,
    rating: 5,
  },
  {
    id: 10,
    type: "helmets",
    name: "Trojan Rise",
    size: "Large",
    origin: "Turkey",
    price: 1.1,
    img: "helmets/trojan-rise.png",
    category: "Helmet",
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
    category: "Battleaxe",
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
    category: "Mace",
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
    category: "Scimitar",
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
    category: "Longsword",
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
    category: "Mace",
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
    category: "Dagger",
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
    category: "Spear",
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
    category: "Spearaxe",
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
    category: "Warhammer",
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
    category: "Spear",
    img: "weapons/swiss-spear.png",
    rating: 4,
  },
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
