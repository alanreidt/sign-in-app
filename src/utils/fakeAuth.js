import { checkCredentialsRightness } from './helpers';

const fakeAuth = {
  isAuthenticated: false,
  async signInWithEmailAndPassword(email, password) {
    this.isAuthenticated = true;

    return await checkCredentialsRightness(email, password);
  },
  async signOut() {
    this.isAuthenticated = false;

    return true;
  }
};

export default fakeAuth;
