import React, { Component } from 'react';
import * as api from './api'
import { navigate } from '@reach/router';

class AddArticle extends Component {
  state = {
      isPosted: false
  }
    render() {      
      const { topics } = this.props
    return (
      <div>
        <h2>Add An Article</h2>
          <form onSubmit={this.handleSubmit}>
            <label className='label' htmlFor='title'>Title:</label>
            <input type='text' id='title' required/>
            <label className='label' htmlFor='body'>Body:</label>
            <input className='textarea' type='text' id='body' required/>
            <label className='label' htmlFor='topic'>Select A Topic:</label>
            <select className='select is-primary' id='topic'>
            {topics.map(topic => {
            return <option key={topic.slug} value={topic.slug}>
                {topic.slug}
              </option>
            })}
            </select>
          <button className='button is-primary'>Submit Article</button>
          </form>
      </div>
    );
  }

  handleSubmit = event => {
    const title = event.target.title.value;
    const body = event.target.body.value;
    const topic = event.target.topic.value;
    const user_id = this.props.user.user_id;
    event.preventDefault();
    api.postArticle(topic, { title, body, user_id  })
    .then(() => {
      alert('New Article Added!');
      navigate(`/${topic}`);

      
    }).catch((err) => {
      alert('Error in submission!')
    })

  }

   
  }

export default AddArticle;