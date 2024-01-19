import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  sort: "title",
  orderBy: "asc",
  currentPage: 1,
  styles: [],
  stylesTitle: [],
  priceFilter: { lb: 0, hb: 1000000 },
  checkedInput: [],
};

export const sortSlice = createSlice({
  name: "sort",
  initialState,
  reducers: {
    setCurrentPage: (state, action) => {
      state.currentPage = action.payload;
    },
    setPriceFilter: (state, action) => {
      state.priceFilter.lb === action.payload.lb
        ? (state.priceFilter = { lb: 0, hb: 1000000 })
        : (state.priceFilter = action.payload);
    },
    setSortFilter: (state, action) => {
      state.sort = action.payload;
    },
    setOrderByFilter: (state, action) => {
      state.orderBy = action.payload;
    },
    setStyleByFilter: (state, action) => {
      const updatedStyles = state.styles.includes(action.payload)
        ? state.styles.filter((s) => s !== action.payload)
        : [...state.styles, action.payload];

      state.styles = updatedStyles;
      state.checkedInput = updatedStyles;
    },
    setStyleByFilterTitle: (state, action) => {
      const updatedStyles = state.stylesTitle.some(
        (s) => s.title === action.payload.title
      )
        ? state.stylesTitle.filter((s) => s.title !== action.payload.title)
        : [...state.stylesTitle, action.payload];

      state.stylesTitle = updatedStyles;
    },
    resetFilter: (state) => {
      (state.sort = "title"),
        (state.orderBy = "asc"),
        (state.currentPage = 1),
        (state.styles = []),
        (state.stylesTitle = []),
        (state.priceFilter = { lb: 0, hb: 1000000 }),
        (state.checkedInput = []);
    },
  },
});

export const {
  setSortFilter,
  setOrderByFilter,
  setStyleByFilter,
  setCurrentPage,
  setStyleByFilterTitle,
  setPriceFilter,
  resetFilter,
} = sortSlice.actions;
export default sortSlice.reducer;
