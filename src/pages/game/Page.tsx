import { Button, Container, Stack, Typography } from "@mui/material";
import React, { useState } from "react";
import { useAppDispatch, useAppSelector } from "../../lib/hooks";
import { lose, win } from "../../lib/slices/scoreSlice";

const Page: React.FC = () => {
  const dispatch = useAppDispatch();
  const wins = useAppSelector((state) => state.score.wins);
  const attempts = useAppSelector((state) => state.score.attempts);

  const [selectedDoor, setSelectedDoor] = useState<string | null>(null);
  const [doors] = useState<string[]>(["A", "B", "C"]);
  const [prizeDoor, setPrizeDoor] = useState<string>(getRandomDoor());
  const [openedDoor, setOpenedDoor] = useState<string | null>(null);
  const [gameResult, setGameResult] = useState<string | null>(null);

  function getRandomDoor(): string {
    const randomIndex = Math.floor(Math.random() * 3);
    return doors[randomIndex];
  }

  function handleDoorSelection(selected: string) {
    setSelectedDoor(selected);
    const remainingDoors = doors.filter((door) => door !== selected);
    const doorsWithoutPrize = remainingDoors.filter(
      (door) => door !== prizeDoor
    );
    const doorToOpen =
      doorsWithoutPrize[Math.floor(Math.random() * doorsWithoutPrize.length)];
    setOpenedDoor(doorToOpen);
  }

  function handleSwitchDoor() {
    const remainingDoors = doors.filter(
      (door) => door !== selectedDoor && door !== openedDoor
    );
    const switchedDoor = remainingDoors[0];
    setSelectedDoor(switchedDoor);
    setGameResult(switchedDoor === prizeDoor ? "You won!" : "You lost.");
  }

  function handleStayWithDoor() {
    setGameResult(selectedDoor === prizeDoor ? "You won!" : "You lost.");
  }

  const handlePlayAgain = React.useCallback(
    function handlePlayAgain() {
      console.log(selectedDoor, prizeDoor);
      if (selectedDoor === prizeDoor) {
        dispatch(win());
      } else {
        dispatch(lose());
      }
      setSelectedDoor(null);
      setPrizeDoor(getRandomDoor());
      setOpenedDoor(null);
      setGameResult(null);
    },
    [selectedDoor, prizeDoor]
  );

  return (
    <Container
      sx={{
        py: 2,
        display: "flex",
        flexDirection: "column",
        alignItems: "center"
      }}
    >
      <Typography variant="h1" gutterBottom>
        Monty Hall Problem
      </Typography>
      <Typography>Select a door:</Typography>
      <Stack flexDirection="row" useFlexGap gap={1} my={2}>
        {doors.map((door) => (
          <Button
            key={door}
            variant="contained"
            onClick={() => handleDoorSelection(door)}
            disabled={selectedDoor !== null || gameResult !== null}
          >
            Door {door}
          </Button>
        ))}
      </Stack>
      {selectedDoor && (
        <React.Fragment>
          <Typography>
            Monty opened Door {openedDoor} to reveal a goat.
          </Typography>
          <Typography>
            Do you want to switch or stay with your choice?
          </Typography>

          <Stack flexDirection="row" useFlexGap gap={1} my={2}>
            <Button
              variant="contained"
              onClick={handleSwitchDoor}
              disabled={gameResult !== null}
            >
              Switch
            </Button>
            <Button
              variant="contained"
              onClick={handleStayWithDoor}
              disabled={gameResult !== null}
            >
              Stay
            </Button>
          </Stack>
        </React.Fragment>
      )}
      {gameResult && (
        <div>
          <h2>{gameResult}</h2>{" "}
          <Button variant="contained" onClick={handlePlayAgain}>
            Play Again?
          </Button>
        </div>
      )}
      <h2>{wins / attempts}%</h2>
    </Container>
  );
};

export default Page;
