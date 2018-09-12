import { bases } from "./bases";
import { ingredients } from "./ingredients";

export const beverages = new Map([
  [
    "latte",
    {
      name: "Latte",
      base: bases.get("doppio"),
      ingredients: new Set([
        ingredients.get("foamedMilk"),
        ingredients.get("steamedMilk")
      ]),
      img: "",
      details: ""
    }
  ],
  [
    "americano",
    {
      name: "Americano",
      base: bases.get("doppio"),
      ingredients: new Set([ingredients.get("hotWater")]),
      img: "",
      details: ""
    }
  ]
]);
