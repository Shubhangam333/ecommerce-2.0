import { configureStore } from "@reduxjs/toolkit";
import { authapi } from "./api/auth/authapi";
import { categoryapi } from "./api/category/categoryapi";

import authReducer from "./slice/authSlice";
import dashboardReducer from "./slice/dashboardSlice";
import sortReducer from "./slice/sortSlice";
import { styleapi } from "./api/style/styleapi";
import { productapi } from "./api/product/productapi";
import { userapi } from "./api/user/userapi";

export const store = configureStore({
  reducer: {
    [authapi.reducerPath]: authapi.reducer,
    [categoryapi.reducerPath]: categoryapi.reducer,
    [styleapi.reducerPath]: styleapi.reducer,
    [productapi.reducerPath]: productapi.reducer,
    [userapi.reducerPath]: userapi.reducer,
    auth: authReducer,
    dashboard: dashboardReducer,
    sort: sortReducer,
  },

  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({}).concat(
      authapi.middleware,
      categoryapi.middleware,
      styleapi.middleware,
      productapi.middleware,
      userapi.middleware
    ),
});
