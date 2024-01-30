import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  cartTotal: localStorage.getItem("cartTotal")
    ? JSON.parse(localStorage.getItem("cartTotal"))
    : 0,
  cartItems: localStorage.getItem("cartItems")
    ? JSON.parse(localStorage.getItem("cartItems"))
    : [],
  cartAddress: localStorage.getItem("cartAddress")
    ? JSON.parse(localStorage.getItem("cartAddress"))
    : null,
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
    setCartItems: (state, action) => {
      localStorage.setItem("cartItems", JSON.stringify(action.payload));
      state.cartItems = action.payload;
    },
    setCartAddress: (state, action) => {
      localStorage.setItem("cartAddress", JSON.stringify(action.payload));
      state.cartAddress = action.payload;
    },
    clearAddress: (state) => {
      localStorage.removeItem("cartAddress");
      state.cartAddress = null;
    },
    clearCart: (state) => {
      localStorage.removeItem("cartItems");
      localStorage.removeItem("cartAddress");
      localStorage.removeItem("cartTotal");
      state.cartAddress = null;
      state.cartTotal = 0;
      state.cartItems = [];
    },
  },
});

export const {
  setCartTotal,
  setCartItems,
  setCartAddress,
  clearCart,
  clearAddress,
} = cartSlice.actions;
export default cartSlice.reducer;
