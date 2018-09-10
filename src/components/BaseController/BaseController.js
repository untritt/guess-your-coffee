import React, { Component } from "react";

export const BaseController = ({ children: bases, selectedBase }) => (
  <form className="baseController">
    {Object.keys(bases).map(base => (
      <div className="baseInput" key={base} />
    ))}
  </form>
);
