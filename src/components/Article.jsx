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
    isLoading: true,
    err: null,
    page: 1,
    }
  render() {
    const { article, comments, page } = this.state;
      return (
      <section className="content_single">
      {this.state.err ?
      <Fragment>
      <h2>There is nothing here!</h2>
      <p>Return <Link to='/'>home</Link></p>
      </Fragment> :
        <Fragment>
        {this.state.isLoading && <h2>Loading...</h2>}
        <article className='article'>
        <h2>{article.title}</h2>
        <Votes article_id={this.state.article.article_id} votes={this.state.article.votes}/>
        Return to <Link to={`/${article.topic}`}>{article.topic}</Link>
        {this.props.user.user_id === this.state.article.user_id && <DeleteArticle article_id={this.state.article.article_id}/>}
        <em><p>Created by: {article.author}</p></em>
        <em><p>Created at: {moment(article.created_at).format('MMMM Do YYYY, h:mm:ss a')}</p></em>
        <p>{article.body}</p>
        </article>
        <AddComment postNewComment={this.postNewComment} fetchComments={this.fetchComments} user={this.props.user} article_id={this.props.article_id}/>
        <ul>
        {comments.length === 0 && <p>Why not be the first to add a comment?</p>}
          { comments.map(comment => {
            return <Fragment key={comment.comment_id}>
            <div className='single_comment'>
            <li>{comment.body}</li>
            <CommentVotes comment_id={comment.comment_id} article_id={article.article_id}votes={comment.votes}/>
            <span>Created: {
              moment(comment.created_at).format('MMMM Do YYYY, h:mm:ss a')
            }</span>
            <span>Author: {comment.author}</span>     
            {this.props.user.username === comment.author && <DeleteComment fetchComments={this.fetchComments} article_id={this.state.article.article_id} comment_id={comment.comment_id}/>}
            </div>
          </Fragment>
          })}
        </ul>
          {page > 1 && <button className='button is-primary is-small page_button' onClick={this.pageDown}>Previous Page</button>}
       { (article.comment_count/10) > page && <button className='button is-primary is-small page_button' onClick={this.pageUp}>Next Page</button> }
        </Fragment>
      }
      </section>
    );
  }


componentDidMount() {
    this.state.page > 1 ? this.renderOtherPage( ): this.renderArticle();
  }


  renderArticle = () => {
    this.fetchArticle();
    this.fetchComments();
  }

  renderOtherPage = () => {
    this.fetchArticle();
    this.pagginate();
  }

fetchArticle = () => {
  api.getArticleById(this.props.article_id).then((article) => {
    this.setState({ article });
  }).then(() => this.setState({isLoading: false}))
  .catch(err => {
    this.setState({err});
  });
}

fetchComments = () => {
  api.getArticleComments(this.props.article_id).then((comments) => {
    this.setState({ comments });
  })
}

pagginate = () => {
  api.changeCommentPage(this.state.page, this.props.article_id)
  .then((comments) => this.setState({ comments }));
}

  pageDown = () => {
    this.setState({page: this.state.page -1 }, () => {
          this.pagginate();
    })
  }

  pageUp = () => {
    this.setState({page: this.state.page +1}, () => {
          this.pagginate();
      })
  }


}

export default Article;