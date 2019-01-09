import React, { Component } from 'react';
import {Link} from '@reach/router';
import './sidebar.css'



class Sidebar extends Component {
  render() {
    const {
      user, logout
    } = this.props;
    return (
      <div className="sidebar">
         <p>You are logged in as : {user.username}</p>
         <img src={user.avatar_url} alt="user avatar"/>
         <p>Visit your profile page: <Link to={`/users/${user.username}`}>Profile</Link></p>
         <button onClick={logout}>Logout</button>

      </div>
    );
  }
}

export default Sidebar;






