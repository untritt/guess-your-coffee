import React from "react";

export const Badges = ({ content: ingredients }) => (
  <ul>
    {[...ingredients].map(ingredient => (
      <li>{ingredient.name}</li>
    ))}
  </ul>
);
