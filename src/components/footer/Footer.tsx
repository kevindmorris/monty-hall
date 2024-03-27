import { Box, Divider, Typography } from "@mui/material";

export default function Footer() {
  return (
    <Box sx={{ mt: "auto" }}>
      <Divider sx={{ my: 2 }} />
      <Typography paragraph>
        Made with 💖 by <a href="https://kevindmorris.vercel.app/">kevin</a>{" "}
        using <a href="https://react.dev/">React</a>,{" "}
        <a href="https://vitejs.dev/">Vite</a>,{" "}
        <a href="https://redux.js.org/">Redux</a>, and{" "}
        <a href="https://mui.com/material-ui/getting-started/">Material UI</a>.
        Hosted with <a href="https://pages.github.com/">GitHub Pages</a>.
      </Typography>
    </Box>
  );
}
