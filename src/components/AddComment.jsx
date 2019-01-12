import React, { Component } from 'react';
import* as api from './api';

class AddComment extends Component {
  state = {
    isLoading: false,
    err: null,
  }
  render() {
    return (
      <div>
        {this.state.isLoading && <p>Posting comment...</p>}
        <form onSubmit={this.handleSubmit}>
          <label htmlFor='comment'>Comment: </label>
          <input type='text' id='comment' required/>
          <button className='button is-primary'>Submit Comment</button>
        </form>
        {this.state.err && <p>Oh no! Something went wrong.</p>}
      </div>
    );
  }

  handleSubmit = event => {
    event.preventDefault();
    this.setState({isLoading: true});
    const body = event.target.comment.value;
    const user_id = this.props.user.user_id;
    const article_id = this.props.article_id;
    api.postComment(article_id, {body, user_id}).then(() => {
      this.setState({isLoading: false})
      this.props.fetchComments();
    }).catch(() => {this.setState({err : true})})
    
  }
}

export default AddComment;