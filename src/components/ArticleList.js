import React, { Component } from "react";
import axios from "axios";
import uuid from "uuid";
import apiKey from "../config";
import SortBy from "./SortBy";
import Article from './Article';
import { Link, Router } from "@reach/router";

export class ArticleList extends Component {
  state = {
    articles: [],
    sortBy: "",
    currentIndex: 0
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
        {this.state.articles[0] &&
          <Article article={this.state.articles[this.state.currentIndex]} />
        }

        <ul className="articleList">
          {this.state.articles.map((article, i) => {
            return <li value={i} key={uuid.v4()}><button>{article.title}</button></li>
            // onClick={this.updateStateClick} 





          })
          }
        </ul>

      </div>
    );
  }
  updateStateClick = (event) => {
    this.setState({ currentIndex: event.target.value })
  }
}

export default ArticleList;
