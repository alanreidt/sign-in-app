import { useState } from 'react';
import { useHistory, useLocation } from 'react-router-dom';
import styled from 'styled-components';

import { useAuth } from '../utils/hooks';
import Page from '../components/Page';
import Box from '../components/Box';
import Input from '../components/Input';
import PasswordInput from '../components/PasswordInput';
import Button from '../components/Button';

const Spacing = styled.div`
  & > *:not(:last-child) {
    margin-bottom: ${(props) => props.vertical || '10px'};
  }
`;

const Error = styled.p`
  display: ${(props) => props.show ? 'block' : 'none'};
  color: red;
`;

const SignInPageButton = styled.div`
  display: flex;
  justify-content: flex-end;
`;

function SignInPage() {
  const history = useHistory();
  const location = useLocation();
  const auth = useAuth();

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showWrongCredentialsError, setShowWrongCredentialsError] = useState(false);

  const { from } = location.state || { from: { pathname: '/' } };

  const handleFormSubmit = async (event) => {
    event.preventDefault();

    const user = await auth.signInWithEmailAndPassword(email, password);

    if (user === null) {
      setShowWrongCredentialsError(true);
      return;
    }

    history.replace(from);
  };

  const createInputHandler = (setStateAction) => (event) => {
    setShowWrongCredentialsError(false);

    const value = event.currentTarget.value;

    setStateAction(value);
  };

  const handleEmailChange = createInputHandler(setEmail);
  const handlePasswordChange = createInputHandler(setPassword);

  return (
    <Page>
      <Box maxWidth={450}>
        <p>You must log in to view the page at {from.pathname}</p>

        <form onSubmit={handleFormSubmit}>
          <Spacing vertical="15px">
            <Input
              onChange={handleEmailChange}
              labelText="Email:"
              type="email"
              value={email}
              id="email"
              name="email"
              placeholder="georgerowlett@example.com"
              spellCheck="false"
              autoComplete="email"
              required={true}
            />

            <PasswordInput
              onChange={handlePasswordChange}
              value={password}
              required={true}
            />

            <Error show={showWrongCredentialsError}>
              Wrong email or password
            </Error>

            <SignInPageButton>
              <Button>Sign in</Button>
            </SignInPageButton>
          </Spacing>
        </form>
      </Box>
    </Page>
  );
}

export default SignInPage;
