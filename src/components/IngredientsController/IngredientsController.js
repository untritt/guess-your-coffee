import React from "react";
import { Ingredient } from "../Ingredient";

export const IngredientsController = ({
  children: ingredients,
  selectedIngredients
}) =>
  ingredients && ingredients.length !== 0 ? (
    <fieldset>
      <legend>Add something to your cup:</legend>

      {[...ingredients.keys()].map(ingredientKey => {
        const ingredient = ingredients.get(ingredientKey);
        return (
          <Ingredient
            key={ingredientKey}
            value={ingredientKey}
            selected={selectedIngredients.has(ingredient)}
            name="ingredientElements"
          >
            {ingredient.name}
          </Ingredient>
        );
      })}
    </fieldset>
  ) : null;
