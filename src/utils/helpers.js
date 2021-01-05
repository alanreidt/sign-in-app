import { RIGHT_CREDENTIALS } from './constants';

const delay = (ms) => new Promise((resolve) => {
  setTimeout(() => resolve(), ms);
});

async function getUserByEmailAndPassword(email, password) {
  const isCredentialsRight = (
    email === RIGHT_CREDENTIALS.email
    && password === RIGHT_CREDENTIALS.password
  );

  await delay(1000);

  return isCredentialsRight ? 'user' : null;
}

function checkCredentialsRightness(email, password) {
  return new Promise(async (resolve, reject) => {
    const user = await getUserByEmailAndPassword(email, password);

    if (user === null) {
      reject('Wrong email or password 😞');
    }

    resolve(user);
  });
};

export {
  delay,
  checkCredentialsRightness,
}
