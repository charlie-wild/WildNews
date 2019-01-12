import React, { Component } from 'react';
import * as api from './api'
import { navigate } from '@reach/router';

class AddArticle extends Component {
  state = {
      title: '',
      body: '',
      isPosted: false,
      err : null,
  }
    render() {      
      const { topics } = this.props
    return (
      <div>
        <h2>Add An Article</h2>
          <form onSubmit={this.handleSubmit}>
            <label className='label' htmlFor='title'>Title:</label>
            <input type='text' id='title' required value={this.state.title} onChange={this.handleChange}/>
            <label className='label' htmlFor='body'>Body:</label>
            <input className='textarea' type='text' id='body' required value={this.state.body} onChange={this.handleChange} />
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
    const title = this.state.title;
    const body = this.state.body;
    const topic = event.target.topic.value;
    const user_id = this.props.user.user_id;
    event.preventDefault();
    api.postArticle(topic, { title, body, user_id  })
    .then(() => {
      alert('New Article Added!');
      navigate(`/${topic}`);
      this.setState({title: '', body: ''})
    }).catch(() => {
      this.setState({err : true})
    })

  }

  handleChange = event => {
    const { id, value } = event.target;
    this.setState({[id] : value })
  }
   
  }

export default AddArticle;