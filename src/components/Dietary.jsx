import React, { Component } from "react";
import DietaryCheckbox from "./DietaryCheckbox";

class Dietary extends Component {
  state = {
    allergiesSelected: [],
    dietarySelected: [],
    isChecked: {}
  };

  handleChange = e => {
    let checked = this.state.isChecked;
    let allergy = e.target.name;
    checked.allergy = !checked.allergy;
    this.setState(
      {
        isChecked: checked
      },
      this.props.updateHealth(e.target.name)
    );
  };

  render() {
    const dietaryRequirements = [
        {displayName: "peanut free", apiName: "peanut-free"},
        {displayName: "tree nut free", apiName: "tree-nut-free"},
        {displayName: "vegan", apiName: "vegan"}, 
        {displayName: "vegetarian", apiName: "vegetarian"},
        {displayName: "sugar conscious", apiName: "sugar-conscious"},
        {displayName: "alcohol free", apiName: "alcohol-free"}];

    return (
      <div className="dietary-container">
        <div className="dietary-selection">
        <form>
            {dietaryRequirements.map(dietary => (
              <DietaryCheckbox
                displayName={dietary.displayName}
                name={dietary.apiName}
                onChange={this.handleChange}
                checked={this.state.isChecked[{ dietary }]}
              />
            ))}
          </form>
        </div>
      </div>
    );
  }
}

export default Dietary;
