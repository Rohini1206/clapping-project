import React from 'react';
import { Box, Button, InputBase, styled } from '@mui/material';

// Container for the entire section to center the content
const CenterContainer = styled(Box)(({ theme }) => ({
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
   // height: '100vh',
    width: '100%',
}));

// Container for the input and button
const ClaimLinkContainer = styled(Box)(({ theme }) => ({
    display: 'flex',
    alignItems: 'center',
    backgroundColor: '#FFFFFF',
    borderRadius: '50px',
    boxShadow: '0px 4px 15px rgba(255, 75, 92, 0.4)',
    width: '600px', // Adjusted width for larger design
    overflow: 'hidden',
    [theme.breakpoints.down('sm')]: {
        width: '100%', // Responsive for smaller screens
    },
}));

// Styled Input
const StyledInput = styled(InputBase)(({ theme }) => ({
    padding: '15px 25px', // Increased padding for larger design
    flex: 1,
    fontSize: '18px', // Increased font size
    color: '#FF6D6C', // Grey color as shown in the design
    backgroundColor: 'transparent',
    border: 'none',
    outline: 'none',
}));

// Styled Button
const ClaimButton = styled(Button)(({ theme }) => ({
    backgroundColor: '#FF4B5C',
    color: '#FFFFFF',
    padding: '15px 30px', // Increased padding for larger button
    borderRadius: '0 50px 50px 0',
    textTransform: 'none',
    fontSize: '18px', // Increased font size
    '&:hover': {
        backgroundColor: '#E63946',
    },
}));

const ClaimLink: React.FC = () => {
    return (
        <CenterContainer>
            <ClaimLinkContainer>
                <StyledInput placeholder="clapping.me/yourname" />
                <ClaimButton>Claim Your Brand Link</ClaimButton>
            </ClaimLinkContainer>
        </CenterContainer>
    );
};

export default ClaimLink;
