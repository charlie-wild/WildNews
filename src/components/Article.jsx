import React, { Component, Fragment } from 'react';
import * as api from './api';
import './article.css'

class Article extends Component {
  state = {
    article: {},
    comments: []
  }
  render() {
    const { article } = this.state;
    return (
      <div className="content">
       <Fragment>
        <h2>{article.title}</h2>
        <p>{article.body}</p>
       </Fragment>
      </div>
    );
  }


componentDidMount() {
  this.fetchArticle(this.props.article_id)
}


fetchArticle = () => {
  api.getArticleById(this.props.article_id).then((article) => {
    this.setState({ article })
  })
}


}

export default Article;