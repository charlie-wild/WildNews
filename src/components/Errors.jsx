import React from "react";
import { Link } from "@reach/router";

const Errors = () => {
  return (
    <div>
      <p>
        Oh no, an error! You can return to the home page by clicking{" "}
        <Link to="/">here</Link>
      </p>
    </div>
  );
};

export default Errors;
