import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  sort: "title",
  orderBy: "asc",
};

export const sortSlice = createSlice({
  name: "sort",
  initialState,
  reducers: {
    setSortFilter: (state, action) => {
      state.sort = action.payload;
    },
    setOrderByFilter: (state, action) => {
      state.orderBy = action.payload;
    },
  },
});

export const { setSortFilter, setOrderByFilter } = sortSlice.actions;
export default sortSlice.reducer;
