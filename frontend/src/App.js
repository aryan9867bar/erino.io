import React, { createContext, useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import { CssBaseline } from '@mui/material';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Home from './pages/Home';

export const ThemeContext = createContext();

function App() {
  const [darkMode, setDarkMode] = useState(false);

  const theme = createTheme({
    palette: {
      mode: darkMode ? 'dark' : 'light',
      primary: { main: '#6200ea' },
      secondary: { main: '#03dac6' },
      background: {
        paper: darkMode ? '#424242' : '#ffffff',
        default: darkMode ? '#303030' : '#fafafa',
      },
      text: {
        primary: darkMode ? '#ffffff' : '#000000',
        secondary: darkMode ? '#bcbcbc' : '#555555',
      },
    },
  });

  return (
    <ThemeContext.Provider value={{ darkMode, setDarkMode }}>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <Router>
          <Routes>
            <Route path="/" element={<Home />} />
          </Routes>
        </Router>
        {/* Toastify Container */}
        <ToastContainer position="top-right" autoClose={3000} />
      </ThemeProvider>
    </ThemeContext.Provider>
  );
}

export default App;
