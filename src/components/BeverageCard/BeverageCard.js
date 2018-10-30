import React from "react";

export const BeverageCard = ({
  beverage: { name, type, ingredients, img, details },
  highlightedIngredients
}) => (
  <div>
    <figure>
      <img src={img} alt={name} />
      <figcaption>{name}</figcaption>
    </figure>
    {type !== "pure" ? (
      <ul>
        {[...ingredients].map(ingredient => {
          return <li>{ingredient.name}</li>;
        })}
      </ul>
    ) : null}
    {type !== "pure" ? <div>Overlay</div> : null}
    <p>{details ? details : "Details in digest will be updated soon"}</p>
  </div>
);
