import React from 'react';
import {Link} from '@reach/router';
import './navbar.css'

const Navbar = ({topics, user}) => {
      return (
      <nav role='navigation' aria-label="main navigation" className="navbar is-primary">
        <div className='navbar brand' >
                <div role="button" className="navbar-burger" aria-label="menu" aria-expanded="false">
                <span aria-hidden="true"></span>
                <span aria-hidden="true"></span>
                <span aria-hidden="true"></span>
          </div>
        </div>
        <div className='navbar-start'>
        <div className='navbar-item'>
          {<Link to='/'>Home</Link>}
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
      <div className='navbar-item'>
       <p>Logged in as:<Link to={`/users/${user.username}`}>{user.username}</Link></p>
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
              <div className='button is-light'>
                {<Link to='/users'>All Users</Link>}
              </div>

            </div>
          </div>
         </div>
      </nav>
    
    );
  }



export default Navbar;