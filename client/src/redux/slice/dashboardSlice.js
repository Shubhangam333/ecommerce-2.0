import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  isActive: false,
};

export const dashboardSlice = createSlice({
  name: "dashboard",
  initialState,
  reducers: {
    setNavActive: (state) => {
      state.isActive = !state.isActive;
    },
  },
});

export const { setNavActive } = dashboardSlice.actions;
export default dashboardSlice.reducer;
