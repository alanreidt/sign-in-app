import React from 'react';
import {
  Route,
  Redirect,
} from 'react-router-dom';

import { useAuth } from '../utils/hooks';

function PrivateRoute({ children, ...rest }) {
  let auth = useAuth();
  return (
    <Route
      {...rest}
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
