import React, { Component } from 'react';
import {Link} from '@reach/router';
import './navbar.css'


class Navbar extends Component {
    render() {
    const { topics } = this.props;
    return (
      <div class='navbar' role='navigation' aria-label="main navigation" className="navbar">
        <div class='navbar brand' >
          <div role="button" class="navbar-burger" aria-label="menu" aria-expanded="false">
           <span aria-hidden="true"></span>
            <span aria-hidden="true"></span>
            <span aria-hidden="true"></span>
        </div>
        </div>
        <div class='navbar-start'>
        <div class='navbar-item'>
          {<Link to='/'>Home</Link>}
        </div>
        <div class='navbar-item has-dropdown is-hoverable'>
        <div class='navbar-link'>
          Topics
        </div>
        <div class='navbar-dropdown'>{topics.map(topic => {
          return <span key={topic.slug} class='navbar-item'>
            <Link to={`/${topic.slug}`}>{topic.slug}</Link>
          </span>
        })}
      </div>
      </div>
      </div>
        <div class='navbar-end'>
          <div class='navbar-item'>
            <div class='buttons'>
              <div class='button is-light'>
                {<Link to='/create_topic'>Create Topic</Link>}
              </div>
              <div class='button is-light'>
                {<Link to='/create_article'>Create Article</Link>}
              </div>

            </div>
          </div>
        </div>
      </div>
    
    );
  }


}

export default Navbar;