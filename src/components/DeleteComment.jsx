import React, { Component } from 'react';
import * as api from './api';

class DeleteComment extends Component {
  render() {
    return (
      <div>
        <button onClick={this.handleClick}>Delete</button>
      </div>
    );
  }

  handleClick = () => {
    api.deleteComment(this.props.article_id, this.props.comment_id);
    alert('comment deleted!');
  }
}

export default DeleteComment;