import React from "react";
import { BeverageCard } from "./BeverageCard";

export const BeverageList = ({ visibleBeverages, onHoverBeverageCard }) =>
  visibleBeverages.map(({ id, ...beverage }) => (
    <BeverageCard
      key={id}
      beverage={beverage}
      onHover={() => onHoverBeverageCard(id)}
    />
  ));
