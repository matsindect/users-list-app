import {
  FETCH_USERS_FAILURE,
  FETCH_USERS_REQUEST,
  FETCH_USERS_SUCCESS,
} from "./actionTypes";

/**
 * Represents a user.
 */
export interface User {
  /**
   * The unique identifier of the user.
   */
  id: number;

  /**
   * The email address of the user.
   */
  email: string;

  /**
   * The first name of the user.
   */
  first_name: string;

  /**
   * The last name of the user.
   */
  last_name: string;

  /**
   * The URL of the user's avatar.
   */
  avatar: string;
}

/**
 * Represents the state of the users in the application.
 */
export interface UsersState {
  users: User[];
  loading: boolean;
  error: string | null;
  page: number;
  hasMore: boolean;
  total_pages: number;
}

/**
 * Represents a Fetch Users Request Action.
 */
export interface FetchUsersRequestAction {
  type: typeof FETCH_USERS_REQUEST;
}

/**
 * Represents the action dispatched when users are successfully fetched.
 */
export interface FetchUsersSuccessAction {
  type: typeof FETCH_USERS_SUCCESS;
  payload: {
    data: User[];
    page: number;
    total_pages: number;
  };
}

/**
 * Represents an action for fetching users that resulted in failure.
 */
export interface FetchUsersFailureAction {
  type: typeof FETCH_USERS_FAILURE;
  payload: string;
}

/**
 * Represents the action types for user-related actions.
 */
export type UsersAction =
  | FetchUsersRequestAction
  | FetchUsersSuccessAction
  | FetchUsersFailureAction;
