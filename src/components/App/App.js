import React, { Component } from "react";
import { bases, beverages, ingredients } from "../../digest";
import { BaseController } from "../BaseController";
import { IngredientsController } from "../IngredientsController";
import { BeveragesMap } from "../BeveragesMap";
import "./App.css";

export class App extends Component {
  state = {
    selectedBase: bases.get("espresso"),
    selectedIngredients: new Set()
  };

  onFormChange = ({
    currentTarget: {
      elements: {
        baseElements: { value: selectedBaseKey },
        ingredientElements
      }
    },
    target: { name: targetElements }
  }) => {
    switch (targetElements) {
      case "baseElements":
        const selectedBase = bases.get(selectedBaseKey);

        this.setState({ selectedBase });
        break;

      case "ingredientElements":
        const selectedIngredients = [...ingredientElements].reduce(
          (selectedIngredients, { checked, value: ingredientKey }) =>
            checked
              ? new Set([
                  ...selectedIngredients,
                  ingredients.get(ingredientKey)
                ])
              : selectedIngredients,
          new Set()
        );
        this.setState({ selectedIngredients });
        break;

      default:
        break;
    }
  };

  render() {
    return (
      <React.Fragment>
        <form className="controller" onChange={this.onFormChange}>
          <BaseController selectedBase={this.state.selectedBase}>
            {bases}
          </BaseController>
          <IngredientsController
            selectedIngredients={this.state.selectedIngredients}
          >
            {ingredients}
          </IngredientsController>
        </form>
        <BeveragesMap
          selectedIngredients={this.state.selectedIngredients}
          selectedBase={this.state.selectedBase}
        >
          {beverages}
        </BeveragesMap>
      </React.Fragment>
    );
  }
}
