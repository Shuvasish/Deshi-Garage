import React, { useContext } from "react";
import { UserContext } from "../../App";
import { Route, Redirect } from "react-router-dom";

function PrivateRoute({ children, ...rest }) {
  const { user } = useContext(UserContext);
  const { email } = user;

  return (
    <Route
      {...rest}
      render={({ location }) =>
        true ? (
          children
        ) : (
          <Redirect
            to={{
              pathname: "/login",
              state: { from: location },
            }}
          />
        )
      }
    />
  );
}

export default PrivateRoute;
