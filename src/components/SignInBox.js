import { useState } from 'react';
import { useHistory, useLocation } from 'react-router-dom';
import styled from 'styled-components';

import { useAuth } from '../utils/hooks';
import Box from './Box';
import Input from './Input';
import PasswordInput from './PasswordInput';
import Container from './Container';
import Button from './Button';

const Spacing = styled.div`
  & > *:not(:last-child) {
    margin-bottom: ${(props) => props.vertical || '10px'};
  }
`;

const Error = styled.p`
  display: ${(props) => props.show ? 'block' : 'none'};
  color: red;
`;

function SignInBox() {
  const history = useHistory();
  const location = useLocation();
  const auth = useAuth();

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showWrongCredentialsError, setShowWrongCredentialsError] = useState(false);


  const handleFormSubmit = async (event) => {
    event.preventDefault();

    const user = await auth.signInWithEmailAndPassword(email, password);

    if (user === null) {
      setShowWrongCredentialsError(true);
      return;
    }

    const { from } = location.state || { from: { pathname: '/success' } };

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
    <Box maxWidth={450}>
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

          <Container alignItems="flex-end">
            <Button>Sign in</Button>
          </Container>
        </Spacing>
      </form>
    </Box>
  );
}

export default SignInBox;
