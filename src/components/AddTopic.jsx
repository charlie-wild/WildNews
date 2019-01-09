import React, { Component } from 'react';
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
      <div className='form'>
        <h2>Add A Topic</h2>
        <form onSubmit={this.addTopic}>
          <label htmlFor='topic_title'>Topic:</label>
          <input type='text' id='slug' />
          <label htmlFor='description'>Description:</label>
          <input type='text' id='description' />
          <button>Add Topic</button>
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
      { alert('Topic Added!');
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