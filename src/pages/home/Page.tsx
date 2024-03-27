import { useAppDispatch } from "@/lib/hooks";
import { loss, win } from "@/lib/slices/statisticsSlice";
import { DoorObject, HelperTextObject } from "@/types";
import { Container } from "@mui/material";
import React from "react";
import { DoorStack, HelperText } from "./game";

export default function Page() {
  const dispatch = useAppDispatch();

  const [step, setStep] = React.useState<number>(0);
  const [doors, setDoors] = React.useState<DoorObject[]>(generateDoors());
  const [helperText, setHelperText] = React.useState<HelperTextObject>({
    status: "playing",
    primary: `Click on any door to play!`
  });

  const handleClick = React.useCallback(
    function handleClick(door: DoorObject) {
      if (step === 0) {
        let newDoors = doors.map((e) => {
          if (e.value === door.value) {
            return { ...e, isSelected: true };
          } else {
            return { ...e, isSelected: false };
          }
        });

        const options = newDoors.filter(
          (door) => !door.isSelected && !door.isPrize
        );
        const revealedDoor =
          options[Math.floor(Math.random() * options.length)];
        newDoors = newDoors.map((e) => {
          if (e.value === revealedDoor.value) return { ...e, isRevealed: true };
          else if (e.isSelected)
            return { ...e, text: "Click here to STAY", isRevealed: false };
          else return { ...e, text: "Click here to SWITCH", isRevealed: false };
        });

        const revealedValue = newDoors.find((e) => e.isRevealed)?.label; // Revealed door value
        const stayValue = newDoors.find((e) => e.isSelected)?.label; // Currently selected door
        const switchValue = newDoors.find(
          (e) => !e.isSelected && !e.isRevealed
        )?.label; // Remaining door

        setStep(step + 1);
        setHelperText({
          status: "playing",
          primary: `OK, there's a goat behind ${revealedValue}, so the car is either behind ${stayValue} (your original choice) or ${switchValue}.`
        });
        setDoors(newDoors);
      } else if (step === 1) {
        // STAY
        if (door.isSelected) {
          const newDoors = doors.map((e) => {
            return { ...e, isRevealed: true };
          });
          scoreGame(newDoors);
          setDoors(newDoors);
        }
        // SWITCH
        else {
          const newDoors = doors.map((e) => {
            if (e.value === door.value)
              return { ...e, isSelected: true, isRevealed: true };
            else return { ...e, isSelected: false, isRevealed: true };
          });
          scoreGame(newDoors);
          setDoors(newDoors);
        }
      }
    },
    [step, doors]
  );

  function scoreGame(doors: DoorObject[]) {
    if (doors.some((e) => e.isPrize && e.isSelected)) {
      dispatch(win());
      setHelperText({
        status: "win",
        primary: "You win!",
        secondary: "Click anywhere on the screen to play again!"
      });
    } else {
      dispatch(loss());
      setHelperText({
        status: "loss",
        primary: "You lost!",
        secondary: "Click anywhere on the screen to play again!"
      });
    }

    // RESET
    window.addEventListener(
      "mousedown",
      function () {
        setStep(0);
        setDoors(generateDoors());
        setHelperText({
          status: "playing",
          primary: "Click on any door to play!"
        });
      },
      { once: true }
    );
  }

  return (
    <Container
      maxWidth="md"
      sx={{
        mt: 2,
        display: "flex",
        flexDirection: "column",
        alignItems: "center"
      }}
    >
      <DoorStack doors={doors} handleClick={handleClick} />
      <HelperText helperText={helperText} />
    </Container>
  );
}

function generateDoors() {
  let newDoors: DoorObject[] = [
    {
      value: 0,
      label: "Door 1",
      isPrize: false,
      isRevealed: false,
      isSelected: false
    },
    {
      value: 1,
      label: "Door 2",
      isPrize: false,
      isRevealed: false,
      isSelected: false
    },
    {
      value: 2,
      label: "Door 3",
      isPrize: false,
      isRevealed: false,
      isSelected: false
    }
  ];
  const newPrizeIndex = Math.floor(Math.random() * 3);
  newDoors = newDoors.map((e) => {
    if (e.value === newPrizeIndex) {
      return { ...e, revealedText: "🚙", isPrize: true };
    } else {
      return { ...e, revealedText: "🐐" };
    }
  });
  return newDoors;
}
