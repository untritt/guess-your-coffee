import React from "react";

export const BeveragesMap = ({ children: beverages }) => {
  return React.Children.count(beverages) !== 0 ? (
    <section>{beverages}</section>
  ) : null;
};
