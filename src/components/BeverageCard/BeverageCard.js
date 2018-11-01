import React from "react";
import { Content } from "./Content";
import { Overlay } from "./Overlay";

export const BeverageCard = ({ beverage, highlightedIngredients }) => (
  <div>
    <Content source={{ ...beverage, highlightedIngredients }} />
    {beverage.type !== "pure" ? <Overlay content={beverage.details} /> : null}
  </div>
);
