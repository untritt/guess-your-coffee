import { ingredients } from "./ingredients";
import * as images from "./images";

export const beverages = [
  {
    id: "espresso",
    type: "pure",
    name: "Espresso",
    img: images.espresso,
    details:
      "is a full-flavored, concentrated form of coffee that is served in “shots.” It is made by forcing pressurized, hot water through very finely ground coffee beans."
  },
  {
    id: "ristretto",
    type: "pure",
    name: "Ristretto",
    img: images.ristretto,
    details: ""
  },
  {
    id: "latte",
    type: "mix",
    name: "Latte",
    ingredients: [ingredients["foamedMilk"], ingredients["steamedMilk"]],
    img: images.latte,
    details: ""
  },
  {
    id: "americano",
    type: "mix",
    name: "Americano",
    ingredients: [ingredients["hotWater"]],
    img: images.americano,
    details: ""
  },
  {
    id: "longBlack",
    type: "mix",
    name: "Long Black",
    ingredients: [ingredients["hotWater"]],
    img: "",
    details: ""
  },
  {
    id: "doppio",
    type: "pure",
    name: "Doppio",
    ingredients: [],
    img: images.doppio,
    details: ""
  },
  {
    id: "cappuccino",
    type: "mix",
    name: "Cappuccino",
    ingredients: [ingredients["foamedMilk"], ingredients["steamedMilk"]],
    img: images.cappuccino,
    details: ""
  },
  {
    id: "affogato",
    type: "mix",
    name: "Affogato",
    ingredients: [ingredients["iceCream"]],
    img: images.affogato,
    details: ""
  },
  {
    id: "mocha",
    type: "mix",
    name: "Mocha",
    ingredients: [ingredients["steamedMilk"], ingredients["chocolate"]],
    img: images.mocha,
    details: ""
  },
  {
    id: "blackEye",
    type: "mix",
    name: "Black Eye",
    ingredients: [ingredients["brewedCoffee"]],
    img: "",
    details: ""
  },
  {
    id: "macchiato",
    type: "mix",
    name: "Macchiato",
    ingredients: [ingredients["foamedMilk"]],
    img: images.macchiato,
    details: ""
  },
  {
    id: "galao",
    type: "mix",
    name: "Galao",
    ingredients: [ingredients["foamedMilk"]],
    img: "",
    details: ""
  },
  {
    id: "conPanna",
    type: "mix",
    name: "Con Panna",
    ingredients: [ingredients["whippedCream"]],
    img: images.conPanna,
    details: ""
  },
  {
    id: "flatWhite",
    type: "mix",
    name: "Flat White",
    ingredients: [ingredients["steamedMilk"]],
    img: images.flatWhite,
    details: ""
  },
  {
    id: "marocchino",
    type: "mix",
    name: "Marocchino",
    ingredients: [ingredients["chocolate"], ingredients["foamedMilk"]],
    img: "",
    details: ""
  }
];
