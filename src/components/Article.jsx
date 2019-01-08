import React, { Component, Fragment } from 'react';
import * as api from './api';
import './article.css'

class Article extends Component {
  state = {
    article: {},
    comments: []
  }
  render() {
    const { article, comments } = this.state;
    return (
      <div className="content">
       <Fragment>
        <h2>{article.title}</h2>
        <span><button>Upvote</button></span>
        <span><button>Downvote</button></span>
        <em><p>Created by: {article.author}</p></em>
        <h4>Votes: {article.votes}</h4>
        <p>{article.body}</p>
        <ul>
          { comments.map(comment => {
            return <Fragment><li key={comment.comment_id}>{comment.body}</li>
            <span><button>Upvote</button><button>Downvote</button>Votes: {comment.votes}</span>
            <span>Created: {comment.created_at}</span>
            <span>Author: {comment.author}</span>
          </Fragment>
          })}
        </ul>
       </Fragment>
      </div>
    );
  }


componentDidMount() {
  this.fetchArticle(this.props.article_id);
  this.fetchComments(this.props.comment_id);
}


fetchArticle = () => {
  api.getArticleById(this.props.article_id).then((article) => {
    this.setState({ article });
  })
}

fetchComments = () => {
  api.getArticleComments(this.props.article_id).then((comments) => {
    this.setState({ comments });
  })
}


}

export default Article;