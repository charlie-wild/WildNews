import React, { Component, Fragment } from 'react';
import {Link} from '@reach/router';
import Votes from './Votes'
import moment from 'moment';
import * as api from './api';
import './articles.css';

class Articles extends Component {
  state = { articles: [] }
  render() {
    const { articles } = this.state;
    return (
      <div>
      {articles.length > 1 && <h2>{articles[0].topic}</h2>}
        <ul>
        {articles.length < 1 && <h2>Loading...</h2>}
            { articles.map(article => {
          return <Fragment key={article.article_id}><li>
              <Link to={`/articles/${article.article_id}`}>{article.title}</Link></li>
              <Votes article_id={article.article_id} votes={article.votes}/>
              <span>Created by:{article.username}</span>
              <span>Created: {moment(article.created_at).format('MMMM Do YYYY, h:mm:ss a')}</span>
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
    if (topic !== prevProps.topic && this.state.articles.length !== 0)  {
      return this.fetchArticles(topic)
    }
  
}

}

export default Articles;