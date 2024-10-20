import {
  FETCH_USERS_REQUEST,
  FETCH_USERS_SUCCESS,
  FETCH_USERS_FAILURE,
} from "./actionTypes";
import { UsersState, UsersAction } from "./types";

/**
 * Initial state for the users reducer.
 */
const initialState: UsersState = {
  users: [],
  loading: true,
  error: null,
  page: 1,
  hasMore: true,
  total_pages: 0,
};

/**
 * Reducer function for managing the state of users in the application.
 *
 * @param state - The current state of the users.
 * @param action - The action object that describes the state change.
 * @returns The new state of the users.
 */
const userReducer = (state = initialState, action: UsersAction): UsersState => {
  switch (action.type) {
    case FETCH_USERS_REQUEST:
      return { ...state, loading: true };
    case FETCH_USERS_SUCCESS:
      return {
        ...state,
        loading: false,
        users: [...state.users, ...action.payload.data],
        page: action.payload.page,
        hasMore: action.payload.page < action.payload.total_pages,
        total_pages: action.payload.total_pages,
      };
    case FETCH_USERS_FAILURE:
      return { ...state, loading: false, error: action.payload };
    default:
      return state;
  }
};

export default userReducer;
