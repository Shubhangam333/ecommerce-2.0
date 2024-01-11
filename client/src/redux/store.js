import { configureStore } from "@reduxjs/toolkit";
import { authapi } from "./api/auth/authapi";
import authReducer from "./slice/authSlice";
import dashboardReducer from "./slice/dashboardSlice";

export const store = configureStore({
  reducer: {
    [authapi.reducerPath]: authapi.reducer,
    auth: authReducer,
    dashboard: dashboardReducer,
  },

  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(authapi.middleware),
});
