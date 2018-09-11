import React from "react";

export const BaseController = ({ children: bases, selectedBase }) =>
  bases && bases.length !== 0 ? (
    <fieldset className="baseController">
      <legend>Choose your beverage base:</legend>
      {Object.keys(bases).map(base => (
        <div className="baseInput" key={base} />
      ))}
    </fieldset>
  ) : null;
