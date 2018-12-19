import React from "react";
import { MixBeverageCard } from "./MixBeverageCard";
import { PureBeverageCard } from "./PureBeverageCard";

export const BeverageCard = ({ beverage: { type, ...beverage }, onHover }) =>
  type !== "pure" ? (
    <MixBeverageCard beverage={beverage} onHover={onHover} />
  ) : (
    <PureBeverageCard beverage={beverage} />
  );
