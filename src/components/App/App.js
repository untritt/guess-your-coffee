import React, { Component } from "react";
import { bases, beverages, ingredients } from "../../digest";
import { BaseController } from "../BaseController";
import { IngredientsController } from "../IngredientsController";
import { BeveragesMap } from "../BeveragesMap";
import "./App.css";

export class App extends Component {
  state = { base: bases.get("espresso"), ingredients: new Set() };

  onFormChange = ({
    currentTarget: {
      elements: {
        selectedBase: { value: selectedBase }
      }
    }
  }) => {
    this.setState({
      base: bases.get(selectedBase)
    });
  };

  render() {
    return (
      <React.Fragment>
        <form className="controller" onChange={this.onFormChange}>
          <BaseController selectedBase={this.state.base}>
            {bases}
          </BaseController>
          <IngredientsController selectedIngredients={this.state.ingredients}>
            {ingredients}
          </IngredientsController>
        </form>
        <BeveragesMap
          selectedIngredients={this.state.ingredients}
          selectedBase={this.state.base}
        >
          {beverages}
        </BeveragesMap>
      </React.Fragment>
    );
  }
}
