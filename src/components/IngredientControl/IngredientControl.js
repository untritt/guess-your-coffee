import React from "react";

import { IngredientBadge } from "../IngredientBadge";

export const IngredientControl = ({
  ingredient: { id, name },
  controllerName,
  selected
}) => (
  <label>
    <input
      type="checkbox"
      name={controllerName}
      value={id}
      checked={selected}
      readOnly
    />
    <IngredientBadge title={name} highlighted={selected} />
  </label>
);
