import React from 'react';
import {Link} from '@reach/router';
import MediaQuery from 'react-responsive';
import './navbar.css'

const Navbar = ({topics, user}) => {
      return (
      <nav className='navbar is-primary'>
  <div className="nav-header">
    <div className="nav-title">
    <MediaQuery query='(min-device-width: 794px)'>
      <Link to='/'>Home</Link>
      <p>Logged in as: {user.username}</p>
    </MediaQuery>
    </div>
  </div>
  <div className="nav-btn">
    <label htmlFor="nav-check">
      <span></span>
      <span></span>
      <span></span>
    </label>
  </div>
   <div className="nav-links">
    <button className='button is-primary'><Link to='/users'>All Users</Link></button>
    <button className='button is-primary'><Link to='/topics'>View Topics</Link></button>
    <button className='button is-primary'><Link to='/create_topic'>Create Topic</Link></button>
    <button className='button is-primary'><Link to='/create_article'>Create Article</Link></button>
  </div>
   </nav>
    
    );
  }



export default Navbar;