import React, { Component, Fragment } from 'react';
import {Link} from '@reach/router';
import * as api from './api';
import './articles.css';

class Articles extends Component {
  state = { articles: [] }
  render() {
    const { articles } = this.state;
    return (
      <div>
        <ul>
            { articles.map(article => {
          return <Fragment><li key={article.article_id}>
              <Link to={`/articles/${article.article_id}`}>{article.title}</Link></li>
              <span>Votes:{article.votes}</span>
              <span>Created by:{article.username}</span>
              </Fragment>
          })}
      </ul>
    </div>
    
    );
  }

componentDidMount() {
  this.fetchArticles(this.props.topic);
}

fetchArticles = () => {
  api.getArticles(this.props.topic).then((articles) => {
    this.setState({ articles })
  })
}

componentDidUpdate(prevProps, prevState) {
    const {
      topic
    } = this.props
    if (topic !== prevProps.topic) {
      return this.fetchArticles(topic)
    }
  
}

}

export default Articles;