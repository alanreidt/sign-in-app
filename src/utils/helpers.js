import { RIGHT_CREDENTIALS } from './constants';

const checkCredentialsRightness = (credentials) => Object.entries(RIGHT_CREDENTIALS).every(
  ([key, value]) => value === credentials[key]
);

export {
  checkCredentialsRightness,
}
