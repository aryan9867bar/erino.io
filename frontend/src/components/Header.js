import React, { useContext } from 'react';
import { AppBar, Toolbar, Typography, Switch, Box } from '@mui/material';
import { ThemeContext } from '../App';

const Header = () => {
  const { darkMode, setDarkMode } = useContext(ThemeContext);

  const handleToggle = () => {
    setDarkMode(!darkMode);
  };

  return (
    <AppBar position="static" sx={{ backgroundColor: 'primary.main' }}>
      <Toolbar>
        <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
          Aryan Baranwal -- CRM (Customer Relationship Management)
        </Typography>
        <Box display="flex" alignItems="center">
          <Typography variant="body1" sx={{ marginRight: 1 }}>
            {darkMode ? 'Dark Mode' : 'Light Mode'}
          </Typography>
          <Switch
            checked={darkMode}
            onChange={handleToggle}
            inputProps={{ 'aria-label': 'Dark Mode Toggle' }}
          />
        </Box>
      </Toolbar>
    </AppBar>
  );
};

export default Header;
