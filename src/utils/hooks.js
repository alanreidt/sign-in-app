import { useState, useContext } from 'react';

import fakeAuth from './fakeAuth';
import { authContext } from './constants';

function useProvideAuth() {
  const [user, setUser] = useState(null);

  const signInWithEmailAndPassword = async (email, password) => {
    const user = await fakeAuth.signInWithEmailAndPassword(email, password);

    setUser(user);

    return user;
  };

  const signout = cb => {
    return fakeAuth.signout(() => {
      setUser(null);
      cb();
    });
  };

  return {
    user,
    signInWithEmailAndPassword,
    signout
  };
}

function useAuth() {
  return useContext(authContext);
}

export {
  useProvideAuth,
  useAuth,
}
