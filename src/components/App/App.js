import React, { Component } from "react";
import { beverages, ingredients } from "../../digest";
import { IngredientsController } from "../IngredientsController";
import { BeveragesMap } from "../BeveragesMap";
import "./App.css";

export class App extends Component {
  state = {
    selectedIngredients: new Set()
  };

  onFormChange = ({
    currentTarget: {
      elements: { ingredientElements }
    }
  }) => {
    const selectedIngredients = [...ingredientElements].reduce(
      (selectedIngredients, { checked, value: ingredientKey }) =>
        checked
          ? new Set([...selectedIngredients, ingredients.get(ingredientKey)])
          : selectedIngredients,
      new Set()
    );
    this.setState({ selectedIngredients });
  };

  render() {
    return (
      <React.Fragment>
        <form className="controller" onChange={this.onFormChange}>
          <IngredientsController
            selectedIngredients={this.state.selectedIngredients}
          >
            {ingredients}
          </IngredientsController>
        </form>
        <BeveragesMap selectedIngredients={this.state.selectedIngredients}>
          {beverages}
        </BeveragesMap>
      </React.Fragment>
    );
  }
}
