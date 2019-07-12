import React, { Component } from "react";

class SearchBar extends Component {
  state = {};

  render() {
    return (
      <div>
        <form onSubmit={this.props.onSubmit}>
          <input
            type="text"
            placeholder="Search over 2 million recipes"
            value={this.props.value}
            onChange={this.props.onChange}
          />
          <input
            type="submit"
            value="Submit"
            className="btn btn-danger"
            style={{ margin: "2rem" }}
          />
        </form>
      </div>
    );
  }
}

export default SearchBar;
