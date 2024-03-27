import { DoorObject } from "@/types";
import { ButtonBase, ButtonBaseProps, Typography } from "@mui/material";

export default function Door({
  door,
  ...props
}: { door: DoorObject } & ButtonBaseProps) {
  return (
    <ButtonBase
      {...props}
      sx={(theme) => ({
        width: "14rem",
        height: "14rem",
        padding: theme.spacing(4),
        display: "flex",
        flexDirection: "column",
        justifyContent: "start",
        borderRadius: "5px",
        backgroundColor: door.isRevealed
          ? theme.palette.action.disabled
          : theme.palette.primary.dark,
        color: theme.palette.primary.contrastText,
        fontSize: "1rem",
        "&:hover": {
          backgroundColor: theme.palette.primary.main
        }
      })}
    >
      <Typography variant="h6" fontWeight={700} gutterBottom>
        {door.label}
      </Typography>
      {door.isRevealed ? (
        <Typography sx={{ fontSize: "5rem" }}>{door.revealedText}</Typography>
      ) : (
        <Typography variant="body1">{door.text}</Typography>
      )}
    </ButtonBase>
  );
}
