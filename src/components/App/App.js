import React, { Component } from "react";
import { beverages, ingredients } from "../../digest";
import { IngredientsController } from "../IngredientsController";
import { BeveragesMap } from "../BeveragesMap";
import "./App.css";

const pureBeverages = new Map(
  [...beverages.entries()].filter(
    ([key, { ingredients }]) => ingredients.size === 0
  )
);

const beverageHasIngredients = ({ ingredients }, selectedIngredients) =>
  [...selectedIngredients].filter(ingredient => ingredients.has(ingredient))
    .length === selectedIngredients.size;

const intersection = (setA, setB) =>
  new Set([...setA].filter(x => setB.has(x)));

const assembleIngregients = beverages =>
  new Set(
    [...beverages.values()].reduce(
      (foundIngredients, { ingredients }) => [
        ...foundIngredients,
        ...ingredients
      ],
      []
    )
  );
export class App extends Component {
  state = {
    selectedIngredients: new Set()
  };

  handleChange = ({
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
    const selectedBeverages = new Map(
      [...beverages.entries()].filter(
        ([key, { ingredients }]) =>
          intersection(this.state.selectedIngredients, ingredients).size ===
          this.state.selectedIngredients.size
      )
    );
    return (
      <React.Fragment>
        <IngredientsController
          selectedIngredients={this.state.selectedIngredients}
          assembledIngredients={assembleIngregients(selectedBeverages)}
          onChange={this.handleChange}
        />
        <BeveragesMap>
          {this.state.selectedIngredients.size !== 0
            ? selectedBeverages
            : pureBeverages}
        </BeveragesMap>
      </React.Fragment>
    );
  }
}
