import React from "react";

export const Picture = ({ title, source }) => (
  <figure>
    <img src={source} alt={title} />
    <figcaption>{title}</figcaption>
  </figure>
);
