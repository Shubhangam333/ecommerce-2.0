import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  userId: localStorage.getItem("userId")
    ? JSON.parse(localStorage.getItem("userId"))
    : "",
};

export const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    setUser: (state, action) => {
      state.user = action.payload;
      // localStorage.setItem("user", JSON.stringify(state.user));
    },
    removeUser: (state) => {
      state.user = null;
      localStorage.removeItem("user");
    },
    setUserId: (state, action) => {
      localStorage.setItem("userId", JSON.stringify(action.payload));
      state.userId = action.payload;
    },
  },
});

export const { removeUser, setUser, setUserId } = authSlice.actions;
export default authSlice.reducer;
