import { createContext } from 'react';

const RIGHT_CREDENTIALS = {
  email: 'joshakins@gmail.com',
  password: 'pumpkinjuice',
};

const authContext = createContext();

export {
  RIGHT_CREDENTIALS,
  authContext,
}
