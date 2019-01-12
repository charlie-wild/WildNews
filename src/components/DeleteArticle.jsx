import React, { Component } from 'react';
import { navigate } from '@reach/router';
import * as api from './api';

class DeleteArticle extends Component {
  render() {
    return (
      <div>
        <button className='button is-danger' onClick={this.handleClick}>Delete Article</button>
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