import React from 'react';
import { useHistory } from 'react-router-dom';

import { useAuth } from '../utils/hooks';
import Button from './Button';

function AuthButton() {
  const history = useHistory();
  const auth = useAuth();

  const handleSignOutButtonClick = () => {
    auth.signout(() => history.push("/"));
  }

  return auth.user ? (
    <Button onClick={handleSignOutButtonClick}>Sign out</Button>
  ) : (
      <p>You are not logged in.</p>
    );
}

export default AuthButton;
