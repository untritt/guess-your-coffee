import React from "react";

export const IngredientControl = ({ name, selected, enabled, onClick }) => (
  <li>
    <label>
      <input
        type="checkbox"
        checked={selected}
        disabled={!enabled}
        onClick={onClick}
        readOnly
      />
      {name}
    </label>
  </li>
);
