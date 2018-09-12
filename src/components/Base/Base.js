import React from "react";

export const Base = ({ children: baseName, selected, name, value }) => (
  <label>
    <input
      type="radio"
      name={name}
      value={value}
      checked={selected}
      readOnly={true}
    />
    {baseName}
  </label>
);
