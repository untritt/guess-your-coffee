import React from "react";
import { Ingredient } from "../Ingredient";
import { ingredients } from "../../digest";

export const IngredientsController = ({
  selectedIngredients,
  assembledIngredients,
  onChange
}) => {
  return ingredients && ingredients.length !== 0 ? (
    <form className="controller" onChange={onChange}>
      <fieldset>
        <legend>Add something to your cup:</legend>

        {[...ingredients.keys()].map(ingredientKey => {
          const ingredient = ingredients.get(ingredientKey);
          return (
            <Ingredient
              key={ingredientKey}
              value={ingredientKey}
              selected={selectedIngredients.has(ingredient)}
              hidden={!assembledIngredients.has(ingredient)}
              name="ingredientElements"
            >
              {ingredient.name}
            </Ingredient>
          );
        })}
      </fieldset>
    </form>
  ) : null;
};
