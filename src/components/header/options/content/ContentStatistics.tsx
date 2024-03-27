import { useAppSelector } from "@/lib/hooks";
import { Typography } from "@mui/material";
import React from "react";

export default function ContentStatistics() {
  const statistics = useAppSelector((state) => state.statistics);

  return (
    <React.Fragment>
      <Typography>Attempts: {statistics.attempts}</Typography>
      <Typography>
        Win Percentage: {(statistics.wins * 100) / statistics.attempts || 0}%
      </Typography>
      <Typography>Wins: {statistics.wins}</Typography>
      <Typography>Losses: {statistics.losses}</Typography>
    </React.Fragment>
  );
}
