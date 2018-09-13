import React from "react";
import { Beverage } from "../Beverage";

const beverageHasIngredients = ({ ingredients }, selectedIngredients) =>
  [...selectedIngredients].filter(ingredient => ingredients.has(ingredient))
    .length === selectedIngredients.size;

const findCustomBeverages = (beverages, selectedIngredients) =>
  new Map(
    [...beverages.entries()].filter(
      ([key, beverage]) =>
        selectedIngredients.size > 0
          ? beverageHasIngredients(beverage, selectedIngredients)
          : beverage.ingredients.size === 0
    )
  );

export const BeveragesMap = ({ children: beverages, selectedIngredients }) => {
  const foundBevarages = findCustomBeverages(beverages, selectedIngredients);

  return foundBevarages && foundBevarages.length !== 0 ? (
    <section>
      {[...foundBevarages.keys()].map(beverageKey => {
        const beverage = foundBevarages.get(beverageKey);
        return <Beverage key={beverageKey}>{beverage}</Beverage>;
      })}
    </section>
  ) : null;
};
