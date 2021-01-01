import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
} from 'react-router-dom';

import ProvideAuth from './components/ProvideAuth';
import AuthButton from './components/AuthButton';
import PrivateRoute from './components/PrivateRoute';
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
