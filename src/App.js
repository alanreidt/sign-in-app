import React from 'react';
import {
  Switch,
  Route,
  Link,
} from 'react-router-dom';
import styled from 'styled-components';

import Container from './components/Container';
import NavBar from './components/NavBar';
import AuthButton from './components/AuthButton';
import PrivateRoute from './components/PrivateRoute';
import SignUpPage from './pages/SignUpPage';
import SignInPage from './pages/SignInPage';
import SignInAccountsPage from './pages/SignInAccountsPage';
import PasswordRecoveryPage from './pages/PasswordRecoveryPage';
import SuccessPage from './pages/SuccessPage';
import HomePage from './pages/HomePage';

const StyledContainer = styled(Container)`
  padding-left: 30px;
  padding-right: 30px;

  @media(max-width: 1024px) {
    padding-left: 20px;
    padding-right: 20px;
  }
`;

const containerMaxWidth = '1120px';

function App() {
  return (
    <div className="App">
      <NavBar>
        <StyledContainer
          flexFlow="row nowrap"
          justifyContent="space-between"
          maxWidth={containerMaxWidth}
        >
          <ul>
            <li>
              <Link to="/">Home (public page)</Link>
            </li>
            <li>
              <Link to="/success">Success (protected page)</Link>
            </li>
          </ul>

          <AuthButton />
        </StyledContainer>
      </NavBar>

      <StyledContainer maxWidth={containerMaxWidth}>
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
      </StyledContainer>
    </div>
  );
}

export default App;
