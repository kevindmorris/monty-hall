import { DoorObject } from "@/types";
import { Stack } from "@mui/material";
import Door from "./Door";

export default function DoorStack({
  doors,
  handleClick
}: {
  doors: DoorObject[];
  handleClick: (e: DoorObject) => void;
}) {
  return (
    <Stack
      flexDirection="row"
      useFlexGap
      my={2}
      justifyContent="space-evenly"
      sx={{ gap: { xs: 2, sm: 3, md: 4 } }}
    >
      {doors.map((e, i) => (
        <Door
          key={i}
          door={e}
          onClick={() => handleClick(e)}
          disabled={e.isRevealed}
        />
      ))}
    </Stack>
  );
}
