import { Link } from 'react-router-dom';
import styled from 'styled-components';

import Box from '../components/Box';
import Page from '../components/Page';
import SignInBox from '../components/SignInBox';

const StyledSignInBox = styled(SignInBox)`
  margin-bottom: 20px;
`;

function SignInPage() {
  return (
    <Page>
      <StyledSignInBox />

      <Box>
        Don't have an account? <Link to="sign-up">Sign up</Link>
      </Box>
    </Page>
  );
}

export default SignInPage;
