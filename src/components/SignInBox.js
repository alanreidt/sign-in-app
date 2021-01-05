import { useEffect, useState } from 'react';
import { useHistory, useLocation } from 'react-router-dom';
import styled from 'styled-components';

import { BREAKPOINTS } from "../utils/cssVariables";

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
    margin-top: 20px;
  }
`;

function SignInBox(props) {
  const {
    signInQuery,
    email,
    password,
    onEmailChange,
    onPasswordChange,
    onHelpButtonClick,
    ...restProps
  } = props;

  const history = useHistory();
  const location = useLocation();

  const [doExecuteSignInQuery, setDoExecuteSignInQuery] = useState(false);

  useEffect(() => {
    if (signInQuery.status === 'success') {
      const { from } = location.state || { from: { pathname: '/success' } };

      history.replace(from);
    }
  });

  useEffect(() => {
    async function executeSignInQuery() {
      await signInQuery.execute();
    }

    if (doExecuteSignInQuery) {
      executeSignInQuery();

      setDoExecuteSignInQuery(false);
    }
  }, [doExecuteSignInQuery, signInQuery]);

  const handleFormSubmit = (event) => {
    event.preventDefault();

    setDoExecuteSignInQuery(true);
  };

  return (
    <StyledBox maxWidth="450px" {...restProps}>
      <form onSubmit={handleFormSubmit}>
        <FormItem>
          <Input
            onChange={onEmailChange}
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
            onChange={onPasswordChange}
            value={password}
            required={true}
          />
        </FormItem>

        <FormFooter>
          <Container
            flexFlow="row wrap"
            alignItems="center"
            justifyContent="space-between"
          >
            <Button
              primitive
              type="button"
              onClick={onHelpButtonClick}
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
