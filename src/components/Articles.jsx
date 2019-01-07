import React, { Component, Fragment } from 'react';
import {Link} from '@reach/router';
import * as api from './api';
import './articles.css';

class Articles extends Component {
  state = { articles: [] }
  render() {
    const { articles } = this.state;
    return (
      <Fragment>
      <div>
        <ul>
        
         { articles.map(article => {
          return <li key={article.article_id}>
              <Link to={`/${article.article_id}`}>{article.title}</Link></li>
         })}
       </ul>
    </div>
     </Fragment>
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