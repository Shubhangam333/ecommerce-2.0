import { configureStore } from "@reduxjs/toolkit";
import { authapi } from "./api/auth/authapi";

export const store = configureStore({
  reducer: { [authapi.reducerPath]: authapi.reducer },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {},
    }).concat(authapi.middleware),
});
