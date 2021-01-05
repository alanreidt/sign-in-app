import { checkCredentialsRightness, delay } from './helpers';

const fakeAuth = {
  isAuthenticated: false,
  async signInWithEmailAndPassword(email, password) {
    this.isAuthenticated = true;

    return await checkCredentialsRightness(email, password);
  },
  async signout() {
    this.isAuthenticated = false;

    await delay(1000);

    return true;
  }
};

export default fakeAuth;
