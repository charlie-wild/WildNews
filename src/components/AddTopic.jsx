import React, { Component } from 'react';
import { navigate } from '@reach/router';
import * as api from './api';

class AddTopic extends Component {
  state = {
    newTopic: {
      slug: '',
      description: ''
    }
  }
  render() {
    return (
      <div className='add_topic'>
        <h2>Add A Topic</h2>
        <form onSubmit={this.addTopic}>
          <label className='label' htmlFor='topic_title'>Topic:</label>
          <input type='text' id='slug' required />
          <label className='label' htmlFor='description'>Description:</label>
          <input type='text' id='description' required />
          <button className='button is-success'>Add Topic</button>
        </form>
        
      </div>
    );
  }

  addTopic = async event => {
    event.preventDefault();
    this.setState(
      {
        newTopic: {
          slug: event.target.slug.value,
          description: event.target.description.value
        },
      },
      () => api.postTopic(this.state.newTopic).then(() => 
      { alert('Topic Added Successfully! Now create an article for your new topic.');
        navigate('/create_article');
        this.setState({newTopic: {
          slug: '',
          description: ''
        }})
        }      
      )
      )
    }

}

export default AddTopic;