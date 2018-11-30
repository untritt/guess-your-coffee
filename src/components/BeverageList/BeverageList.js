import React from "react";
import { BeverageCard } from "./BeverageCard";

export const BeverageList = ({
  source: selectedbeverages,
  highlightedIngredients
}) =>
  [...selectedbeverages].map(({ id, ...beverage }) => (
    <BeverageCard
      key={id}
      beverage={beverage}
      highlightedIngredients={highlightedIngredients}
    />
  ));
