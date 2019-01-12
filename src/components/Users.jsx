import React, { Component, Fragment } from 'react';
import {Link} from '@reach/router';
import * as api from './api';
import './users.css';

class Users extends Component {
  state = { users: [] }
  render() {
    const { users } = this.state;
    return (
      <div>
        <h2>Users</h2>
          <ul className='all-users'>
            {  users.map(user => {
              return <Fragment key={user.user_id}>
                <li className='user'>
                  <h4>{user.username}</h4>
                    <img className='image is-96x96'src={user.avatar_url} alt='user avatar'/><br/>
                    <Link to={`/users/${user.username}`}>Profile Page</Link>
                </li>
              </Fragment>
            })}
          </ul>
      </div>
    );
  }

  componentDidMount() {
    this.fetchUsers();
  }


  fetchUsers = () => {
    api.getUsers().then((users) => {
      this.setState({ users });
    })
  }
}

export default Users;