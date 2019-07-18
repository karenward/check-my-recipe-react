import React, { Component } from "react";

class DietaryCheckbox extends Component {
  render() {
    return (
      <label className="health-checkbox">
        {this.props.displayName}
        <input
          className="checkBox"
          name={this.props.name}
          type="checkbox"
          checked={this.props.checked}
          onChange={this.props.onChange}
        />
      </label>
    );
  }
}

export default DietaryCheckbox;
