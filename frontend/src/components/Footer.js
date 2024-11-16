import React from 'react';
import { Box } from '@mui/material';

const Footer = () => {
  return (
    <Box
      sx={{
        backgroundColor: '#6200ea',
        color: '#fff',
        textAlign: 'center',
        padding: '10px 0',
        marginTop: '20px',
        position: 'relative',
        bottom: 0,
        width: '100%',
      }}
    >
      &copy; {new Date().getFullYear()} Aryan Baranwal. All rights reserved.
    </Box>
  );
};

export default Footer;


