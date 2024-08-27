import { Box } from '@mui/material';
import React, { ReactNode } from 'react';
import backgroundImg from '../../src/assets/images/background-image/background.png';

interface LayoutProps {
  children: ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <Box
      sx={{
        minHeight: '100vh',
        backgroundImage: `url(${backgroundImg})`, // Corrected this line
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
        backgroundAttachment: 'fixed',
        backgroundPosition: 'center center',
      }}
    >
      {children}
    </Box>
  );
};

export default Layout;
