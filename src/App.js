import React, { Component } from "react";
import SearchBar from "./components/SearchBar";
import Dietary from "./components/Dietary";
import Recipes from "./components/Recipes";
import cmrlogo from "./assets/cmrlogo.png";
import "./App.css";

class App extends Component {
  state = {
    recipes: [],
    value: "",
    health: []
  };

  fetchRecipes = () => {
    let recipes = [];
    const API_URL = "https://api.edamam.com/search?app_id=586b6a86&app_key=";
    const API_key = "7ee60a3315e2c4fef3742021fabba111";
    const searchTerm = this.state.value.split(" ").join(",");
    const health =
      this.state.health.length > 0
        ? `&health=${[...this.state.health].join("&health=")}`
        : "";
    console.log(health);
    fetch(`${API_URL}${API_key}&q=${searchTerm}${health}`)
      .then(results => {
        return results.json();
      })
      .then(data => {
        recipes = data.hits.map(hit => hit.recipe);
        this.setState({ recipes });
      });
  };

  handleSubmit = e => {
    this.fetchRecipes();
    e.preventDefault();
  };

  handleChange = e => {
    this.setState({
      value: e.target.value
    });
  };

  updateHealth = item => {
    let health = this.state.health;
    if (!health.includes(item)) health.push(item);
    else health.splice(health.indexOf(item), 1);
    this.setState({
      health
    });
  };

  render() {
    return (
      <div className="container">
        <img
          className="rounded img-fluid cmr-logo"
          src={cmrlogo}
          alt="CheckMyRecipe logo"
        />
        <br />
        <SearchBar
          onSubmit={this.handleSubmit}
          onChange={this.handleChange}
          value={this.state.value}
        />
        <Dietary updateHealth={this.updateHealth} />
        <Recipes recipes={this.state.recipes} />
      </div>
    );
  }
}

export default App;

