import React from "react";

export const BaseController = ({ children: bases, selectedBase }) =>
  bases && bases.keys() !== 0 ? (
    <fieldset className="baseController">
      <legend>Choose your beverage base:</legend>
      {[...bases.keys()].map(base => (
        <div className="baseInput" key={base} />
      ))}
    </fieldset>
  ) : null;
