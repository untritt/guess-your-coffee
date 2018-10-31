import React from "react";
import { Content } from "../Content";
import { Overlay } from "../Overlay";

export const BeverageCard = ({ beverage, highlightedIngredients }) => (
  <div>
    <Content beverage={beverage} />
    <Overlay content={beverage.details} />
  </div>
);
