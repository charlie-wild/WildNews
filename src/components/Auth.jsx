import React, { Component } from 'react';
import * as api from './api'
import './auth.css'

class Auth extends Component {
    state = {
      username: 'weegembump',
      failedLogin: false
    }

      
  render() {
    const {
      user,
      children
    } = this.props;
    return (
      user.user_id ? children :
      <div class='centered-login'>
      <p class='title is-4'>Welcome To NC News! Please Log In Below</p>
        <form className="form" onSubmit={this.handleSubmit}>
          <label className="label">Username: </label>
          <input type="text"class='input is-primary' id="username" value={this.state.username} onChange={this.handleChange}/>
          <button class='button is-primary'>Login</button>
        </form>
        {this.state.failedLogin && <p>Invalid username!</p>}        
      </div>
      
    );
  }

  handleSubmit = e => {
    e.preventDefault()
    api.getUser(this.state.username).then(user => this.props.login(user))
    .catch(err => {this.setState({failedLogin : true})})

  }

   handleChange = e => {
    const { id, value } = e.target
    this.setState({[id] : value})
  }
}

export default Auth;