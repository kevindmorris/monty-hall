import { Box, Typography } from "@mui/material";
import { Options } from "./options";

export default function Header() {
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center"
      }}
    >
      <Typography variant="h1" fontWeight={700} mt={4}>
        The Monty Hall Problem
      </Typography>
      <Options />
    </Box>
  );
}
