import React, { Component } from 'react';
import { navigate } from '@reach/router';
import * as api from './api';

class DeleteArticle extends Component {
  state = {
    clicked: false,
    deletedArticleTopic: ''
  }
  render() {
    
    return (
      <div>
        <button onClick={this.handleClick}>Delete</button>
      </div>
    );
  }

  handleClick = () => {
      api.deleteArticle(this.props.article_id).then(() => {
      alert('article deleted!')
      navigate('/');
    })
    
  }
}

export default DeleteArticle;