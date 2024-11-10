// src/theme.js
import { createTheme } from '@mui/material/styles';

const commonTypography = {
  fontFamily: '"Mona Sans", sans-serif', // Mantenha apenas Mono Sans
  h1: {
    color: '#F0F6FC',
    fontSize: '2rem',
    '@media (max-width:899px)': {
      fontSize: '37px',
      fontWeight: '600',
      style: 'normal',
      lineHeight: '56px'
    },
    '@media (min-width:900px) and (max-width: 2000px)': {
      fontSize: '86px',
      fontWeight: '600',
      style: 'normal',
      
    },
  },
  subtitle1: { // Corrigido de subtitle para subtitle1
    color: '#F0F6FC',
    fontSize: '1rem',
    '@media (min-width:600px)': {
      fontSize: '1.2rem',
      fontWeight: '600',
    },
    '@media (min-width:900px)': {
      fontSize: '1.5rem',
      fontWeight: '600',
    },
  },
};

const theme = createTheme({
  palette: {
    mode: 'dark',
    background: {
      default: '#121212',
    },
    text: {
      primary: '#F0F6FC',
    },
  },
  typography: commonTypography,
});

export default theme;

