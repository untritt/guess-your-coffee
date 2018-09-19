import React from "react";

export const Beverage = ({ children: { name, ingredients, img, details } }) => (
  <figure>
    <ul>
      It's made with:
      {[...ingredients].map((ingredient, index) => {
        return <li key={index}>{ingredient.name}</li>;
      })}
    </ul>
    <img src={img} alt={name} />
    <figcaption>{name}</figcaption>
  </figure>
);
