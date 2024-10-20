import React from "react";
import { User } from "../store/users/types";
import { Box, Avatar, Typography } from "@mui/material";

/**
 * Renders a single user item.
 *
 * @component
 * @param {Object} props - The component props.
 * @param {User} props.user - The user object to display.
 * @returns {JSX.Element} The rendered UserItem component.
 */
const UserItem: React.FC<{ user: User }> = ({ user }) => {
  return (
    <Box display="flex" alignItems="center" p={2}>
      <Avatar
        src={user.avatar}
        alt={`${user.first_name} ${user.last_name}`}
        sx={{ width: 48, height: 48, mr: 2 }} // Similar to w-12 h-12 and mr-4
      />
      <Box>
        <Typography variant="h6" fontWeight="600">
          {`${user.first_name} ${user.last_name}`}
        </Typography>
        <Typography variant="body2" color="textSecondary">
          {user.email}
        </Typography>
      </Box>
    </Box>
  );
};

export default UserItem;
