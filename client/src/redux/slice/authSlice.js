import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  // user: localStorage.getItem("user")
  //   ? JSON.parse(localStorage.getItem("user"))
  //   : null,
  userId: "",
};

export const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    setUser: (state, action) => {
      state.user = action.payload;
      localStorage.setItem("user", JSON.stringify(state.user));
    },
    removeUser: (state) => {
      state.user = null;
      localStorage.removeItem("user");
    },
    setUserId: (state, action) => {
      state.userId = action.payload;
    },
  },
});

export const { removeUser, setUser, setUserId } = authSlice.actions;
export default authSlice.reducer;
