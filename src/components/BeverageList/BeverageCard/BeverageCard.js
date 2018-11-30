import React from "react";
import { MixBeverageCard } from "./MixBeverageCard";
import { PureBeverageCard } from "./PureBeverageCard";

export const BeverageCard = ({
  beverage: { type, ...beverage },
  highlightedIngredients
}) =>
  type !== "pure" ? (
    <MixBeverageCard
      beverage={beverage}
      highlightedIngredients={highlightedIngredients}
    />
  ) : (
    <PureBeverageCard beverage={beverage} />
  );
