import React from "react";
import { Overlay } from "../Overlay";
import { CardFace } from "./CardFace";

export const MixBeverageCard = ({ beverage }, onHover) => (
  <div>
    <CardFace source={beverage} />
    <Overlay content={beverage.details} />
  </div>
);
