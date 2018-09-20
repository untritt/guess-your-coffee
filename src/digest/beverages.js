import { ingredients } from "./ingredients";
import * as images from "./images";

export const beverages = new Map([
  [
    "espresso",
    {
      id: "espresso",
      name: "Espresso",
      ingredients: new Set(),
      img: images.espresso,
      details:
        "is a full-flavored, concentrated form of coffee that is served in “shots.” It is made by forcing pressurized, hot water through very finely ground coffee beans."
    }
  ],
  [
    "ristretto",
    {
      id: "ristretto",
      name: "Ristretto",
      ingredients: new Set(),
      img: images.ristretto,
      details: ""
    }
  ],
  [
    "latte",
    {
      id: "latte",
      name: "Latte",
      ingredients: new Set([
        ingredients.get("foamedMilk"),
        ingredients.get("steamedMilk")
      ]),
      img: images.latte,
      details: ""
    }
  ],
  [
    "americano",
    {
      id: "americano",
      name: "Americano",
      ingredients: new Set([ingredients.get("hotWater")]),
      img: images.americano,
      details: ""
    }
  ],
  [
    "longBlack",
    {
      id: "longBlack",
      name: "Long Black",
      ingredients: new Set([ingredients.get("hotWater")]),
      img: "",
      details: ""
    }
  ],
  [
    "doppio",
    {
      id: "doppio",
      name: "Doppio",
      ingredients: new Set([]),
      img: images.doppio,
      details: ""
    }
  ],
  [
    "cappuccino",
    {
      id: "cappuccino",
      name: "Cappuccino",
      ingredients: new Set([
        ingredients.get("foamedMilk"),
        ingredients.get("steamedMilk")
      ]),
      img: images.cappuccino,
      details: ""
    }
  ],
  [
    "affogato",
    {
      id: "affogato",
      name: "Affogato",
      ingredients: new Set([ingredients.get("iceCream")]),
      img: images.affogato,
      details: ""
    }
  ],
  [
    "mocha",
    {
      id: "mocha",
      name: "Mocha",
      ingredients: new Set([
        ingredients.get("steamedMilk"),
        ingredients.get("chocolate")
      ]),
      img: images.mocha,
      details: ""
    }
  ],
  [
    "blackEye",
    {
      id: "blackEye",
      name: "Black Eye",
      ingredients: new Set([ingredients.get("brewedCoffee")]),
      img: "",
      details: ""
    }
  ],
  [
    "macchiato",
    {
      id: "macchiato",
      name: "Macchiato",
      ingredients: new Set([ingredients.get("foamedMilk")]),
      img: images.macchiato,
      details: ""
    }
  ],
  [
    "galao",
    {
      id: "galao",
      name: "Galao",
      ingredients: new Set([ingredients.get("foamedMilk")]),
      img: "",
      details: ""
    }
  ],
  [
    "conPanna",
    {
      id: "conPanna",
      name: "Con Panna",
      ingredients: new Set([ingredients.get("whippedCream")]),
      img: images.conPanna,
      details: ""
    }
  ],
  [
    "flatWhite",
    {
      id: "flatWhite",
      name: "Flat White",
      ingredients: new Set([ingredients.get("steamedMilk")]),
      img: images.flatWhite,
      details: ""
    }
  ],
  [
    "marocchino",
    {
      id: "marocchino",
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
