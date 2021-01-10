import { Link } from 'react-router-dom';
import styled from 'styled-components';

import { useAuth } from '../utils/hooks';
import Box from '../components/Box';
import Message from '../components/Message';
import Page from '../components/Page';
import SignInBox from '../components/SignInBox';

const StyledSignInBox = styled(SignInBox)`
  margin-bottom: 20px;
`;

function SignInPage() {
  const auth = useAuth();

  return (
    <Page>
      {auth.user ? (
        <Message>
          You are already signed in
        </Message>
      ) : (
        <>
          <StyledSignInBox />

          <Box>
            Don't have an account? <Link to="sign-up">Sign up</Link>
          </Box>
        </>
      )}
    </Page>
  );
}

export default SignInPage;
