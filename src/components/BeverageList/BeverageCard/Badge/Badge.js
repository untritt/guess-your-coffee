import React from "react";
import cn from "classnames";

export const Badge = ({ source: ingredient, highlightedIngredients }) => (
  <li
    className={cn({
      IngredientBadge: true,
      "IngredientBadge--checked": highlightedIngredients.has(ingredient)
    })}
  >
    {ingredient.name}
  </li>
);
