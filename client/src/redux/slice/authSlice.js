import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  user: localStorage.getItem("user")
    ? JSON.parse(localStorage.getItem("user"))
    : null,
  userId: localStorage.getItem("userId")
    ? JSON.parse(localStorage.getItem("userId"))
    : null,
  section: "men",
};

export const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    setUser: (state, action) => {
      state.user = action.payload;
      localStorage.setItem("user", JSON.stringify(action.payload));
    },
    removeUser: (state) => {
      state.user = null;
      localStorage.removeItem("user");
    },
    setUserId: (state, action) => {
      localStorage.setItem("userId", JSON.stringify(action.payload));
      state.userId = action.payload;
    },
    removeUserId: (state) => {
      state.userId = null;
      localStorage.removeItem("userId");
    },
    setSection: (state, action) => {
      state.section = action.payload;
    },
  },
});

export const { removeUser, setUser, setUserId, setSection, removeUserId } =
  authSlice.actions;
export default authSlice.reducer;
