import React, { Fragment } from "react";
import MediaQuery from "react-responsive";
import "./header.css";

const Header = ({ logout, user }) => {
  return (
    <Fragment>
      <header>
        <h1 className="title is-1">NC News</h1>
      </header>
      <MediaQuery query="(min-device-width: 390px)">
        <div className="user_info">
          {user.user_id && (
            <button className="button is-danger" onClick={logout}>
              Logout
            </button>
          )}
        </div>
      </MediaQuery>
      <MediaQuery query="(max-device-width: 390px)">
        <div className="user_info">
          {user.user_id && (
            <button className="button is-danger is-small" onClick={logout}>
              Logout
            </button>
          )}
        </div>
      </MediaQuery>
    </Fragment>
  );
};

export default Header;
