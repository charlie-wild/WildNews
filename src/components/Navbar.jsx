import React, { Component } from 'react';
import {Link} from '@reach/router';
import * as api from './api';
import './navbar.css'


class Navbar extends Component {
  state = { topics : [] };
  render() {
    const { topics } = this.state;
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

componentDidMount() {
  this.fetchTopics();
}


fetchTopics = () => {
  api.getTopics().then((topics) => {
    this.setState({ topics })
  })
}


}

export default Navbar;