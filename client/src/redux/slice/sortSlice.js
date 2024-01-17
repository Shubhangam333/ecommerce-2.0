import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  sort: "title",
};

export const sortSlice = createSlice({
  name: "sort",
  initialState,
  reducers: {
    setSortFilter: (state, action) => {
      state.sort = action.payload;
    },
  },
});

export const { setSortFilter } = sortSlice.actions;
export default sortSlice.reducer;
