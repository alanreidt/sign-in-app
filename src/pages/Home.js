import Box from '../components/Box';
import Input from '../components/Input';

function Home() {
  const sx = {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    minHeight: '100vh',
  };

  return (
    <div style={sx}>
      <Box maxWidth={450}>
        <form>
          <Input
            labelText={'Email:'}
            type="email"
            id="email"
            name="email"
            placeholder="georgerowlett@example.com"
            spellCheck="false"
            autoComplete="email"
            required={true}
          />
          <Input
            labelText={'Password:'}
            type="password"
            id="password"
            name="password"
            placeholder="Enter your password"
            autoComplete="current-password"
            required={true}
          />
        </form>
      </Box>
    </div>
  );
}

export default Home;
