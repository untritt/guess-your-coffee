import React, { Component } from "react";
import "./App.css";

import { beverages, ingredients } from "../../digest";
import { isEmptySet, isSubset } from "../../utils/setOperations";

import { IngredientsController } from "../IngredientsController";
import { BeverageCard } from "../BeverageCard";

const pureBeverages = [...beverages.values()].filter(({ ingredients }) =>
  isEmptySet(ingredients)
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

  getBeveragesStat() {
    const { selectedIngredients } = this.state;

    const { selectedbeverages, assembledIngredients } = [
      ...beverages.values()
    ].reduce(
      ({ selectedbeverages, assembledIngredients }, beverage) => {
        const { ingredients } = beverage;

        return isSubset({
          set: ingredients,
          subset: selectedIngredients
        })
          ? {
              selectedbeverages: [...selectedbeverages, beverage],
              assembledIngredients: [...assembledIngredients, ...ingredients]
            }
          : { selectedbeverages, assembledIngredients };
      },
      { selectedbeverages: [], assembledIngredients: [] }
    );

    return {
      selectedbeverages: new Set(
        isEmptySet(selectedIngredients) ? pureBeverages : selectedbeverages
      ),
      assembledIngredients: new Set(assembledIngredients)
    };
  }

  render() {
    const { selectedbeverages, assembledIngredients } = this.getBeveragesStat();
    return (
      <React.Fragment>
        <div>
          <p>Provide present ingredients and</p>
          <h1>Guess name of your coffee</h1>
          <IngredientsController
            name="ingredientElements"
            onChange={this.handleChange}
            ingredients={assembledIngredients}
            selectedIngredients={this.state.selectedIngredients}
          />
        </div>
        {[...selectedbeverages].map(beverage => (
          <BeverageCard
            key={beverage.id}
            beverage={beverage}
            highlightedIngredients={this.state.selectedIngredients}
          />
        ))}
      </React.Fragment>
    );
  }
}
