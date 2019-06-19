import React, { Component } from "react";
import axios from "axios";
import uuid from "uuid";
import apiKey from "../config";
import SortBy from "./SortBy";

export class ArticleList extends Component {
  state = {
    articles: [],
    sortBy: ""
  };

  componentDidMount() {
    axios
      .get(
        `https://newsapi.org/v2/everything?q=${
          this.submitSortBy
        }&apiKey=${apiKey}`
      )
      .then(response => this.setState({ articles: response.data.articles }));
  }

  submitSortBy = newsSource => {
    axios
      .get(`https://newsapi.org/v2/everything?q=${newsSource}&apiKey=${apiKey}`)
      .then(response =>
        this.setState({ articles: response.data.articles, sortBy: newsSource })
      );
  };

  render() {
    return (
      <div>
        <SortBy submitSortBy={this.submitSortBy} />
        <ul className="articleList">
          {this.state.articles.map(article => (
            <li key={uuid.v4()}>{article.title}</li>
          ))}{" "}
        </ul>
        <Article />
      </div>
    );
  }
}

export default ArticleList;
