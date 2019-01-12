import React, { Component } from 'react';
import * as api from './api';

class DeleteComment extends Component {
  render() {
    return (
      <div>
        <button className='button is-danger button is-small' onClick={this.handleClick}>Delete</button>
      </div>
    );
  }

  handleClick = () => {
    api.deleteComment(this.props.article_id, this.props.comment_id).then(() => {
      alert('comment deleted!');
      this.props.fetchComments();

    })
      }
}

export default DeleteComment;