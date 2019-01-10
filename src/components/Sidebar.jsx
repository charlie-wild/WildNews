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
        <Link to='/'>Home</Link>
          <p>You are logged in as : {user.username}</p>
          <img className='side_avatar' src={user.avatar_url} alt="user avatar"/>
          <p>Visit your profile page: <Link to={`/users/${user.username}`}>Profile</Link></p>
          <button onClick={logout}>Logout</button><br/>
          <Link to='/create_topic'>Add A Topic</Link><br/>
          <Link to='/create_article'>Add An Article</Link>
          <Link to='/users'>View All Users</Link>
      </div>
    );
  }
}

export default Sidebar;






