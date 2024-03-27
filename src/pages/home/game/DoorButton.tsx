import { DoorObject } from "@/types";
import { ButtonBase, styled } from "@mui/material";

const DoorButton = styled(ButtonBase)<{ door: DoorObject }>(
  ({ theme, door }) => ({
    width: 200,
    height: 200,
    padding: theme.spacing(4),
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    borderRadius: "5px",
    backgroundColor: door.isRevealed
      ? theme.palette.action.disabled
      : theme.palette.primary.dark,
    color: theme.palette.primary.contrastText,
    fontSize: "1rem",
    "&:hover": {
      backgroundColor: theme.palette.primary.main
    },
    [theme.breakpoints.down("md")]: {
      width: 100,
      height: 150,
      padding: theme.spacing(2)
    }
  })
);

export default DoorButton;
