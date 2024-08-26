import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Paper from "@mui/material/Paper";
import { styled } from "@mui/material/styles";
import Typography from "@mui/material/Typography";

export const HomeContainer = styled(Box)(({ theme }) => ({
    position: 'relative',
    width: '100%',
    minHeight: '100vh',
    background: `transparent url('img/v960-ning-29.png') no-repeat center center/cover`,
    [theme.breakpoints.down('sm')]: {
        backgroundSize: 'contain',
        height: 'auto',
    },
}));

// Exporting other components if needed
export const Section = styled(Box)(({ theme }) => ({
    padding: theme.spacing(6),
    textAlign: 'center',
    backgroundColor: '#f0f4f8',
    [theme.breakpoints.down('sm')]: {
        padding: theme.spacing(4),
    },
}));

export const Title = styled(Typography)(({ theme }) => ({
    position: 'relative', // Assuming the 'top' and 'left' properties require relative positioning
    top: '144px',
    left: '200px',
    width: '1645px',
    height: '155px',
    color: '#0A2289',
    textAlign: 'center',
    fontFamily: 'Roboto, sans-serif',
    fontWeight: 900,
    fontSize: '50px',
    lineHeight: '60px',
    letterSpacing: '0px',
    opacity: 1,
    [theme.breakpoints.down('sm')]: {
        fontSize: '40px', // Adjust the font size for small screens if needed
        top: '100px', // Adjust positioning for small screens
        left: '50px',
        width: 'auto', // Make the width responsive
    },
}));

export const Subtitle = styled(Typography)(({ theme }) => ({
    position: 'relative', // Assuming the 'top' and 'left' properties require relative positioning
    top: '303px',
    left: '424px',
    width: '1072px',
    height: '74px',
    color: '#000000',
    textAlign: 'center',
    fontFamily: 'Roboto, sans-serif',
    fontWeight: 300,
    fontSize: '26px',
    lineHeight: '40px',
    letterSpacing: '0px',
    opacity: 1,
    [theme.breakpoints.down('sm')]: {
        fontSize: '22px', // Adjust the font size for small screens if needed
        top: '250px', // Adjust positioning for small screens
        left: '50px',
        width: 'auto', // Make the width responsive
    },
}));

export const ClaimButton = styled(Button)(({ theme }) => ({
    backgroundColor: '#ff4b5c',
    color: 'white',
    padding: theme.spacing(1.5, 4),
    borderRadius: '5px',
    fontSize: '1rem',
    '&:hover': {
        backgroundColor: '#e63946',
    },
}));

export const Image = styled('img')(({ theme }) => ({
    width: '100%',
    maxWidth: '600px',
    marginTop: theme.spacing(4),
    [theme.breakpoints.down('sm')]: {
        maxWidth: '100%',
    },
}));

export const FAQSection = styled(Box)(({ theme }) => ({
    marginTop: theme.spacing(6),
}));

export const FAQItem = styled(Paper)(({ theme }) => ({
    margin: `${theme.spacing(1)} 0`,
    padding: theme.spacing(2),
    backgroundColor: '#fff',
    borderRadius: '5px',
    boxShadow: theme.shadows[2],
}));
