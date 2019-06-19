import React, { Component } from "react";
import "./App.css";
import Header from "./components/Header";
import ArticleList from "./components/ArticleList";

class App extends Component {
  state = {
    sort_by: ""
  };
  render() {
    return (
      <div className="App">
        <Header />
        <ArticleList />
      </div>
    );
  }
}

export default App;
