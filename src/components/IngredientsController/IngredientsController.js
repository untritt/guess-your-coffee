import React from "react";

export const IngredientsController = ({
  name: controllerName,
  onChange,
  children: controls
}) => {
  return React.Children.count(controls) !== 0 ? (
    <form className="controller" onChange={onChange}>
      <fieldset>
        <legend>Select preffered ingredients:</legend>
        {React.Children.map(controls, control =>
          React.cloneElement(control, { controllerName })
        )}
      </fieldset>
    </form>
  ) : null;
};
