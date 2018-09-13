import { ingredients } from "./ingredients";

export const beverages = new Map([
  [
    "espresso",
    {
      name: "Espresso",
      ingredients: new Set(),
      img: "",
      details: ""
    }
  ],
  [
    "latte",
    {
      name: "Latte",
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
      ingredients: new Set([ingredients.get("hotWater")]),
      img: "",
      details: ""
    }
  ],
  [
    "longBlack",
    {
      name: "Long Black",
      ingredients: new Set([ingredients.get("hotWater")]),
      img: "",
      details: ""
    }
  ],
  [
    "doppio",
    {
      name: "Doppio",
      ingredients: new Set([]),
      img: "",
      details: ""
    }
  ],
  [
    "cappuccino",
    {
      name: "Cappuccino",
      ingredients: new Set([
        ingredients.get("foamedMilk"),
        ingredients.get("steamedMilk")
      ]),
      img: "",
      details: ""
    }
  ],
  [
    "affogato",
    {
      name: "Affogato",
      ingredients: new Set([ingredients.get("iceCream")]),
      img: "",
      details: ""
    }
  ],
  [
    "mocha",
    {
      name: "Mocha",
      ingredients: new Set([
        ingredients.get("steamedMilk"),
        ingredients.get("chocolate")
      ]),
      img: "",
      details: ""
    }
  ],
  [
    "blackEye",
    {
      name: "Black Eye",
      ingredients: new Set([ingredients.get("brewedCoffee")]),
      img: "",
      details: ""
    }
  ],
  [
    "macchiato",
    {
      name: "Macchiato",
      ingredients: new Set([ingredients.get("foamedMilk")]),
      img: "",
      details: ""
    }
  ],
  [
    "galao",
    {
      name: "Galao",
      ingredients: new Set([ingredients.get("foamedMilk")]),
      img: "",
      details: ""
    }
  ],
  [
    "conPanna",
    {
      name: "Con Panna",
      ingredients: new Set([ingredients.get("whippedCream")]),
      img: "",
      details: ""
    }
  ],
  [
    "flatWhite",
    {
      name: "Flat White",
      ingredients: new Set([ingredients.get("steamedMilk")]),
      img: "",
      details: ""
    }
  ],
  [
    "marocchino",
    {
      name: "Marocchino",
      ingredients: new Set([
        ingredients.get("chocolate"),
        ingredients.get("foamedMilk")
      ]),
      img: "",
      details: ""
    }
  ]
]);
