import React, { Component } from 'react';
import* as api from './api';

class AddComment extends Component {
  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <label htmlFor='comment'>Comment: </label>
          <input type='text' id='comment'/>
          <button>Submit Comment</button>
        </form>
      </div>
    );
  }

  handleSubmit = event => {
    event.preventDefault();
    const body = event.target.comment.value;
    const user_id = this.props.user.user_id;
    const article_id = this.props.article_id;
    api.postComment(article_id, {body, user_id}).then(alert('comment added!'))
  }
}

export default AddComment;