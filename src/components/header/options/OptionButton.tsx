import { ButtonBase, alpha, styled } from "@mui/material";

const OptionButton = styled(ButtonBase)(({ theme }) => ({
  padding: theme.spacing(1, 2),
  backgroundColor: "#fff",
  borderStyle: "solid",
  borderWidth: "2px",
  borderColor: "#000",
  borderRadius: "5px",
  fontSize: "1rem",
  fontWeight: 700,
  "&:hover": {
    backgroundColor: alpha("#fff", 0.75)
  },
  [theme.breakpoints.down("md")]: {
    padding: theme.spacing(0.5, 1)
  }
}));

export default OptionButton;
