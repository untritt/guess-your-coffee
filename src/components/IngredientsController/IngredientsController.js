import React from "react";
import { IngredientControl } from "../IngredientsController/IngredientControl";

export const IngredientsController = ({
  visibleIngredients,
  onToggleIngredient
}) => (
  <ul>
    {visibleIngredients.map(({ id, name, selected }) => (
      <IngredientControl
        key={id}
        name={name}
        selected={selected}
        onClick={() => onToggleIngredient(id)}
      />
    ))}
  </ul>
);
