import React, { useContext, createContext, useState } from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  Redirect,
  useHistory,
} from "react-router-dom";

import SignUpPage from './pages/SignUpPage';
import SignInPage from './pages/SignInPage';
import SignInAccountsPage from './pages/SignInAccountsPage';
import PasswordRecoveryPage from './pages/PasswordRecoveryPage';
import SuccessPage from './pages/SuccessPage';
import HomePage from './pages/HomePage';

function App() {
  return (
    <ProvideAuth>
      <Router>
        <div className="App">
          <AuthButton />

          <ul>
            <li>
              <Link to="/">Home (public page)</Link>
            </li>
            <li>
              <Link to="/success">Success (protected page)</Link>
            </li>
          </ul>

          <Switch>
            <Route path="/sign-up">
              <SignUpPage/>
            </Route>
            <Route path="/sign-in">
              <SignInPage/>
            </Route>
            <Route path="/sign-in-accounts">
              <SignInAccountsPage/>
            </Route>
            <Route path="/password-recovery">
              <PasswordRecoveryPage/>
            </Route>
            <PrivateRoute path="/success">
              <SuccessPage/>
            </PrivateRoute>
            <Route path="/">
              <HomePage/>
            </Route>
          </Switch>
        </div>
      </Router>
    </ProvideAuth>
  );
}

export default App;

// This example has 3 pages: a public page, a protected
// page, and a login screen. In order to see the protected
// page, you must first login. Pretty standard stuff.
//
// First, visit the public page. Then, visit the protected
// page. You're not yet logged in, so you are redirected
// to the login page. After you login, you are redirected
// back to the protected page.
//
// Notice the URL change each time. If you click the back
// button at this point, would you expect to go back to the
// login page? No! You're already logged in. Try it out,
// and you'll see you go back to the page you visited
// just *before* logging in, the public page.

const RIGHT_CREDENTIALS = {
  email: 'joshakins@gmail.com',
  password: 'pumpkinjuice',
};

const checkCredentialsRightness = (credentials) => Object.entries(RIGHT_CREDENTIALS).every(
  ([key, value]) => value === credentials[key]
);

const fakeAuth = {
  isAuthenticated: false,
  signInWithEmailAndPassword(email, password) {
    const areCredentialsRight = checkCredentialsRightness({
      email,
      password,
    });

    if (!areCredentialsRight) {
      return null;
    }

    fakeAuth.isAuthenticated = true;

    return 'user';
  },
  signout(cb) {
    fakeAuth.isAuthenticated = false;
    setTimeout(cb, 100);
  }
};

/** For more details on
 * `authContext`, `ProvideAuth`, `useAuth` and `useProvideAuth`
 * refer to: https://usehooks.com/useAuth/
 */
const authContext = createContext();

function ProvideAuth({ children }) {
  const auth = useProvideAuth();
  return (
    <authContext.Provider value={auth}>
      {children}
    </authContext.Provider>
  );
}

export function useAuth() {
  return useContext(authContext);
}

function useProvideAuth() {
  const [user, setUser] = useState(null);

  const signInWithEmailAndPassword = async (email, password) => {
    const user = await fakeAuth.signInWithEmailAndPassword(email, password);

    setUser(user);

    return user;
  };

  const signout = cb => {
    return fakeAuth.signout(() => {
      setUser(null);
      cb();
    });
  };

  return {
    user,
    signInWithEmailAndPassword,
    signout
  };
}

function AuthButton() {
  let history = useHistory();
  let auth = useAuth();

  return auth.user ? (
    <p>
      Welcome!{" "}
      <button
        onClick={() => {
          auth.signout(() => history.push("/"));
        }}
      >
        Sign out
      </button>
    </p>
  ) : (
    <p>You are not logged in.</p>
  );
}

// A wrapper for <Route> that redirects to the login
// screen if you're not yet authenticated.
function PrivateRoute({ children, ...rest }) {
  let auth = useAuth();
  return (
    <Route
      {...rest}
      render={({ location }) =>
        auth.user ? (
          children
        ) : (
          <Redirect
            to={{
              pathname: "/sign-in",
              state: { from: location }
            }}
          />
        )
      }
    />
  );
}
