import React from "react";

import { IngredientBadge } from "../IngredientBadge";

export const BeverageCard = ({
  beverage: { name, ingredients, img, details },
  highlightedIngredients
}) => (
  <figure>
    {ingredients.length !== 0 ? (
      <ul>
        {[...ingredients].map(ingredient => {
          return (
            <IngredientBadge
              key={ingredient.id}
              title={ingredient.name}
              highlighted={highlightedIngredients.has(ingredient)}
            />
          );
        })}
      </ul>
    ) : null}
    <img src={img} alt={name} />
    <figcaption>{name}</figcaption>
  </figure>
);
