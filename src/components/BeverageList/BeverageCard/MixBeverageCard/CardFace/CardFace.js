import React from "react";
import { Picture } from "../../Picture";
import { Badge } from "../../Badge";

export const CardFace = ({ source: { name, img, details, ingredients } }) => (
  <div>
    <Picture title={name} source={img} />
    <ul>
      {[...ingredients].map(ingredient => (
        <Badge key={ingredient.id} source={ingredient} />
      ))}
    </ul>
  </div>
);
