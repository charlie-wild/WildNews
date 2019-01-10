import React, { Component, Fragment } from 'react';
import {Link} from '@reach/router';
import * as api from './api';

class Users extends Component {
  state = { users: [] }
  render() {
    const { users } = this.state;
    return (
      <div>
        <h2>Users</h2>
          <ul>
            { users.map(user => {
              return <Fragment key={user.user_id}>
                <li>
                  <h4>{user.username}</h4>
                    <img src={users.avatar_url} alt='user avatar'/><br/>
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