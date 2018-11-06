import React from "react";

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
    {name}
  </label>
);
