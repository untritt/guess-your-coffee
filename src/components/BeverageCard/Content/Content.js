import React from "react";
import { Badges } from "../Content/Badges";

export const Content = ({
  source: { name, type, ingredients, img, details, highlightedIngredients }
}) => (
  <React.Fragment>
    <figure>
      <img src={img} alt={name} />
      <figcaption>{name}</figcaption>
    </figure>
    {type === "pure" ? (
      <p>{details ? details : "Details in digest will be updated soon"}</p>
    ) : (
      <Badges
        source={ingredients}
        highlightedIngredients={highlightedIngredients}
      />
    )}
  </React.Fragment>
);
