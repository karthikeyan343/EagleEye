import { createTheme, responsiveFontSizes } from '@mui/material/styles';

const baseTheme = createTheme({
  palette: {
    mode: 'light',
    primary: {
      main: '#0052FF', // Vibrant Royal Blue
      dark: '#003ECC',
      light: '#3375FF',
      contrastText: '#FFFFFF',
    },
    secondary: {
      main: '#FF6B00', // ANPR Orange Accent
      contrastText: '#FFFFFF',
    },
    error: {
      main: '#E50914',
    },
    background: {
      default: '#FFFFFF',
      paper: '#FFFFFF',
    },
    text: {
      primary: '#000000',
      secondary: '#64748B',
    },
    divider: 'rgba(0, 0, 0, 0.08)',
  },
  typography: {
    fontFamily: "'Manrope', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif",
    h1: {
      fontFamily: "'Trueno', 'Plus Jakarta Sans', 'Outfit', 'Montserrat', sans-serif",
      fontWeight: 600,
      fontSize: '48px',
      lineHeight: 1.1,
      letterSpacing: '-0.02em',
      color: '#FFFFFF',
    },
    h2: {
      fontFamily: "'Trueno', 'Plus Jakarta Sans', 'Outfit', 'Montserrat', sans-serif",
      fontWeight: 600,
      fontSize: '36px',
      lineHeight: 1.15,
      letterSpacing: '-0.01em',
    },
    h3: {
      fontFamily: "'Trueno', 'Plus Jakarta Sans', 'Outfit', 'Montserrat', sans-serif",
      fontWeight: 600,
      fontSize: '28px',
      lineHeight: 1.2,
    },
    h4: {
      fontFamily: "'Trueno', 'Plus Jakarta Sans', 'Outfit', 'Montserrat', sans-serif",
      fontWeight: 600,
      fontSize: '22px',
      lineHeight: 1.25,
    },
    subtitle1: {
      fontFamily: "'Manrope', sans-serif",
      fontWeight: 400,
      fontSize: '16px',
      lineHeight: 1.6,
      color: '#64748B',
    },
    subtitle2: {
      fontFamily: "'Manrope', sans-serif",
      fontWeight: 500,
      fontSize: '14px',
      lineHeight: 1.5,
    },
    body1: {
      fontFamily: "'Manrope', sans-serif",
      fontWeight: 400,
      fontSize: '15px',
      lineHeight: 1.6,
    },
    body2: {
      fontFamily: "'Manrope', sans-serif",
      fontWeight: 400,
      fontSize: '13.5px',
      lineHeight: 1.5,
    },
    button: {
      fontFamily: "'Manrope', sans-serif",
      fontWeight: 600,
      fontSize: '15px',
      textTransform: 'none',
    },
  },
  shape: {
    borderRadius: 12,
  },
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          height: '46px',
          borderRadius: '12px',
          padding: '12px 24px',
          gap: '10px',
          boxShadow: 'none',
          '&:hover': {
            boxShadow: '0 4px 14px 0 rgba(0, 82, 255, 0.25)',
          },
        },
        containedPrimary: {
          backgroundColor: '#0052FF',
          color: '#FFFFFF',
          '&:hover': {
            backgroundColor: '#0042D0',
          },
        },
      },
    },
    MuiCard: {
      styleOverrides: {
        root: {
          borderRadius: '20px',
          boxShadow: '0 10px 30px rgba(0,0,0,0.05)',
        },
      },
    },
  },
});

export const theme = responsiveFontSizes(baseTheme);
export default theme;
