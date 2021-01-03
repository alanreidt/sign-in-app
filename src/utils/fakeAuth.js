import { checkCredentialsRightness } from './helpers';

const fakeAuth = {
  isAuthenticated: false,
  signInWithEmailAndPassword(email, password) {
    const areCredentialsRight = checkCredentialsRightness({
      email,
      password,
    });

    if (!areCredentialsRight) {
      return null;
    }

    this.isAuthenticated = true;

    return 'user';
  },
  signout() {
    this.isAuthenticated = false;
  }
};

export default fakeAuth;
