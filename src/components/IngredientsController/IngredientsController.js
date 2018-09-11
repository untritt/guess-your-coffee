import React from "react";

export const IngredientsController = ({
  children: ingredients,
  selectedIngredients
}) =>
  ingredients && ingredients.length !== 0 ? (
    <fieldset>
      <legend>Add something to your cup:</legend>
    </fieldset>
  ) : null;
