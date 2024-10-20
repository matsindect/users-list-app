import { AppThunk } from "..";
import {
  FETCH_USERS_REQUEST,
  FETCH_USERS_SUCCESS,
  FETCH_USERS_FAILURE,
} from "./actionTypes";
import { UsersAction, User } from "./types";
import { Dispatch } from "redux";

// Action Creators
export const fetchUsersRequest = (): UsersAction => ({
  type: FETCH_USERS_REQUEST,
});

export const fetchUsersSuccess = (
  users: User[],
  page: number,
  total_pages: number
): UsersAction => ({
  type: FETCH_USERS_SUCCESS,
  payload: { data: users, page, total_pages },
});

export const fetchUsersFailure = (error: string): UsersAction => ({
  type: FETCH_USERS_FAILURE,
  payload: error,
});

// Thunk Action Creator (with Dispatch typed)
export const fetchUsers =
  (page: number): AppThunk =>
  async (dispatch: Dispatch<UsersAction>) => {
    dispatch(fetchUsersRequest());
    setTimeout(async () => {
      try {
        const response = await fetch(
          `https://reqres.in/api/users?page=${page}`
        );
        const data = await response.json();
        dispatch(fetchUsersSuccess(data.data, data.page, data.total_pages));
        return Promise.resolve(); // <-- Ensure the promise is resolved here
      } catch (error: any) {
        dispatch(fetchUsersFailure(error?.message));
      }
    }, 3000);
  };
