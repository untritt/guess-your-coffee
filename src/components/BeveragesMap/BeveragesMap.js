import React from "react";

export const BeveragesMap = ({ children: beverages }) => {
  return React.children.count(beverages) !== 0 ? (
    <section>{beverages}</section>
  ) : null;
};
