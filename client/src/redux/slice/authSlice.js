import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  user: null,
  userId: localStorage.getItem("userId")
    ? JSON.parse(localStorage.getItem("userId"))
    : "",
  section: "men",
};

export const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    setUser: (state, action) => {
      state.user = action.payload;
    },
    removeUser: (state) => {
      state.user = null;
    },
    setUserId: (state, action) => {
      localStorage.setItem("userId", JSON.stringify(action.payload));
      state.userId = action.payload;
    },
    setSection: (state, action) => {
      state.section = action.payload;
    },
  },
});

export const { removeUser, setUser, setUserId, setSection } = authSlice.actions;
export default authSlice.reducer;
