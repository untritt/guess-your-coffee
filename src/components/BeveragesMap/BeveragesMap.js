import React from "react";

export const BeveragesMap = ({
  children: beverages,
  selectedIngredients,
  selectedBase
}) => (beverages && beverages.length !== 0 ? <section /> : null);
