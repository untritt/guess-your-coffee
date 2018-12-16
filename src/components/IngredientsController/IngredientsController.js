import React from "react";
import { IngredientControl } from "../IngredientsController/IngredientControl";

export const IngredientsController = ({
  visibleIngredientControls,
  onToggleIngredientControl
}) => (
  <ul>
    {visibleIngredientControls.map(({ id, name, selected }) => (
      <IngredientControl
        key={id}
        name={name}
        selected={selected}
        onToggle={() => onToggleIngredientControl(id)}
      />
    ))}
  </ul>
);
