import React from "react";
import { Beverage } from "../Beverage";

const beverageHasIngredients = ({ ingredients }, selectedIngredients) =>
  [...selectedIngredients].filter(ingredient => ingredients.has(ingredient))
    .length === selectedIngredients.size;

const findCustomBeverages = (beverages, selectedBase, selectedIngredients) =>
  new Map(
    [...beverages.entries()].filter(
      ([key, beverage]) =>
        beverage.base === selectedBase &&
        beverageHasIngredients(beverage, selectedIngredients)
    )
  );

export const BeveragesMap = ({
  children: beverages,
  selectedIngredients,
  selectedBase
}) => {
  const foundBevarages = findCustomBeverages(
    beverages,
    selectedBase,
    selectedIngredients
  );

  return foundBevarages && foundBevarages.length !== 0 ? (
    <section>
      {[...foundBevarages.keys()].map(beverageKey => {
        const beverage = foundBevarages.get(beverageKey);
        return <Beverage key={beverageKey}>{beverage}</Beverage>;
      })}
    </section>
  ) : null;
};
