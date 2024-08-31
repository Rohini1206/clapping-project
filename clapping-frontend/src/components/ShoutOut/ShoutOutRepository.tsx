import React from 'react';
import { Box, Grid, Typography, styled } from '@mui/material';

// Styled components
const ShoutOutContainer = styled(Box)(({ theme }) => ({
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: theme.spacing(4),
    position: 'relative',
}));

const LeftSection = styled(Box)(({ theme }) => ({
    backgroundColor: '#0A2289', // Blue color for the left section
    width: '50%',
    height: '100%',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    padding: theme.spacing(4),
}));

const RightSection = styled(Box)(({ theme }) => ({
    backgroundColor: '#2FC1FF', // Light blue color for the right section
    width: '50%',
    height: '100%',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    padding: theme.spacing(4),
    textAlign: 'center',
}));

const ImageWrapper = styled(Box)(({ theme }) => ({
    width: '80%',
    height: 'auto',
    borderRadius: theme.shape.borderRadius * 3,
    overflow: 'hidden',
}));

export const PolygonComponent = styled(Box)(({ theme }) => ({
    position: 'absolute',
    top: '881px', // Adjust this value for large screens
    left: '50%', // Center it horizontally
    transform: 'translateX(-50%)', // Center alignment
    width: '100%',
    height: '100%',
    background: 'transparent',

    '&::before': {
        content: '""',
        position: 'absolute',
        top: 0,
        left: 0,
        width: '50%',
        height: '100%',
        backgroundColor: '#0a2289',
        clipPath: 'polygon(0 0, 100% 22%, 100% 80%, 0% 100%)',
    },

    '&::after': {
        content: '""',
        position: 'absolute',
        top: 0,
        right: 0,
        width: '50%',
        height: '100%',
        backgroundColor: '#67C6EF',
        clipPath: 'polygon(0% 22%, 100% 0, 100% 100%, -1% 80%)',
    },

    // For medium screens (tablets)
    [theme.breakpoints.down('md')]: {
        top: '700px', // Adjust top position for medium screens
        '&::before': {
            clipPath: 'polygon(0 0, 100% 18%, 100% 82%, 0% 100%)', // Adjust the polygon shape
        },
        '&::after': {
            clipPath: 'polygon(0% 18%, 100% 0, 100% 100%, -1% 82%)', // Adjust the polygon shape
        },
    },

    // For small screens (mobile)
    [theme.breakpoints.down('sm')]: {
        top: '500px', // Adjust top position for small screens
        '&::before': {
            clipPath: 'polygon(0 0, 100% 15%, 100% 85%, 0% 100%)', // Adjust the polygon shape
        },
        '&::after': {
            clipPath: 'polygon(0% 15%, 100% 0, 100% 100%, -1% 85%)', // Adjust the polygon shape
        },
    },

    // For extra small screens
    [theme.breakpoints.down('xs')]: {
        top: '400px', // Adjust top position for extra small screens
        '&::before': {
            clipPath: 'polygon(0 0, 100% 10%, 100% 90%, 0% 100%)', // Adjust the polygon shape
        },
        '&::after': {
            clipPath: 'polygon(0% 10%, 100% 0, 100% 100%, -1% 90%)', // Adjust the polygon shape
        },
    },
}));


// Main component
const ShoutOutRepository: React.FC = () => {
    return (
        <ShoutOutContainer>
            <LeftSection>
                <ImageWrapper>
                    <img
                        src="/src/assets/images/clapping-image/clapping.png" // Replace with the correct path to your image
                        alt="Shoutout repository"
                        style={{ width: '100%', height: 'auto', objectFit: 'cover' }}
                    />
                </ImageWrapper>
            </LeftSection>
            <RightSection>
                <Typography variant="h5" component="h2" style={{ color: '#FFFFFF', fontWeight: 'bold' }}>
                    The shoutout repository
                </Typography>
                <Typography variant="body1" style={{ color: '#FFFFFF', marginTop: '16px' }}>
                    Share your personal URL with colleagues, friends, and workshop attendees. They can
                    use it to give you heartfelt shoutouts by recognizing your hard work, dedication,
                    and the impact you've made.
                </Typography>
            </RightSection>
        </ShoutOutContainer>
    );
};

export default ShoutOutRepository;
