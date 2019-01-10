import React, { Component } from 'react';
import * as api from './api';

class DeleteArticle extends Component {
  state = {
    clicked: false
  }
  render() {
    
    return (
      <div>
        <button onClick={this.handleClick}>Delete</button>
      </div>
    );
  }

  handleClick = () => {
    api.deleteArticle(this.props.article_id);
    alert('article deleted!');
  }
}

export default DeleteArticle;