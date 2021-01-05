import {
  useState,
  useEffect,
  useCallback,
  useContext,
} from 'react';

import fakeAuth from './fakeAuth';
import { authContext } from './constants';

function useProvideAuth() {
  const [user, setUser] = useState(null);

  const signInWithEmailAndPassword = async (email, password) => {
    const user = await fakeAuth.signInWithEmailAndPassword(email, password);

    setUser(user);

    return user;
  };

  const signout = async () => {
    await fakeAuth.signout();

    setUser(null);
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

function useAsync(asyncFunction, immediate = true) {
  const [status, setStatus] = useState('idle');
  const [value, setValue] = useState(null);
  const [error, setError] = useState(null);

  const execute = useCallback(() => {
    setStatus('pending');
    setValue(null);
    setError(null);

    return asyncFunction()
      .then(response => {
        setValue(response);
        setStatus('success');
      })
      .catch(error => {
        setError(error);
        setStatus('error');
      });
  }, [asyncFunction]);

  useEffect(() => {
    if (immediate) {
      execute();
    }
  }, [execute, immediate]);

  return { execute, status, value, error };
};

export {
  useProvideAuth,
  useAuth,
  useAsync,
}
