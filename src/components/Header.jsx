import React, { Fragment} from 'react';
import { Link } from '@reach/router';
import './header.css';

const Header = ({logout, user}) => {
    return (
    <Fragment>
     <p className='logged_user'>Logged in as:<Link to={`/users/${user.username}`}>{user.username}</Link></p>
    <header><h1 className='title is-1'>NC News</h1></header>
    <div className='user_info'>
    {user.user_id && <button className='button is-danger' onClick={ logout }>Logout</button> }
    </div>
    </Fragment>

  )
}

export default Header;