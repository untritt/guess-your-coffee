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
        selectedBase: { value: selectedBase },
        ingredientElements
      }
    },
    target: { name }
  }) => {
    //console.log(name);
    switch (name) {
      case "selectedBase":
        const base = bases.get(selectedBase);

        this.setState({ base });
        break;

      case "ingredientElements":
        const selectedIngredients = [...ingredientElements].reduce(
          (selectedIngredients, { checked, value }) =>
            checked
              ? new Set([...selectedIngredients, ingredients.get(value)])
              : selectedIngredients,
          new Set()
        );
        console.log(selectedIngredients);
        this.setState({ ingredients: selectedIngredients });
        break;

      default:
        break;
    }
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
