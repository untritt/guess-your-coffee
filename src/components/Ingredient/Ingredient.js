import React from "react";

export const Ingredient = ({
  children: ingredientName,
  name,
  value,
  selected,
  hidden
}) => (
  <label hidden={hidden}>
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
