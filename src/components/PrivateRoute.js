import React from 'react';
import {
  Route,
  Redirect,
} from 'react-router-dom';

import { useAuth } from '../utils/hooks';

function PrivateRoute(props) {
  const {
    children,
    ...restProps
  } = props;

  const auth = useAuth();

  return (
    <Route
      {...restProps}
      render={({ location }) => auth.user ? (
        children
      ) : (
          <Redirect
            to={{
              pathname: "/sign-in",
              state: { from: location }
            }} />
        )} />
  );
}

export default PrivateRoute;
