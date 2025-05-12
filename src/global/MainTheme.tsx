import { createTheme } from "@mui/material";

const theme = createTheme({
  palette: {
    primary: {
      main: `#0c2b72`,
    },
    secondary: {
      main: `#F5F5F5`,
    },
  },

  typography: {
    fontFamily: "'Mukta Mahee', sans-serif",
    h1: {
      fontFamily: "'Gochi Hand', cursive",
      lineWeight: "1.14285714",
      wordBreak: "break-word",
    },
    h2: {
      fontFamily: "'Gochi Hand', cursive",
      lineWeight: "1.14285714",
      wordBreak: "break-word",
    },
    h4: {
      fontFamily: "'Gochi Hand', cursive",
      lineWeight: "1.14285714",
      wordBreak: "break-word",
    },
    body1: {
      fontSize: "16px",
      lineHeight: "1.8em",
      fontWeight: "400",
    },
    subtitle2: {
      fontFamily: "'Gochi Hand', cursive",
      lineWeight: "1.14285714",
      wordBreak: "break-word",
      fontSize: "30px",
    },
    subtitle1: {
      fontSize: "17px",
      lineHeight: "1.7em",
      fontWeight: "400",
      color: "rgb(113, 113, 113)",
    },
  },
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          textTransform: `none`,
        },
      },
    },
    MuiButtonBase: {
      defaultProps: {
        disableRipple: true,
      },
    },
  },
});

export default theme;
