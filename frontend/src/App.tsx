import React from 'react';
import { ThemeProvider, CssBaseline } from '@mui/material';
import { theme } from './config/theme';
import { UserProvider } from './context/UserContext';
import { Home } from './pages/Home';
import './App.css';

export const App: React.FC = () => {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <UserProvider>
        <div className="app-container">
          <Home />
        </div>
      </UserProvider>
    </ThemeProvider>
  );
};

export default App;
