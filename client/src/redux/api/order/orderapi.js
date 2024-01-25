import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const orderapi = createApi({
  reducerPath: "orderapi",
  baseQuery: fetchBaseQuery({ baseUrl: "/api/order" }),
  endpoints: (builder) => ({
    createOrder: builder.mutation({
      query: (data) => ({
        url: "/create",
        method: "POST",
        body: data,
      }),
    }),
  }),
});

export const { useCreateOrderMutation } = orderapi;
