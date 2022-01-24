import React from "react";
import { Link } from "react-router-dom";
import Button from "@material-ui/core/Button";
export default ({ isSignedIn, onSignOut }) => {
  return (
    <h3>
      <Link to="/">
        <Button variant="text">App</Button>
      </Link>
      <div style={{ float: "right" }}>
        <Link to="/auth/signin">
          <Button variant="outlined" color="primary" onClick={onSignOut}>
            {isSignedIn ? "Logout" : "Login"}
          </Button>
        </Link>
      </div>
    </h3>
  );
};
