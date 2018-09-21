import React from "react";
import { ingredients } from "../../digest";

export const IngredientsController = ({
  name: controllerName,
  onChange,
  children
}) => {
  return ingredients && ingredients.length !== 0 ? (
    <form className="controller" onChange={onChange}>
      <fieldset>
        <legend>Select preffered ingredients:</legend>
        {React.Children.map(children, controlEl =>
          React.cloneElement(controlEl, { controllerName })
        )}
      </fieldset>
    </form>
  ) : null;
};
