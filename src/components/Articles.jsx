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
              <Link to={`/${article.article_id}`}>{article.title}</Link></li>
              <span>Votes:    {article.votes}</span>
              <span>Created by:    {article.username}</span>
              </Fragment>
         })}
       </ul>
    </div>
     
    );
  }

componentDidMount() {
  this.fetchArticles();
}

fetchArticles = () => {
  api.getArticles().then((articles) => {
    this.setState({ articles })
  })
}
   
}

export default Articles;