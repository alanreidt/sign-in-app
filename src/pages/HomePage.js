import { useState } from 'react';
import styled from 'styled-components';

import Page from '../components/Page';
import Box from '../components/Box';
import Input from '../components/Input';
import Button from '../components/Button';

const RIGHT_CREDENTIALS = {
  email: 'joshakins@gmail.com',
  password: 'pumpkinjuice',
};

const checkCredentialsRightness = (credentials) => Object.entries(RIGHT_CREDENTIALS).every(
  ([key, value]) => value === credentials[key]
);

const Spacing = styled.div`
  & > *:not(:last-child) {
    margin-bottom: ${(props) => props.vertical || '10px'};
  }
`;

const Error = styled.p`
  display: ${(props) => props.show ? 'block' : 'none'};
  color: red;
`;

function HomePage() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [areCredentialsWrong, setAreCredentialsWrong] = useState(false);

  const createInputHandler = (setStateAction) => (event) => {
    const value = event.currentTarget.value;

    setStateAction(value);
  };

  const handleEmailChange = createInputHandler(setEmail);
  const handlePasswordChange = createInputHandler(setPassword);

  const handleFormSubmit = (event) => {
    event.preventDefault();

    setAreCredentialsWrong(!checkCredentialsRightness({
      email,
      password,
    }));
  };

  return (
    <Page>
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

            <Input
              onChange={handlePasswordChange}
              labelText="Password:"
              type="password"
              value={password}
              id="password"
              name="password"
              placeholder="Enter your password"
              autoComplete="current-password"
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

export default HomePage;
