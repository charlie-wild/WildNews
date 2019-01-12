import React, { Fragment} from 'react';
import './header.css';

const Header = ({logout, user}) => {
    return (
    <Fragment>
    <header><h1 className='title is-1'>NC News</h1></header>
    <div className='user_info'>
    {user.user_id &&  <button className='button is-danger' onClick={ logout }>Logout</button> }
    </div>
    </Fragment>

  )
}

export default Header;