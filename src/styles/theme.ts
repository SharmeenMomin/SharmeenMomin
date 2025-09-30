import { createTheme, ThemeOptions } from '@mui/material/styles';

// Extend the Palette and PaletteOptions to include our custom colors
declare module '@mui/material/styles' {
  interface Palette {
    header: Palette['primary'];
    footer: Palette['primary'];
  }
  interface PaletteOptions {
    header?: PaletteOptions['primary'];
    footer?: PaletteOptions['primary'];
  }
}

export const theme = createTheme({
  palette: {
    primary: {
      main: '#264027', // Dark Green
      light: '#3A5A40',
      dark: '#1B2B1A',
      contrastText: '#FAF5EF',
    },
    secondary: {
      main: '#8C4A3C', // Burnt Umber
      light: '#A66B5E',
      dark: '#6B2A1C',
      contrastText: '#FAF5EF',
    },
    info: {
      main: '#264027', // Dark Green
      light: '#3A5A40',
      dark: '#1B2B1A',
      contrastText: '#FAF5EF',
    },
    warning: {
      main: '#D9A67E', // Desert Clay
      light: '#E5C4A8',
      dark: '#C38B5F',
      contrastText: '#2C2C2C',
    },
    background: {
      default: '#FAF5EF', // Light Sand
      paper: '#FFFFFF',
    },
    text: {
      primary: '#2C2C2C', // Soft Charcoal
      secondary: '#264027', // Dark Green
    },
    divider: 'rgba(44, 44, 44, 0.08)',
    header: {
      main: '#264027', // Dark Green
      light: '#3A5A40',
      dark: '#1B2B1A',
      contrastText: '#FAF5EF',
    },
    footer: {
      main: '#264027', // Dark Green
      light: '#3A5A40',
      dark: '#1B2B1A',
      contrastText: '#FAF5EF',
    },
  },
  typography: {
    fontFamily: '"Inter", "Roboto", "Helvetica", "Arial", sans-serif',
    h1: {
      fontSize: '3.5rem',
      fontWeight: 800,
      lineHeight: 1.2,
      letterSpacing: '-0.02em',
      color: '#2C2C2C',
    },
    h2: {
      fontSize: '2.5rem',
      fontWeight: 700,
      lineHeight: 1.2,
      letterSpacing: '-0.01em',
      color: '#2C2C2C',
    },
    h3: {
      fontSize: '2rem',
      fontWeight: 700,
      lineHeight: 1.2,
      color: '#2C2C2C',
    },
    h4: {
      fontSize: '1.75rem',
      fontWeight: 600,
      lineHeight: 1.2,
      color: '#2C2C2C',
    },
    h5: {
      fontSize: '1.5rem',
      fontWeight: 600,
      lineHeight: 1.2,
      color: '#2C2C2C',
    },
    h6: {
      fontSize: '1.25rem',
      fontWeight: 600,
      lineHeight: 1.2,
      color: '#2C2C2C',
    },
    body1: {
      fontSize: '1rem',
      lineHeight: 1.7,
      color: '#2C2C2C',
    },
    body2: {
      fontSize: '0.875rem',
      lineHeight: 1.6,
      color: '#264027',
    },
  },
  components: {
    MuiAppBar: {
      styleOverrides: {
        root: {
          backgroundColor: '#7D9F8A',
          boxShadow: '0 2px 8px rgba(44, 44, 44, 0.15)',
        },
      },
    },
    MuiButton: {
      styleOverrides: {
        root: {
          borderRadius: 12,
          textTransform: 'none',
          fontWeight: 600,
          padding: '12px 28px',
          transition: 'all 0.3s ease-in-out',
          '&:hover': {
            transform: 'translateY(-2px)',
            boxShadow: '0 8px 16px rgba(125, 159, 138, 0.25)',
          },
        },
        contained: {
          backgroundColor: '#7D9F8A',
          color: '#FAF5EF',
          '&:hover': {
            backgroundColor: '#5D836D',
          },
        },
        outlined: {
          borderColor: '#8C4A3C',
          color: '#8C4A3C',
          '&:hover': {
            borderColor: '#6B2A1C',
            backgroundColor: 'rgba(140, 74, 60, 0.08)',
          },
        },
      },
    },
    MuiCard: {
      styleOverrides: {
        root: {
          borderRadius: 20,
          backgroundColor: '#FFFFFF',
          boxShadow: '0 4px 20px rgba(44, 44, 44, 0.08)',
          transition: 'all 0.3s ease-in-out',
          border: '1px solid rgba(44, 44, 44, 0.05)',
          '&:hover': {
            transform: 'translateY(-4px)',
            boxShadow: '0 12px 28px rgba(125, 159, 138, 0.15)',
          },
        },
      },
    },
    MuiChip: {
      styleOverrides: {
        root: {
          borderRadius: 8,
          transition: 'all 0.3s ease-in-out',
          '&:hover': {
            transform: 'translateY(-2px)',
          },
        },
      },
    },
    MuiIconButton: {
      styleOverrides: {
        root: {
          transition: 'all 0.3s ease-in-out',
          color: '#7D9F8A',
          '&:hover': {
            transform: 'translateY(-2px)',
            backgroundColor: 'rgba(125, 159, 138, 0.08)',
          },
        },
      },
    },
    MuiLink: {
      styleOverrides: {
        root: {
          color: '#8C4A3C',
          textDecoration: 'none',
          fontWeight: 500,
          '&:hover': {
            color: '#6B2A1C',
            textDecoration: 'none',
          },
        },
      },
    },
    MuiPaper: {
      styleOverrides: {
        root: {
          backgroundImage: 'none',
        },
      },
    },
  },
  shape: {
    borderRadius: 12,
  },
  shadows: [
    'none',
    '0 2px 4px rgba(44, 44, 44, 0.05)',
    '0 4px 8px rgba(44, 44, 44, 0.05)',
    '0 6px 12px rgba(44, 44, 44, 0.05)',
    '0 8px 16px rgba(44, 44, 44, 0.05)',
    '0 10px 20px rgba(44, 44, 44, 0.05)',
    '0 12px 24px rgba(44, 44, 44, 0.05)',
    '0 14px 28px rgba(44, 44, 44, 0.05)',
    '0 16px 32px rgba(44, 44, 44, 0.05)',
    '0 18px 36px rgba(44, 44, 44, 0.05)',
    '0 20px 40px rgba(44, 44, 44, 0.05)',
    '0 22px 44px rgba(44, 44, 44, 0.05)',
    '0 24px 48px rgba(44, 44, 44, 0.05)',
    '0 26px 52px rgba(44, 44, 44, 0.05)',
    '0 28px 56px rgba(44, 44, 44, 0.05)',
    '0 30px 60px rgba(44, 44, 44, 0.05)',
    '0 32px 64px rgba(44, 44, 44, 0.05)',
    '0 34px 68px rgba(44, 44, 44, 0.05)',
    '0 36px 72px rgba(44, 44, 44, 0.05)',
    '0 38px 76px rgba(44, 44, 44, 0.05)',
    '0 40px 80px rgba(44, 44, 44, 0.05)',
    '0 42px 84px rgba(44, 44, 44, 0.05)',
    '0 44px 88px rgba(44, 44, 44, 0.05)',
    '0 46px 92px rgba(44, 44, 44, 0.05)',
    '0 48px 96px rgba(44, 44, 44, 0.05)',
  ],
}); 