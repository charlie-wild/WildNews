import React, { Component } from 'react';
import {Link} from '@reach/router';
import './navbar.css'


class Navbar extends Component {
    render() {
    const { topics, user, logout } = this.props;
    return (
      <div role='navigation' aria-label="main navigation" className="navbar">
        <div className='navbar brand' >
          <div className='navbar-item'>
          {<Link to='/'>Home</Link>}
        </div>
        </div>
        <div className='navbar-start'>
        <div className='navbar-item has-dropdown is-hoverable'>
        <div className='navbar-link'>
          Topics
        </div>
        <div className='navbar-dropdown'>{topics.map(topic => {
          return <span key={topic.slug} className='navbar-item'>
            <Link to={`/${topic.slug}`}>{topic.slug}</Link>
          </span>
        })}
      </div>
      </div>
      </div>
        <div className='navbar-end'>
           <div className='navbar-item'>
            <div className='buttons'>
              <div className='button is-light'>
                {<Link to='/create_topic'>Create Topic</Link>}
              </div>
              <div className='button is-light'>
                {<Link to='/create_article'>Create Article</Link>}
              </div>

            </div>
          </div>
           <div className='navbar-item'>
            Logged in as:<Link to={`/users/${user.username}`}>{user.username}</Link>
          </div>
          <div className='navbar-item'>
            <button onClick={logout}>Logout</button>
          </div>
        </div>
      </div>
    
    );
  }


}

export default Navbar;