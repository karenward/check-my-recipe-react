import React, { Component } from "react";

class Recipe extends Component {
  state = {
    activeRecipe: {},
    ingredients: [],
    calories: {},
    sugar: {},
    fat: {},
    carbs: {},
    protein: {},
    salt: {}
  };
  componentDidMount = () => {
    const activeRecipe = this.props.location.state.recipe;
    console.log(activeRecipe);
    this.setState({
      activeRecipe,
      ingredients: activeRecipe.ingredientLines,
      calories: activeRecipe.totalNutrients.ENERC_KCAL,
      sugar: activeRecipe.totalNutrients.SUGAR,
      fat: activeRecipe.totalNutrients.FAT,
      carbs: activeRecipe.totalNutrients.CHOCDF,
      protein: activeRecipe.totalNutrients.PROCNT,
      salt: activeRecipe.totalNutrients.NA
    });
  };

  render() {
    const {
      activeRecipe,
      ingredients,
      calories,
      sugar,
      fat,
      carbs,
      protein,
      salt
    } = this.state;

    return (
      <div className="recipe-display">
        <h3>{activeRecipe.label}</h3>
        <img src={activeRecipe.image} alt={activeRecipe.label} />
        <ul>
          {ingredients.map(ingredient => (
            <li key={ingredient} className="recipe-ingredients">
              {ingredient}
            </li>
          ))}
        </ul>
        <div className="nutrient-container">
          <div className="row">
            <div className="col-sm">
              <span className="nutrient">Calories</span>
            </div>
            <div className="col-sm">
              {Math.round(calories.quantity)} {calories.unit}
            </div>
          </div>
          <div className="row">
            <div className="col-sm">
              <span className="nutrient">Sugar</span>
            </div>
            <div className="col-sm">
              {Math.round(sugar.quantity)} {sugar.unit}
            </div>
          </div>
          <div className="row">
            <div className="col-sm">
              <span className="nutrient">Fat</span>
            </div>
            <div className="col-sm">
              {Math.round(fat.quantity)} {fat.unit}
            </div>
          </div>
          <div className="row">
            <div className="col">
              <span className="nutrient">Carbs</span>
            </div>
            <div className="col-sm">
              {Math.round(carbs.quantity)} {carbs.unit}
            </div>
          </div>
          <div className="row">
            <div className="col">
              <span className="nutrient">Protein</span>
            </div>
            <div className="col-sm">
              {Math.round(protein.quantity)} {protein.unit}
            </div>
          </div>
          <div className="row">
            <div className="col">
              <span className="nutrient">Salt</span>
            </div>
            <div className="col-sm">
              {Math.round(salt.quantity)} {salt.unit}
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Recipe;
