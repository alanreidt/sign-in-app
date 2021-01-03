import React from 'react';
import { Link } from 'react-router-dom';

import { useAuth } from '../utils/hooks';

function AuthButton() {
  const auth = useAuth();

  const handleSignOutLinkClick = () => {
    auth.signout();
  }

  return auth.user
    ? (
      <Link to="/" onClick={handleSignOutLinkClick}>Sign out</Link>
    ) : (
      <Link to="/sign-in">Sign in</Link>
    );
}

export default AuthButton;
