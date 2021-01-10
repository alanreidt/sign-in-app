import { useEffect, useState } from 'react';
import { useHistory, useLocation } from 'react-router-dom';
import styled, { css } from 'styled-components';

import { BREAKPOINTS } from "../utils/cssVariables";
import { useAuth, useAsync } from '../utils/hooks';
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
  margin-bottom: 0;

  ${(props) => !props.last && css`
    margin-bottom: 15px;

    @media (${BREAKPOINTS.mobile}) {
      margin-bottom: 10px;
    }
  `}
`;

const FormFooter = styled.div`
  position: relative;

  padding-top: 2rem;
`;

const Error = styled.p`
  position: absolute;
  top: 0;
  left: 0;

  display: block;
  height: 1.5rem;
  margin-top: 0;
  margin-bottom: 0;

  font-size: 1rem;
  line-height: 1.5;

  color: red;
  overflow: auto;
  visibility: ${(props) => props.show ? 'visible' : 'hidden'};
  opacity: ${(props) => props.show ? '1' : '0'};

  transition: opacity 0.3s ease;
`;

function SignInBox(props) {
  const history = useHistory();
  const location = useLocation();
  const auth = useAuth();

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [doExecuteSignInQuery, setDoExecuteSignInQuery] = useState(false);
  const signInQuery = useAsync(
    () => auth.signInWithEmailAndPassword(email, password),
    false
  );

  useEffect(() => {
    if (doExecuteSignInQuery) {
      signInQuery.execute();
    }

    return () => {
      setDoExecuteSignInQuery(false);
    };
  });

  useEffect(() => {
    if (signInQuery.status === 'success') {
      const { from } = location.state || { from: { pathname: '/success' } };

      history.replace(from);
    }
  });

  const handleFormSubmit = (event) => {
    event.preventDefault();

    setDoExecuteSignInQuery(true);
  };

  const handleHelpButtonClick = () => {
    setEmail(RIGHT_CREDENTIALS.email);
    setPassword(RIGHT_CREDENTIALS.password);
  }

  const createInputHandler = (setStateAction) => (event) => {
    const inputValue = event.currentTarget.value;

    setStateAction(inputValue);
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

        <FormItem last>
          <PasswordInput
            onChange={handlePasswordChange}
            value={password}
            required={true}
          />
        </FormItem>

        <FormFooter>
          <Error show={signInQuery.status === 'error'}>
            {signInQuery.error}
          </Error>

          <Container
            flexFlow="row wrap"
            alignItems="center"
            justifyContent="space-between"
          >
            <Button
              primitive
              type="button"
              onClick={handleHelpButtonClick}
            >
              Insert right credentials
            </Button>

            <Button disabled={signInQuery.status === 'pending'}>
              {signInQuery.status === 'pending' ? 'Loading...' : 'Sign In'}
            </Button>
          </Container>
        </FormFooter>
      </form>
    </StyledBox>
  );
}

export default SignInBox;
