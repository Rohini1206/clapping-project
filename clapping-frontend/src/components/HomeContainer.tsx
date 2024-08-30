import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Paper from "@mui/material/Paper";
import { styled } from "@mui/material/styles";
import Typography from "@mui/material/Typography";

export const HomeContainer = styled(Box)(({ theme }) => ({
    position: 'relative',
    width: '100%',
    minHeight: '100vh',
    background: `transparent url('/img/v960-ning-29.png') no-repeat center center/cover`,
    [theme.breakpoints.down('sm')]: {
        backgroundSize: 'contain',
        height: 'auto',
    },
}));

export const Section = styled(Box)(({ theme }) => ({
    padding: theme.spacing(6),
    textAlign: 'center',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    height: '100%',
    [theme.breakpoints.down('sm')]: {
        padding: theme.spacing(4),
    },
}));

export const Title = styled(Typography)(({ theme }) => ({
    color: '#0A2289',
    textAlign: 'center',
    fontFamily: 'Roboto, sans-serif',
    fontWeight: 900,
    fontSize: '3rem',
    lineHeight: '1.2',
    letterSpacing: '0px',
    marginBottom: theme.spacing(4),
    [theme.breakpoints.down('sm')]: {
        fontSize: '2rem',
        marginBottom: theme.spacing(2),
    },
}));

export const Subtitle = styled(Typography)(({ theme }) => ({
    color: '#000000',
    textAlign: 'center',
    fontFamily: 'normal normal 300 26px/40px Roboto',
    fontWeight: 300,
    fontSize: '1.5rem',
    lineHeight: '1.5',
    letterSpacing: '0px',
    maxWidth: '80%',
    marginBottom: theme.spacing(4),
    [theme.breakpoints.down('sm')]: {
        fontSize: '1.2rem',
        marginBottom: theme.spacing(2),
    },
}));

// export const ClaimButton = styled(Button)(({ theme }) => ({
//     backgroundColor: '#ff4b5c',
//     color: 'white',
//     padding: theme.spacing(1.5, 4),
//     borderRadius: '50px',
//     fontSize: '1rem',
//     textTransform: 'none',
//     marginTop: theme.spacing(2),
//     '&:hover': {
//         backgroundColor: '#e63946',
//     },
// }));



export const LadyImage = styled('img')(({ theme }) => ({
    position: 'relative',
    top: '30px',  // Default for larger screens
    borderRadius: '50%',  // Ensures the image is circular
    background: 'transparent no-repeat padding-box',
    
    // For medium screens (tablets)
    [theme.breakpoints.down('md')]: {
        width: '600px',
        height: '600px',
        top: '21px',
    },

    // For small screens (mobile)
    [theme.breakpoints.down('sm')]: {
        width: '90%',  // Adjust the size for small screens
        height: 'auto',  // Maintain aspect ratio
        top: '19px', // Adjust top for small screens
    },

    // For extra small screens
    [theme.breakpoints.down('xs')]: {
        width: '80%',
        top: '200px',
    },

    // For screens smaller than 599.95px
    '@media (max-width: 599.95px)': {
        width: '90%',
        height: 'auto',
        top: '19px',
    },
}));



export const FAQSection = styled(Box)(({ theme }) => ({
    marginTop: theme.spacing(6),
    textAlign: 'center',
}));

export const FAQItem = styled(Paper)(({ theme }) => ({
    margin: `${theme.spacing(1)} 0`,
    padding: theme.spacing(2),
    backgroundColor: '#fff',
    borderRadius: '5px',
    boxShadow: theme.shadows[2],
}));


// export const ShoutOutRepository = styled(Box)(({ theme }) => ({
//     position: 'absolute',      // Assuming you want it to be absolutely positioned
//     top: '911px',
//     left: '0.5px',
//     width: '959px',
//     height: '671px',
//     backgroundColor: '#0A2289',
//     opacity: 1,
//     // Add other styles here as needed
// }));