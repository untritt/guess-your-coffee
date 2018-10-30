import { ingredients } from "./ingredients";
import * as images from "./images";

export const beverages = new Map([
  [
    "espresso",
    {
      id: "espresso",
      type: "pure",
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
      type: "pure",
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
      type: "mix",
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
      type: "mix",
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
      type: "mix",
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
      type: "pure",
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
      type: "mix",
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
      type: "mix",
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
      type: "mix",
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
      type: "mix",
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
      type: "mix",
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
      type: "mix",
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
      type: "mix",
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
      type: "mix",
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
      type: "mix",
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
