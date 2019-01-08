import React, { Component } from 'react';
import * as api from './api'
import './auth.css'

class Auth extends Component {
    state = {
      username: '',
      failedLogin: false
    }
    
  render() {
    const {
      user,
      children
    } = this.props;
    return (
      user.user_id ? children :
      <div className="loginPage">
      <h2>Welcome To NC News! Please Log In Below</h2>
        <form className="form" onSubmit={this.handleSubmit}>
          <label className="label">Username: </label>
          <input type="text" id="username" value={this.state.username} onChange={this.handleChange}/>
          <button>Login</button>
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