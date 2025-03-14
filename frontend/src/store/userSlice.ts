import { createSlice, PayloadAction } from "@reduxjs/toolkit";

import { UserState } from "./types";

/**
 * **User Slice**
 *
 * Manages user authentication state within the Redux store.
 *
 * ### State:
 * - `user`: Stores user details (null if not logged in).
 * - `isAuthenticated`: Boolean flag for authentication status.
 *
 * ### Actions:
 * - `loginUser(user)`: Sets user data and marks authentication as `true`.
 * - `logoutUser()`: Resets user data and sets authentication as `false`.
 */
const initialState: UserState = {
  user: null,
  isAuthenticated: false,
};

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {    
    loginUser: (state, action: PayloadAction<{ username: string }>) => {
      state.user = action.payload;
      state.isAuthenticated = true;
    },

    logoutUser: (state) => {
      state.user = null;
      state.isAuthenticated = false;
    },
  },
});

export const { loginUser, logoutUser } = userSlice.actions;
export default userSlice.reducer;
