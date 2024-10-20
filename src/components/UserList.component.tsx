import React, { useEffect, useRef, useCallback, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchUsers } from "../store/users/actions";
import { RootState } from "../store/rootReducer";
import { AppDispatch } from "../store";
import { Card, CardContent, Typography, Container, Box } from "@mui/material";
import UserItem from "./UserItem.component";
import LoadingSpinner from "./LoadingSpinner.componet";
import LinearIndeterminate from "./LoadMore.component";
import CenteredAppBar from "./CenteredAppBar.componets";
import CustomSnackbar from "./Alerts.component";

/**
 * Renders a list of users with infinite scrolling and a snackbar notification.
 */

const UserList: React.FC = () => {
  const dispatch: AppDispatch = useDispatch();
  const { users, loading, total_pages, error, page, hasMore } = useSelector(
    (state: RootState) => state.users
  );

  const [isInitialLoad, setIsInitialLoad] = useState(true);
  const [openSnackbar, setOpenSnackbar] = useState(false); // State to control Snackbar visibility

  const observer = useRef<IntersectionObserver | null>(null);

  /**
   * Callback function to handle the last user element reference.
   * It observes the intersection of the last user element with the viewport and triggers actions accordingly.
   * @param node - The HTMLDivElement representing the last user element.
   */
  const lastUserElementRef = useCallback(
    (node: HTMLDivElement) => {
      if (loading) return;
      if (observer.current) observer.current.disconnect();
      observer.current = new IntersectionObserver((entries) => {
        if (entries[0].isIntersecting && hasMore) {
          dispatch(fetchUsers(page + 1));
        } else if (entries[0].isIntersecting && total_pages === page) {
          // Show Snackbar if current page equals total pages
          setOpenSnackbar(true); // Open Snackbar
        }
      });
      if (node) observer.current.observe(node);
    },
    [total_pages, page, loading, hasMore, dispatch]
  );

  useEffect(() => {
    setIsInitialLoad(true);
    dispatch(fetchUsers(page));
  }, [dispatch, page]);

  useEffect(() => {
    if (!loading) setIsInitialLoad(false);
  }, [loading]);

  /**
   * Handles the closing of the snackbar.
   * @param event - The event that triggered the closing of the snackbar.
   * @param reason - The reason for closing the snackbar.
   */
  const handleCloseSnackbar = (
    event?: React.SyntheticEvent | Event,
    reason?: string
  ) => {
    if (reason === "clickaway") {
      return;
    }
    setOpenSnackbar(false); // Close Snackbar
  };

  if (error) return <Typography color="error">{error}</Typography>;

  return (
    <>
      <CenteredAppBar title="Users" />
      <Container maxWidth="md" sx={{ marginTop: "4rem", position: "relative" }}>
        {isInitialLoad ? (
          <LoadingSpinner />
        ) : (
          <Box sx={{ display: "flex", flexWrap: "wrap", gap: 3 }}>
            {users.map((user, index) => (
              <Box
                key={user.id}
                ref={
                  index === users.length - 1 ? lastUserElementRef : undefined
                }
                sx={{
                  width: {
                    xs: "100%",
                    sm: "calc(50% - 12px)",
                    md: "calc(50% - 12px)",
                  },
                }}
              >
                <Card>
                  <CardContent>
                    <UserItem user={user} />
                  </CardContent>
                </Card>
              </Box>
            ))}
          </Box>
        )}
        {!isInitialLoad && loading && (
          <Box sx={{ width: "100%", mt: 2 }}>
            <LinearIndeterminate />
          </Box>
        )}
        <CustomSnackbar
          open={openSnackbar}
          message="No more users to load. You've reached the end!"
          severity="info"
          onClose={handleCloseSnackbar}
        />
      </Container>
    </>
  );
};

export default UserList;
