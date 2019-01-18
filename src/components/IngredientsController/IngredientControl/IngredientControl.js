import React from "react";

export const IngredientControl = ({ name, selected, onClick }) => (
  <li>
    <label>
      <input type="checkbox" checked={selected} onClick={onClick} />
      {name}
    </label>
  </li>
);
