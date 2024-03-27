export type DoorObject = {
  value: number;
  label: string;
  text?: string;
  revealedText?: string;
  isPrize: boolean;
  isSelected: boolean;
  isRevealed: boolean;
};

export type HelperTextObject = {
  status: "playing" | "win" | "loss";
  primary: string;
  secondary?: string;
};
