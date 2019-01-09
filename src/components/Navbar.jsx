import React, { Component } from 'react';
import {Link} from '@reach/router';
import './navbar.css'


class Navbar extends Component {
    render() {
    const { topics } = this.props;
    return (
      <div className="navbar">
        {topics.map(topic => {
          return <span key={topic.slug}>
            <Link to={`/${topic.slug}`}>{topic.slug}</Link>
          </span>
        })}
      </div>
    
    );
  }


}

export default Navbar;