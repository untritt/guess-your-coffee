import React from "react";

export const Beverage = ({ children: beverage }) => (
  <div>
    <label>This is {beverage.name}</label>
    <ul>
      It's made with:
      {[...beverage.ingredients].map((ingredient, index) => {
        return <li key={index}>{ingredient.name}</li>;
      })}
    </ul>
  </div>
);
