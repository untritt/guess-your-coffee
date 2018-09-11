import { bases } from "./bases";
import { ingredients } from "./ingredients";

export const beverages = new Map([
  [
    "latte",
    {
      name: "Latte",
      base: bases.doppio,
      ingredients: [ingredients.foamedMilk, ingredients.steamedMilk],
      img: "",
      details: ""
    }
  ],
  [
    "americano",
    {
      name: "Americano",
      base: bases.doppio,
      ingredients: [ingredients.hotWater],
      img: "",
      details: ""
    }
  ]
]);
