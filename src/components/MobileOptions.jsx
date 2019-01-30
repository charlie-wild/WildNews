import React from "react";
import { Link } from "@reach/router";
import "./mobileoptions.css";

const MobileOptions = () => {
  return (
    <div>
      <h1 className="option_header">Options</h1>
      <div className="option_table">
        <Link to="/topics">
          <h2>View All Topics</h2>
        </Link>
        <Link to="/users">
          <h2>View All Users</h2>
        </Link>
        <Link to="/create_topic">
          <h2>Create Topic</h2>
        </Link>
        <Link to="/create_article">
          <h2>Create Article</h2>
        </Link>
      </div>
    </div>
  );
};

export default MobileOptions;
