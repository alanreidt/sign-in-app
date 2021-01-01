import { checkCredentialsRightness } from "./helpers";

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

    fakeAuth.isAuthenticated = true;

    return 'user';
  },
  signout(cb) {
    fakeAuth.isAuthenticated = false;
    setTimeout(cb, 100);
  }
};

export default fakeAuth;
