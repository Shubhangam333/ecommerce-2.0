import { configureStore } from "@reduxjs/toolkit";
import { authapi } from "./api/auth/authapi";
import authReducer from "./slice/authSlice";
import { setupListeners } from "@reduxjs/toolkit/query";

export const store = configureStore({
  reducer: { [authapi.reducerPath]: authapi.reducer, auth: authReducer },

  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(authapi.middleware),
});

setupListeners(store.dispatch);
