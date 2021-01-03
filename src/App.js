import React from 'react';
import {
  Switch,
  Route,
  Link,
  useLocation,
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

  @media(max-width: 450px) {
    padding-left: 10px;
    padding-right: 10px;
  }
`;

const Logo = styled.h1`
  margin-top: 0;
  margin-bottom: 0;

  font-size: 24px;
  font-weight: 700;
  color: #000;
  text-decoration: none;

  @media(max-width: 768px) {
    font-size: 20px;
  }
`;

const containerMaxWidth = '1120px';

function App() {
  const location = useLocation();
  const mainPagePathname = '/';
  const isMainPage = location.pathname === '/';

  return (
    <div className="App">
      <NavBar>
        <StyledContainer
          flexFlow="row nowrap"
          alignItems="center"
          justifyContent="space-between"
          maxWidth={containerMaxWidth}
        >
          <Logo as={isMainPage ? 'h1' : Link} to={mainPagePathname}>Sign In App</Logo>

          <AuthButton />
        </StyledContainer>
      </NavBar>

      <main>
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
      </main>
    </div>
  );
}

export default App;
