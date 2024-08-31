import React from 'react';
import { Box, styled, Typography } from '@mui/material';
import clappingPeople from '../../assets/images/clapping-image/clapping.png'

// PolygonComponent Styled Component
export const PolygonComponent = styled(Box)(({ theme }) => ({
    position: 'absolute',
    top: '700px', // Adjust this value for large screens
    left: '50%', // Center it horizontally
    transform: 'translateX(-50%)', // Center alignment
    width: '100%',
    height: '70%',
    background: 'transparent',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',

    '&::before': {
        content: '""',
        position: 'absolute',
        top: 0,
        left: 0,
        width: '50%',
        height: '100%',
        backgroundColor: '#0a2289',
        clipPath: 'polygon(0 0, 100% 22%, 100% 80%, 0% 100%)',
        zIndex: 1,
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
        zIndex: 1,
    },

    // For medium screens (tablets)
    [theme.breakpoints.down('md')]: {
        top: '969px', // Adjust top position for medium screens
        '&::before': {
            clipPath: 'polygon(0 0, 100% 18%, 100% 82%, 0% 100%)', // Adjust the polygon shape
        },
        '&::after': {
            clipPath: 'polygon(0% 18%, 100% 0, 100% 100%, -1% 82%)', // Adjust the polygon shape
        },
    },

    // For small screens (mobile)
    [theme.breakpoints.down('sm')]: {
        flexDirection: 'column', // Stack content vertically on small screens
        top: '646px', // Adjust top position for small screens
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

// Content Wrapper
const ContentWrapper = styled(Box)(({ theme }) => ({
    position: 'relative',
    zIndex: 2, // Make sure content is above the background shapes
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    width: '100%',
    maxWidth: '1200px', // Limit the content width for large screens

    // Stack content vertically on small screens
    [theme.breakpoints.down('sm')]: {
        flexDirection: 'column',
    },
}));

const ImageContainer = styled(Box)(({ theme }) => ({
    flex: 1,
    padding: theme.spacing(2),
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    maxWidth: '100%', // Ensure image doesn't overflow
    img: {
        maxWidth: '100%',
        height: 'auto', // Maintain aspect ratio
        borderRadius: '16px',
    },
}));

// Updated Text Container
const TextContainer = styled(Box)(({ theme }) => ({
    flex: 1,
    padding: theme.spacing(2),
    color: '#fff',
    textAlign: 'center',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',

    [theme.breakpoints.down('sm')]: {
        marginTop: theme.spacing(2),
    },
}));

// ShoutOutRepository Component
const ShoutOutRepository: React.FC = () => {
    return (
        <PolygonComponent>
            <ContentWrapper>
                <ImageContainer>
                    <img src={clappingPeople} alt="Shoutout" />
                </ImageContainer>
                <TextContainer>
                    <Typography variant="h4" component="h2">
                        The shoutout repository
                    </Typography>
                    <Typography variant="body1">
                        Share your personal URL with colleagues, friends, and workshop attendees. They can use it to give you heartfelt shoutouts by recognizing your hard work, dedication, and the impact you’ve made.
                    </Typography>
                </TextContainer>
            </ContentWrapper>
        </PolygonComponent>
    );
};

export default ShoutOutRepository;
