import { Close } from "@mui/icons-material";
import { Dialog, DialogContent, DialogTitle, IconButton } from "@mui/material";
import React from "react";
import OptionButton from "./OptionButton";

export default function Option({
  title,
  content,
  children
}: {
  title: string;
  content: React.ReactNode;
  children: React.ReactNode;
}) {
  const [open, setOpen] = React.useState<boolean>(false);

  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <React.Fragment>
      <OptionButton onClick={handleOpen}>{children}</OptionButton>
      <Dialog
        open={open}
        onClose={handleClose}
        PaperProps={{ position: "relative" }}
        sx={{}}
      >
        <IconButton
          onClick={handleClose}
          sx={{ position: "absolute", top: 8, right: 16 }}
        >
          <Close />
        </IconButton>
        <DialogTitle>{title}</DialogTitle>
        <DialogContent sx={{ minWidth: "30vw" }}>{content}</DialogContent>
      </Dialog>
    </React.Fragment>
  );
}
