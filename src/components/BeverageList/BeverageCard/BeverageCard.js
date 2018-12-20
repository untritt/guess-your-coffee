import React from "react";
import { MixBeverageCard } from "./MixBeverageCard";
import { PureBeverageCard } from "./PureBeverageCard";

export const BeverageCard = ({ beverage: { type, ...beverage } }) =>
  type !== "pure" ? (
    <MixBeverageCard beverage={beverage} />
  ) : (
    <PureBeverageCard beverage={beverage} />
  );
