import * as React from "react";
import { LinearProgress, Stack } from "@mui/material";

/**
 * A linear indeterminate progress component.
 * Renders a linear progress bar with an indeterminate animation.
 */
const LinearIndeterminate: React.FC = () => {
  return (
    <Stack sx={{ width: "100%", color: "grey.500" }} spacing={2}>
      <LinearProgress color="success" />
    </Stack>
  );
};

export default LinearIndeterminate;
