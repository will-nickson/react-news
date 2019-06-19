import React, { Component } from "react";

export class SortBy extends Component {
  state = {
    input: 'bbc'
  };
  render() {
    // console.log(this.props);
    return (
      <div>
        <select
          id="selectSortBy"
          className="selectSortBy"
          onChange={this.updateStateInput}
        >
          <option value="bbc-news">BBC</option>
          <option value="fox-news">Fox</option>
          <option value="google-news">Google</option>
          <option value="vice-news">Vice</option>
        </select>
      </div>
    );
  }

  updateStateInput = event => {
    this.setState({ input: event.target.value });
  };

  componentDidMount(prevProps, prevState) {
    this.props.submitSortBy(this.state.input);
  }


  componentDidUpdate(prevProps, prevState) {
    if (prevState.input !== this.state.input) {
      this.props.submitSortBy(this.state.input);
    }
  }
}

export default SortBy;
