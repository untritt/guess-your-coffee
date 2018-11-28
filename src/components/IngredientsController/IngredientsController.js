import React from "react";
import { IngredientControl } from "../IngredientsController/IngredientControl";

export const IngredientsController = ({
  name,
  onChange,
  ingredients,
  selectedIngredients
}) => (
  <form onChange={onChange}>
    <ul>
      {ingredients.size !== 0
        ? [...ingredients].map(ingredient => (
            <IngredientControl
              key={ingredient.id}
              ingredient={ingredient}
              controllerName={name}
              selected={selectedIngredients.has(ingredient)}
            />
          ))
        : null}
    </ul>
  </form>
);
