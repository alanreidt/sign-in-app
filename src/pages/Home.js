import { useState } from 'react';

import Box from '../components/Box';
import Input from '../components/Input';
import Button from '../components/Button';

function Home() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const sx = {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    minHeight: '100vh',
  };

  const createInputHandler = (setStateAction) => (event) => {
    const value = event.currentTarget.value;

    setStateAction(value);
  };

  const handleEmailChange = createInputHandler(setEmail);
  const handlePasswordChange = createInputHandler(setPassword);

  return (
    <div style={sx}>
      <Box maxWidth={450}>
        <form>
          <Input
            onChange={handleEmailChange}
            labelText={'Email:'}
            type="email"
            value={email}
            id="email"
            name="email"
            placeholder="georgerowlett@example.com"
            spellCheck="false"
            autoComplete="email"
            required={true}
          />

          <Input
            onChange={handlePasswordChange}
            labelText={'Password:'}
            type="password"
            value={password}
            id="password"
            name="password"
            placeholder="Enter your password"
            autoComplete="current-password"
            required={true}
          />

          <Button>Sign in</Button>
        </form>
      </Box>
    </div>
  );
}

export default Home;
