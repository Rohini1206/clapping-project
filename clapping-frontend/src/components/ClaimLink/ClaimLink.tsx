import React from 'react';
import { Box, Button, InputBase, styled } from '@mui/material';

// Container for the input and button
const ClaimLinkContainer = styled(Box)(({ theme }) => ({
    display: 'flex',
    alignItems: 'center',
    backgroundColor: '#FFFFFF',
    borderRadius: '50px',
    boxShadow: '0px 4px 15px rgba(255, 75, 92, 0.4)',
    width: '400px', // Adjust the width as per your design
    overflow: 'hidden',
    [theme.breakpoints.down('sm')]: {
        width: '100%', // Responsive for smaller screens
    },
}));

// Styled Input
const StyledInput = styled(InputBase)(({ theme }) => ({
    padding: '10px 20px',
    flex: 1,
    fontSize: '16px',
    color: '#A9A9A9', // Grey color as shown in the design
    backgroundColor: 'transparent',
    border: 'none',
    outline: 'none',
}));

// Styled Button
const ClaimButton = styled(Button)(({ theme }) => ({
    backgroundColor: '#FF4B5C',
    color: '#FFFFFF',
    padding: '10px 20px',
    borderRadius: '0 50px 50px 0',
    textTransform: 'none',
    fontSize: '16px',
    '&:hover': {
        backgroundColor: '#E63946',
    },
}));

const ClaimLink: React.FC = () => {
    return (
        <ClaimLinkContainer>
            <StyledInput placeholder="clapping.me/yourname" />
            <ClaimButton>Claim Your Brand Link</ClaimButton>
        </ClaimLinkContainer>
    );
};

export default ClaimLink;
