import React, { Component, Fragment } from 'react';
import { Link } from '@reach/router';
import moment from 'moment';
import * as api from './api';
import './article.css'
import AddComment from './AddComment';
import Votes from './Votes';
import CommentVotes from './CommentVotes';
import DeleteComment from './DeleteComment';
import DeleteArticle from './DeleteArticle';



class Article extends Component {
  state = {
    article: {},
    comments: [],
    isLoaded: false,
    isClicked: false,
    err: null,
    page: 1,
  }
  render() {
    const { article, comments } = this.state;
    return (
      <div className="content_single">
      {this.state.err ? <h2>There is nothing here!</h2> :
        <Fragment>
        {!this.state.isLoaded && <p>Loading...</p>}
        <div className='article'>
        <h2>{article.title}</h2>
        <Votes article_id={this.state.article.article_id} votes={this.state.article.votes}/>
        Return to <Link to={`/${article.topic}`}>{article.topic}</Link>
        {this.props.user.user_id === this.state.article.user_id && <DeleteArticle article_id={this.state.article.article_id}/>}
        <em><p>Created by: {article.author}</p></em>
        <em><p>Created at: {moment(article.created_at).format('MMMM Do YYYY, h:mm:ss a')}</p></em>
        <p>{article.body}</p>
        </div>
        <AddComment postNewComment={this.postNewComment} fetchComments={this.fetchComments} user={this.props.user} article_id={this.props.article_id}/>
        <ul>
          { comments.map(comment => {
            return <Fragment key={comment.comment_id}><li>{comment.body}</li>
            <CommentVotes comment_id={comment.comment_id} article_id={article.article_id}votes={comment.votes}/>
            <span>Created: {
              moment(comment.created_at).format('MMMM Do YYYY, h:mm:ss a')
            }</span>
            <span>Author: {comment.author}</span>     
            {this.props.user.username === comment.author && <DeleteComment fetchComments={this.fetchComments} article_id={this.state.article.article_id} comment_id={comment.comment_id}/>}
          </Fragment>
          })}
        </ul>
        </Fragment>
      }
      </div>
    );
  }


componentDidMount() {
  this.setState({isLoaded: true})
  this.fetchArticle(this.props.article_id);
  this.fetchComments(this.props.comment_id);
}


fetchArticle = () => {
  api.getArticleById(this.props.article_id).then((article) => {
    this.setState({ article });
  })
  .catch(err => {
    this.setState({err});
  });
}

fetchComments = () => {
  api.getArticleComments(this.props.article_id).then((comments) => {
    this.setState({ comments });
  })
}




}

export default Article;