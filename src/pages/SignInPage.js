import { useState } from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

import { useAuth, useAsync } from '../utils/hooks';

import Box from '../components/Box';
import Page from '../components/Page';
import SignInBox from '../components/SignInBox';
import { RIGHT_CREDENTIALS } from '../utils/constants';

const Error = styled(Box)`
  display: inline-block;
  vertical-align: top;
  width: auto;
  max-width: 450px;
  height: 54px;

  padding: 15px 20px;
  margin-bottom: 20px;

  overflow: auto;

  visibility: ${(props) => props.show ? 'visible' : 'hidden'};
  background-color: #ffe3e6;
  border-color: #ebbcbf;
`;

const StyledSignInBox = styled(SignInBox)`
  margin-bottom: 20px;
`;

function SignInPage() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const auth = useAuth();
  const signInQuery = useAsync(
    () => auth.signInWithEmailAndPassword(email, password),
    false
  );

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
    <Page>
      <Error show={signInQuery.status === 'error'}>
        {signInQuery.error}
      </Error>

      <StyledSignInBox
        signInQuery={signInQuery}
        email={email}
        password={password}
        onEmailChange={handleEmailChange}
        onPasswordChange={handlePasswordChange}
        onHelpButtonClick={handleHelpButtonClick}
      />

      <Box>
        Don't have an account? <Link to="sign-up">Sign up</Link>
      </Box>
    </Page>
  );
}

export default SignInPage;
