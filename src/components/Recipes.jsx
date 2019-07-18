import React, { Component } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faClock } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";

class Recipes extends Component {
  state = {};

  render() {
    if (!this.props.recipes[0]) return null;
    else
      return (
        <div className="row" style={{ marginLeft: "2em", marginRight: "2em" }}>
          {this.props.recipes.map(recipe => (
            <div
              key={recipe.uri}
              className="col-sm-4"
              style={{ marginBottom: "2em" }}
            >
              <div className="card">
                <img
                  src={recipe.image}
                  alt={recipe.label}
                  className="card-img-top"
                />
                <h5 className="card-title">{recipe.label}</h5>
                <p className="card-subtitle">
                  <span className="recipe-card--clock">
                    <FontAwesomeIcon icon={faClock} />
                  </span>
                  <span className="recipe-card--minutes">
                    {recipe.totalTime} minutes{" "}
                  </span>
                  <span className="recipe-card--calories">
                    {Math.round(recipe.totalNutrients.ENERC_KCAL.quantity)}{" "}
                    calories
                  </span>
                </p>
                <button className="btn btn-danger" style={{ margin: "2rem" }}>
                  <Link
                    to={{
                      pathname: `/recipe/${recipe.uri.substring(
                        recipe.uri.length - 10,
                        recipe.uri.length
                      )}`,
                      state: { recipe: recipe }
                    }}
                  >
                    View Recipe
                  </Link>
                </button>
              </div>
            </div>
          ))}
        </div>
      );
  }
}

export default Recipes;
