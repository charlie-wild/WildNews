import React, { Component } from 'react';
import * as api from './api'

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
            <label htmlFor='title'>Title:</label>
            <input type='text' id='title' />
            <label htmlFor='body'>Body:</label>
            <input type='text' id='body' />
            <label htmlFor='topic'>Select A Topic:</label>
            <select id='topic'>
            {topics.map(topic => {
            return <option key={topic.slug} value={topic.slug}>
                {topic.slug}
              </option>
            })}
            </select>
          <button>Submit Article</button>
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
      
    }).catch((err) => {
      alert('Error in submission!')
    })

  }

   
  }

export default AddArticle;