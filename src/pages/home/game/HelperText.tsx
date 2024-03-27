import { HelperTextObject } from "@/types";
import { Typography, TypographyProps } from "@mui/material";
import React from "react";

export default function HelperText({
  helperText
}: {
  helperText: HelperTextObject;
}) {
  const color: TypographyProps["color"] =
    helperText.status === "win"
      ? "success.main"
      : helperText.status === "loss"
        ? "error.main"
        : undefined;

  return (
    <React.Fragment>
      <Typography
        variant="h6"
        fontWeight={700}
        textAlign="center"
        color={color}
      >
        {helperText.primary}
      </Typography>
      <Typography variant="h6" fontWeight={700} textAlign="center">
        {helperText.secondary}
      </Typography>
    </React.Fragment>
  );
}
