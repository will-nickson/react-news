import React, { Component } from 'react';

class Article extends Component {
    state = {
        article: []
    }


    render() {
        console.log(this.props.article, "article");

        return (
            <div>
                <h3>{this.props.article.description}</h3>
                <h4>{this.props.article.url}</h4>
            </div>
        );
    }
}

export default Article;