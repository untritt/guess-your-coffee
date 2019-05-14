import React from "react";
import { IngredientControl } from "../IngredientsController/IngredientControl";

export const IngredientsController = ({ ingredients, onToggleIngredient }) => (
  <ul>
    {ingredients.map(({ id, name, selected, enabled }) => (
      <IngredientControl
        key={id}
        name={name}
        selected={selected}
        enabled={enabled}
        onClick={() => onToggleIngredient(id)}
      />
    ))}
  </ul>
);
