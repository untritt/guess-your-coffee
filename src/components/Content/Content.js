import React from "react";
import { Overlay } from "../Overlay";
import { Badges } from "../Badges";

export const Content = ({
  beverage: { name, type, ingredients, img, details }
}) => (
  <React.Fragment>
    <figure>
      <img src={img} alt={name} />
      <figcaption>{name}</figcaption>
    </figure>
    {type === "pure" ? (
      <p>{details ? details : "Details in digest will be updated soon"}</p>
    ) : (
      <React.Fragment>
        <Badges content={ingredients} />
        <Overlay content={details} />
      </React.Fragment>
    )}
  </React.Fragment>
);
