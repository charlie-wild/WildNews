import React, { Component } from 'react';
import { navigate } from '@reach/router';
import * as api from './api';

class AddTopic extends Component {
  state = {
    newTopic: {
      slug: '',
      description: '',
    },
    err: null,
  }
  render() {
    return (
      <div className='add_topic'>
        <h2>Add A Topic</h2>
        <form onSubmit={this.handleSubmit}>
          <label className='label' htmlFor='topic_title'>Topic:</label>
          <input type='text' id='slug' value={this.state.newTopic.slug} onChange={this.handleChange} required />
          <label className='label' htmlFor='description'>Description:</label>
          <input type='text' id='description' value={this.state.newTopic.description} onChange={this.handleChange} required />
          <button className='button is-primary'>Add Topic</button>
        </form>
        {this.state.err && <p>Oh no! We've encountered an error.</p>}
        
      </div>
    );
  }

  handleSubmit = event => {
    event.preventDefault();
    api.postTopic(this.state.newTopic).then(() => 
      { alert('Topic Added Successfully! Now create an article for your new topic.');
        navigate('/create_article');
        this.setState({newTopic: {
          slug: '',
          description: ''
        }})
        }      
      ).catch(() => {
        this.setState({err: true});
      })
      
    }

    handleChange = ({ target: { value, id } }) => {
        this.setState({
          newTopic: {
            [id]: value
          }
        })
    }

   TODO: // fix this to be a controlled component. 

}

export default AddTopic;