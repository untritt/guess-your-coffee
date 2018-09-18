import React from "react";
import { Beverage } from "../Beverage";

export const BeveragesMap = ({ children: beverages }) => {
  return beverages && beverages.length !== 0 ? (
    <section>
      {[...beverages.keys()].map(beverageKey => {
        const beverage = beverages.get(beverageKey);
        return <Beverage key={beverageKey}>{beverage}</Beverage>;
      })}
    </section>
  ) : null;
};
