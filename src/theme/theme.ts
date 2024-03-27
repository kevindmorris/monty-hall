import { createTheme } from "@mui/material";

declare module "@mui/material/styles" {
  interface Palette {
    tertiary: Palette["primary"];
  }

  interface PaletteOptions {
    tertiary?: PaletteOptions["primary"];
  }
}

const theme = createTheme({
  components: {
    MuiButtonBase: { styleOverrides: { root: { fontFamily: "monospace" } } }
  },
  palette: {
    primary: { main: "#6B5D4D" },
    secondary: { main: "#B0A18F" },
    tertiary: { main: "#429398" },
    background: { default: "#DFCDB4" }
  },
  typography: {
    fontFamily: "monospace",
    h1: {
      fontSize: "2.5rem"
    },
    h2: {
      fontSize: "2rem"
    }
  }
});

export default theme;
