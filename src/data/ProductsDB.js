/* 

   DATABASE= 

1_ module.exports
2_ require('ProductsDB');

*/

const Products = {
  helmets: {
    asian_flow: {
      id: "Asian Flow",
      size: "Small",
      origin: "India",
      price: 0.5,
      img: "../images/medieval-fair/helmets/asian-flow.png",
    },
    audette_ops: {
      id: "Audette Ops",
      size: "Large",
      origin: "France",
      price: 0.3,
      img: "../images/medieval-fair/helmets/audette_ops.png",
    },
    augustus_helm: {
      id: "Augustus Helm",
      size: "Medium",
      origin: "England",
      price: 0.7,
      img: "../images/medieval-fair/helmets/augusts-helm.png",
    },
    gladiator: {
      id: "Asian Flow",
      size: "Small",
      origin: "Persia",
      price: 1.2,
      img: "../images/medieval-fair/helmets/gladiator.png",
    },
    gods_dead: {
      id: "God's Dead",
      size: "Medium",
      origin: "Spain",
      price: 0.4,
      img: "../images/medieval-fair/helmets/gods-dead.png",
    },
    holy_wings: {
      id: "Holy Wings",
      size: "Small",
      origin: "Portugal",
      price: 1.2,
      img: "../images/medieval-fair/helmets/holy-wings.png",
    },
    horny_king: {
      id: "Horny King",
      size: "X-Large",
      origin: "Spain",
      price: 0.8,
      img: "../images/medieval-fair/helmets/horny-king.png",
    },
    pigface_bascinet: {
      id: "Pigface Bascinet",
      size: "Small",
      origin: "Turkey",
      price: 0.5,
      img: "../images/medieval-fair/helmets/pigface-bascinet.png",
    },
    swift_destroyer: {
      id: "Swift Destroyer",
      size: "Small",
      origin: "Sweden",
      price: 0.4,
      img: "../images/medieval-fair/helmets/swift-destroyer.png",
    },
    trojan_rise: {
      id: "Trojan Rise",
      size: "Large",
      origin: "Turkey",
      price: 1.1,
      img: "../images/medieval-fair/helmets/trojan-rise.png",
    },
  },
  weapons: {},
};

module.exports = Products;
