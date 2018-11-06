import React from "react";
import cn from "classnames";

export const Badges = ({ source: ingredients, highlightedIngredients }) => (
  <ul>
    {[...ingredients].map(ingredient => (
      <li
        className={cn({
          IngredientBadge: true,
          "IngredientBadge--checked": highlightedIngredients.has(ingredient)
        })}
        key={ingredient.id}
      >
        {ingredient.name}
      </li>
    ))}
  </ul>
);
