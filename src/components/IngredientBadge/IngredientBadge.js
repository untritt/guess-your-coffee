import React from "react";
import cn from "classnames";

export const IngredientBadge = ({ title, highlighted = false }) => (
  <span className={cn({ label: true, "label-info": highlighted })}>
    {title}
  </span>
);
