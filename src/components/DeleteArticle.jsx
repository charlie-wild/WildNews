import React, { Component } from 'react';
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
    this.setState({deletedArticleTopic: this.props.article.topic})
    console.log(this.props.article)
    api.deleteArticle(this.props.article_id).then(() => {
      alert('article deleted!');
    })
    
  }
}

export default DeleteArticle;