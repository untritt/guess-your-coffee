import React from "react";
import { Base } from "../Base";

export const BaseController = ({ children: bases, selectedBase }) =>
  bases && bases.keys() !== 0 ? (
    <fieldset className="base-controller" id="base-controller">
      <legend>Choose your beverage base:</legend>
      {[...bases.keys()].map(baseKey => {
        const base = bases.get(baseKey);
        return (
          <Base
            key={baseKey}
            value={baseKey}
            selected={base === selectedBase}
            name="selectedBase"
          >
            {base.name}
          </Base>
        );
      })}
    </fieldset>
  ) : null;
