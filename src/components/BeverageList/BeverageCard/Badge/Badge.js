import React from "react";
import cn from "classnames";

export const Badge = ({ source: ingredient }) => (
  <li
    className={cn({
      IngredientBadge: true,
      "IngredientBadge--checked": false
    })}
  >
    {ingredient.name}
  </li>
);
