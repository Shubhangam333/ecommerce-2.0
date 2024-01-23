import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  cartTotal: localStorage.getItem("cartTotal")
    ? JSON.parse(localStorage.getItem("cartTotal"))
    : 0,
  gst: 160,
};

export const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    setCartTotal: (state, action) => {
      localStorage.setItem("cartTotal", JSON.stringify(action.payload));
      state.cartTotal = action.payload;
    },
  },
});

export const { setCartTotal } = cartSlice.actions;
export default cartSlice.reducer;
