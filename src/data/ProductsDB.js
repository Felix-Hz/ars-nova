/*                                             |

·  ---------------- DATABASE ----------------  ·

|                                              */

const Products = [
  {
    id: 1,
    type: "Helmets",
    name: "Asian Flow",
    size: "Small",
    origin: "India",
    price: 0.5,
    img: "helmets/asian-flow.png",
    category: "Helmet",
    description: "Favoured among combat pures for being the lowest level headgear to offer a great defense.",
    stock: 25,
    rating: 3.5
  },
  {
    id: 2,
    type: "Helmets",
    name: "Audette Ops",
    size: "Large",
    origin: "France",
    price: 0.3,
    img: "helmets/audette_ops.png",
    category: "Helmet",
    description: "The metal purity that characterizes French defense gear.",
    stock: 25,
    rating: 4.5
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
    description: "There's a long tradition within the mystical traditions to carry the Augustus force with them.",
    stock: 25,
    rating: 5
  },
  {
    id: 4,
    type: "Helmets",
    name: "Persian Gladiator",
    size: "Small",
    origin: "Persia",
    price: 1.2,
    img: "helmets/gladiator.png",
    category: "Helmet",
    description: "For real warriors.",
    stock: 25,
    rating: 7
  },
  {
    id: 5,
    type: "Helmets",
    name: "God's Dead",
    size: "Medium",
    origin: "Spain",
    price: 0.4,
    img: "helmets/gods-dead.png",
    category: "Helmet",
    description: "Provocative, and full scope defense gear.",
    stock: 25,
    rating: 4
  },
  {
    id: 6,
    type: "Helmets",
    name: "Holy Wings",
    size: "Small",
    origin: "Portugal",
    price: 1.2,
    img: "helmets/holy-wings.png",
    category: "Helmet",
    description: "Stylish gear for brave fighters.",
    rating: 4.7
  },
  {
    id: 7,
    type: "Helmets",
    name: "Horny King",
    size: "X-Large",
    origin: "Spain",
    price: 0.8,
    img: "helmets/horny-king.png",
    category: "Helmet",
    description: "The Horny King was designed in special days. No further comment.",
    stock: 25,
    rating: 5
  },
  {
    id: 8,
    type: "Helmets",
    name: "Pigface Bascinet",
    size: "Small",
    origin: "Turkey",
    price: 0.5,
    img: "helmets/pigface-bascinet.png",
    category: "Helmet",
    description: "Strong metals that can only be wield by the strongest.",
    stock: 25,
    rating: 4.5
  },
  {
    id: 9,
    type: "Helmets",
    name: "Swift Destroyer",
    size: "Small",
    origin: "Sweden",
    price: 0.4,
    img: "helmets/swift-destroyer.png",
    category: "Helmet",
    description: "",
    stock: 25,
    rating: 5
  },
  {
    id: 10,
    type: "Helmets",
    name: "Trojan Rise",
    size: "Large",
    origin: "Turkey",
    price: 1.1,
    img: "helmets/trojan-rise.png",
    category: "Helmet",
    description: "",
    stock: 25,
    rating: 4.7
  },

  {
    id: 11,
    type: "Weapons",
    name: "Abyssal Battleaxe",
    description: "",
    stock: 10,
    price: 0.7,
    category: "Battleaxe",
    type: "Swift",
    img: "weapons/battle-axe.png",
    rating: 4.2
  },
  {
    id: 12,
    type: "Weapons",
    name: "Christian Mace",
    description: "",
    stock: 10,
    price: 0.4,
    category: "Mace",
    type: "Heavy",
    img: "weapons/christian_mace.png",
    rating: 4.5
  },
  {
    id: 13,
    type: "Weapons",
    name: "Scimitar Skinned",
    description: "",
    stock: 10,
    price: 0.7,
    category: "Scimitar",
    type: "Lightweight",
    img: "weapons/scimitar-skinned.png",
    rating: 3.8
  },
  {
    id: 14,
    type: "Weapons",
    name: "Black Longsword",
    description: "",
    stock: 10,
    price: 1.2,
    category: "Longsword",
    type: "Heavy",
    img: "weapons/long_sword.png",
    rating: 4.4
  },
  {
    id: 15,
    type: "Weapons",
    name: "White Mace",
    description: "",
    stock: 10,
    price: 0.9,
    category: "Mace",
    type: "Swift",
    img: "weapons/mace.png",
    rating: 5
  },
  {
    id: 16,
    type: "Weapons",
    name: "Royal Dagger",
    description: "",
    stock: 10,
    price: 0.5,
    category: "Dagger",
    type: "Heavy",
    img: "weapons/royal_dagger.png",
    rating: 5
  },
  {
    id: 17,
    type: "Weapons",
    name: "Spanish Spear",
    description: "",
    stock: 10,
    price: 0.9,
    category: "Spear",
    type: "Average",
    img: "weapons/spanish_spear.png",
    rating: 3
  },
  {
    id: 18,
    type: "Weapons",
    name: "Defender Halberd",
    description: "",
    stock: 10,
    price: 0.7,
    category: "Spearaxe",
    type: "Swift",
    img: "weapons/spear-axe.png",
    rating: 3.5
  },
  {
    id: 19,
    type: "Weapons",
    name: "Warhammer Tower",
    description: "",
    stock: 10,
    price: 0.6,
    category: "Warhammer",
    type: "Heavy",
    img: "weapons/warhammer.png",
    rating: 5
  },
  {
    id: 20,
    type: "Weapons",
    name: "Swiss Spear",
    description: "",
    stock: 10,
    price: 0.7,
    category: "Spear",
    type: "Swift",
    img: "weapons/swiss-spear.png",
    rating: 4
  },
];

export const listProducts = () => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(Products);
    }, 500);
  });
};

export const getProduct = (id) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(Products.find(p => p.id === id));
    }, 500);
  });
};