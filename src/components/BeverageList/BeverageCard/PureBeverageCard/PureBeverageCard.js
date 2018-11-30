import React from "react";
import { Picture } from "../Picture";
import { Description } from "../Description";

export const PureBeverageCard = ({ beverage: { name, img, details } }) => (
  <div>
    <Picture title={name} source={img} />
    <Description content={details} />
  </div>
);
