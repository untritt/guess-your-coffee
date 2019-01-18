import React from "react";
import { BeverageCard } from "./BeverageCard";

export const BeverageList = ({ visibleBeverages }) =>
  visibleBeverages.map(({ id, ...beverage }) => (
    <BeverageCard key={id} beverage={beverage} />
  ));
