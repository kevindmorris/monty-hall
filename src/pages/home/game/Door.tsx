import { DoorObject } from "@/types";
import { ButtonBaseProps, Typography } from "@mui/material";
import DoorButton from "./DoorButton";

export default function Door({
  door,
  ...props
}: { door: DoorObject } & ButtonBaseProps) {
  return (
    <DoorButton door={door} {...props}>
      {door.isRevealed ? (
        <Typography
          sx={{ fontSize: { xs: "2rem", sm: "2rem", md: "5rem", lg: "5rem" } }}
        >
          {door.revealedText}
        </Typography>
      ) : (
        <>
          <Typography variant="h6" fontWeight={700} gutterBottom>
            {door.label}
          </Typography>
          <Typography variant="body1">{door.text}</Typography>
        </>
      )}
    </DoorButton>
  );
}
