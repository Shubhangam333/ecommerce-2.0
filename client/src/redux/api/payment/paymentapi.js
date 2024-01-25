import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const paymentapi = createApi({
  reducerPath: "paymentapi",
  baseQuery: fetchBaseQuery({ baseUrl: "/api/payment" }),
  tagTypes: ["payment"],
  endpoints: (builder) => ({
    createPayment: builder.mutation({
      query: (cartItems) => ({
        url: "/process",
        method: "POST",
        body: cartItems,
      }),
      invalidatesTags: ["payment"],
    }),
    getPaymentInfo: builder.mutation({
      query: (sessionId) => ({
        url: `/paymentInfo?session_id=${sessionId}`,
        method: "POST",
      }),
    }),
  }),
});

export const { useCreatePaymentMutation, useGetPaymentInfoMutation } =
  paymentapi;
