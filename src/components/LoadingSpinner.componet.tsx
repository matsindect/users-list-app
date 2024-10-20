import React from "react";
import { Box } from "@mui/material";
import { keyframes } from "@mui/system";

const pulse = keyframes`
  0% {
    transform: scale(0.6);
    opacity: 1;
  }
  100% {
    transform: scale(1.6);
    opacity: 0;
  }
`;

const LoadingSpinner: React.FC = () => {
  return (
    <Box
      sx={{
        position: "relative",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: "100vh",
      }}
    >
      {/* Pulsing outer circles */}
      <Box
        sx={{
          position: "absolute",
          width: 80,
          height: 80,
          borderRadius: "50%",
          backgroundColor: "rgba(139, 195, 74, 0.3)", // light green
          animation: `${pulse} 1.5s infinite ease-in-out`,
        }}
      />
      <Box
        sx={{
          position: "absolute",
          width: 60,
          height: 60,
          borderRadius: "50%",
          backgroundColor: "rgba(139, 195, 74, 0.2)", // lighter green
          animation: `${pulse} 1.5s infinite ease-in-out 0.5s`, // Delay to make the second pulse
        }}
      />
      <Box
        sx={{
          position: "absolute",
          width: 40,
          height: 40,
          borderRadius: "50%",
          backgroundColor: "rgba(139, 195, 74, 0.1)", // even lighter green
          animation: `${pulse} 1.5s infinite ease-in-out 1s`, // Delay to make the third pulse
        }}
      />
      {/* Central dot */}
      <Box
        sx={{
          width: 10,
          height: 10,
          borderRadius: "50%",
          backgroundColor: "#7ed321",
        }}
      />
    </Box>
  );
};

export default LoadingSpinner;
