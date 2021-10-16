import { createTheme } from "@mui/material";

const theme = createTheme({
  palette: {
    primary: {
      light: '#4E9BE2',
      main: '#004CBA',
      dark: '#00147A',
      contrastText: '#fff',
    },
    secondary: {
      light: '#5DD9FF',
      main: '#00BDFF',
      dark: '#00265D',
      contrastText: '#fff',
    },
  },
});

export default theme;