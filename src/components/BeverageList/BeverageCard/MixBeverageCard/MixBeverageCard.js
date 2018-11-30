import React from "react";
import { Overlay } from "../Overlay";
import { CardFace } from "./CardFace";

export const MixBeverageCard = ({ beverage, highlightedIngredients }) => (
  <div>
    <CardFace
      source={beverage}
      highlightedIngredients={highlightedIngredients}
    />
    <Overlay content={beverage.details} />
  </div>
);
