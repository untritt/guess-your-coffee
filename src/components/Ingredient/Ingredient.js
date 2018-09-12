import React from "react";

export const Ingredient = ({
  children: ingredientName,
  selected,
  name,
  value
}) => (
  <label>
    <input
      type="checkbox"
      name={name}
      value={value}
      checked={selected}
      readOnly
    />
    {ingredientName}
  </label>
);
