import React, { Component } from 'react';
import* as api from './api';
import './addcomment.css';

class AddComment extends Component {
  state = {
    comment: '',
    isLoading: false,
    err: null,
  }
  render() {
    return (
      <div>
        {this.state.isLoading && <p>Posting comment...</p>}
        <form id='add_comment' onSubmit={this.handleSubmit}>
        <label htmlFor='comment'>Comment: </label>
          <input type='text' id='comment' placeholder='What are your thoughts?' className='input is-primary is-rounded' required value={this.state.comment} onChange={this.handleChange}/>
          <button className='button is-primary add_comment_button'>Submit Comment</button>
        </form>
        {this.state.err && <p>Oh no! Something went wrong.</p>}
      </div>
    );
  }

  handleSubmit = event => {
    event.preventDefault();
    this.setState({isLoading: true});
    const body = this.state.comment;
    const user_id = this.props.user.user_id;
    const article_id = this.props.article_id;
    api.postComment(article_id, {body, user_id}).then(() => {
      this.setState({isLoading: false})
      this.props.fetchComments();
      this.setState({comment: ''});
    }).catch(() => {this.setState({err : true})})
    
  }

  handleChange = event => {
    const { id, value } = event.target;
    this.setState({[id] : value});
  }
}

export default AddComment;