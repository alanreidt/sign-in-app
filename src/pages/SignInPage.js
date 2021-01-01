import { useState } from 'react';
import { useHistory, useLocation } from 'react-router-dom';
import styled from 'styled-components';

import { useAuth } from '../App';
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

function SignInPage() {
  const history = useHistory();
  const location = useLocation();
  const auth = useAuth();

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [areCredentialsWrong, setAreCredentialsWrong] = useState(false);

  const { from } = location.state || { from: { pathname: '/' } };

  const handleFormSubmit = async (event) => {
    event.preventDefault();

    const user = await auth.signInWithEmailAndPassword(email, password);

    if (user === null) {
      setAreCredentialsWrong(true);
      return;
    }

    history.replace(from);
  };

  const createInputHandler = (setStateAction) => (event) => {
    setAreCredentialsWrong(false);

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

            <Error show={areCredentialsWrong}>
              Wrong email or password
            </Error>

            <Button>Sign in</Button>
          </Spacing>
        </form>
      </Box>
    </Page>
  );
}

export default SignInPage;
