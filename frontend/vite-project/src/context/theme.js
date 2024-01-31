import { createTheme } from '@mui/material/styles';

const theme = createTheme({
  palette: {
    primary: {
      main: '#302E2E', 
    },
    secondary: {
      main: '#474847', 
    },
  },
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          '&:focus': {
            outline: 'none', 
          },
        },
      },
    },
  },
});

export default theme;
