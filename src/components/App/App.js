import React, { Component } from "react";
import "./App.css";

import { beverages, ingredients } from "../../digest";
import { isEmptySet, isSubset } from "../../utils/setOperations";

import { IngredientsController } from "../IngredientsController";
import { BeveragesMap } from "../BeveragesMap";
import { Beverage } from "../Beverage";
import { IngredientControl } from "../IngredientControl";

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
        <IngredientsController
          name={"ingredientElements"}
          onChange={this.handleChange}
        >
          {[...assembledIngredients].map(ingredient => (
            <IngredientControl
              key={ingredient.id}
              ingredient={ingredient}
              selected={this.state.selectedIngredients.has(ingredient)}
            />
          ))}
        </IngredientsController>
        <BeveragesMap>
          {[...selectedbeverages].map(beverage => (
            <Beverage
              key={beverage.id}
              beverage={beverage}
              highlightedIngredients={this.state.selectedIngredients}
            />
          ))}
        </BeveragesMap>
      </React.Fragment>
    );
  }
}
