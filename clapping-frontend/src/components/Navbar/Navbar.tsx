import React from 'react';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Box from '@mui/material/Box';
import { styled } from '@mui/material/styles';
import logo from "../../assets/images/clapping-logo/clapping-logo.png"

const Logo = styled('img')({
    width: '150px',
});

const Navbar: React.FC = () => {
    return (         
                <Box display="flex" justifyContent="left" alignItems="center" width="100%">
                    <Logo src={logo} alt="Clapping.me Logo" />
                </Box>
    );
};

export default Navbar;
