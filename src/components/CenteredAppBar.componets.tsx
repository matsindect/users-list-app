import React from "react";
import { AppBar, Toolbar, Typography } from "@mui/material";
import { styled } from "@mui/material/styles";

interface AppBarProps {
  title: string;
}
const StyledAppBar = styled(AppBar)(({ theme }) => ({
  backgroundColor: "#F1F1F1",
}));

const StyledToolbar = styled(Toolbar)({
  justifyContent: "center",
});

const StyledTypography = styled(Typography)({
  color: "black",
});
/**
 * A centered app bar component.
 *
 * @param {AppBarProps} props - The props for the component.
 * @param {string} props.title - The title to be displayed in the app bar.
 * @returns {JSX.Element} The rendered app bar component.
 */
const CenteredAppBar: React.FC<AppBarProps> = ({ title }) => {
  return (
    <StyledAppBar position="fixed">
      <StyledToolbar>
        <StyledTypography variant="h5">{title}</StyledTypography>
      </StyledToolbar>
    </StyledAppBar>
  );
};

export default CenteredAppBar;
