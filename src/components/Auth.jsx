import React, { Component, Fragment } from 'react';
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
      <Fragment>
      <img className='login_image image is-128x128' src='https://cdn-images-1.medium.com/max/1200/1*LdnSztHVYhhd8K8EqlgCJQ.png' alt='NorthCoders logo'/>
      <div className='centered-login'>
      <p className='title is-4'>Welcome To NC News! Please Log In Below</p>
          <form className="form" onSubmit={this.handleSubmit}>
          <label className="label">Username: </label>
          <input type="text" className='input is-primary' id="username" required value={this.state.username} onChange={this.handleChange}/>
          <button className='button is-primary is-large login_button'>Login</button>
        </form>
        {this.state.failedLogin && <p>Invalid username!</p>}        
      </div>
      </Fragment>
      
    );
  }

  handleSubmit = event => {
    event.preventDefault()
    api.getUser(this.state.username).then(user => this.props.login(user))
    .catch(err => {this.setState({failedLogin : true})})

  }

    handleChange = event => {
      const { id, value } = event.target;
      this.setState({[id] : value})
  }
}

export default Auth;