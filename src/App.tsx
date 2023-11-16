import { Box, Stack, ThemeProvider, createTheme } from '@mui/material';
import { Add, Feed, Navbar, Rightbar, Sidebar } from './components';
import { useState } from 'react';

function App() {
  const [mode, setMode] = useState<'light' | 'dark'>('light');

  const toggleMode = () => {
    setMode(mode === 'light' ? 'dark' : 'light');
  };

  const darkTheme = createTheme({
    palette: {
      mode: mode
    }
  });

  return (
    <ThemeProvider theme={darkTheme}>
      <Box bgcolor={'background.default'} color={'text.primary'}>
        <Navbar />
        <Stack direction="row" spacing={2} justifyContent="space-between">
          <Sidebar toggleMode={toggleMode} />
          <Feed />
          <Rightbar />
        </Stack>
        <Add />
      </Box>
    </ThemeProvider>
  );
}

export default App;
