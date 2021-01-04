import { useState } from 'react';
import { useHistory, useLocation } from 'react-router-dom';
import styled from 'styled-components';

import { BREAKPOINTS } from "../utils/cssVariables";
import { useAuth } from '../utils/hooks';
import { RIGHT_CREDENTIALS } from '../utils/constants';

import Box from './Box';
import Input from './Input';
import PasswordInput from './PasswordInput';
import Container from './Container';
import Button from './Button';

const StyledBox = styled(Box)`
  padding: 14px 20px;

  @media (${BREAKPOINTS.tablet}) {
    padding: 12px 16px;
  }

  @media (${BREAKPOINTS.mobile}) {
    padding: 10px 12px;
  }

  background-color: #e6f3ff;
  border: 1px solid #333;
`;

const FormItem = styled.div`
  margin-bottom: 15px;

  @media (${BREAKPOINTS.mobile}) {
    margin-bottom: 10px;
  }
`;

const FormFooter = styled.div`
  margin-top: 30px;

  @media (${BREAKPOINTS.mobile}) {
    margin-bottom: 20px;
  }
`;

const Error = styled.p`
  display: ${(props) => props.show ? 'block' : 'none'};
  margin-top: 0;
  margin-bottom: 0;

  color: red;
`;

function SignInBox(props) {
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

  const handleHelpButtonClick = () => {
    setEmail(RIGHT_CREDENTIALS.email);
    setPassword(RIGHT_CREDENTIALS.password);
  }

  const createInputHandler = (setStateAction) => (event) => {
    setShowWrongCredentialsError(false);

    const value = event.currentTarget.value;

    setStateAction(value);
  };

  const handleEmailChange = createInputHandler(setEmail);
  const handlePasswordChange = createInputHandler(setPassword);

  return (
    <StyledBox maxWidth="450px" {...props}>
      <form onSubmit={handleFormSubmit}>
        <FormItem>
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
            autoFocus={true}
            required={true}
          />
        </FormItem>

        <FormItem>
          <PasswordInput
            onChange={handlePasswordChange}
            value={password}
            required={true}
          />
        </FormItem>

        <FormItem>
          <Error show={showWrongCredentialsError}>
            Wrong email or password
          </Error>
        </FormItem>

        <FormFooter>
          <Container flexFlow="row wrap" alignItems="center" justifyContent="space-between">
            <Button
              primitive
              type="button"
              onClick={handleHelpButtonClick}
            >
              Insert right credentials
            </Button>

            <Button>Sign in</Button>
          </Container>
        </FormFooter>
      </form>
    </StyledBox>
  );
}

export default SignInBox;
