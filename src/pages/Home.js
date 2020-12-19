import Box from '../components/Box';

function Home() {
  const sx = {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    minHeight: '100vh',
  };

  return (
    <div style={sx}>
      <Box>
        Home is loaded
      </Box>
    </div>
  );
}

export default Home;
