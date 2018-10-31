import React from "react";

export const Overlay = ({ content }) => (
  <div>
    <div>Bottom layer</div>
    <p>{content ? content : "Details in digest will be updated soon"}</p>
  </div>
);
