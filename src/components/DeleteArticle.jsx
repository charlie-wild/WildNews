import React from 'react';
import { navigate } from '@reach/router';
import * as api from './api';

const DeleteArticle = ({article_id}) => {

const handleClick = () => {
  api.deleteArticle(article_id).then(() => {
    alert('article deleted!')
    navigate('/');
  })
}
return (
      <div>
        <button className='button is-danger' onClick={handleClick}>Delete Article</button>
      </div>
    );


}

export default DeleteArticle;