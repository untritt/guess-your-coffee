import React from "react";

export const IngredientsController = ({
  name: controllerName,
  onChange,
  children: controls
}) => {
  return React.Children.count(controls) !== 0 ? (
    <form onChange={onChange}>
      <p>Provide present ingredients and</p>
      <h1>Guess name of your coffee</h1>
      <div>
        {React.Children.map(controls, control =>
          React.cloneElement(control, { controllerName })
        )}
      </div>
    </form>
  ) : null;
};
