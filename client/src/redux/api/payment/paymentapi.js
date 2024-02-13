import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const paymentapi = createApi({
  reducerPath: "paymentapi",
  baseQuery: fetchBaseQuery({ baseUrl: "/api/payment" }),
  endpoints: (builder) => ({
    createPaymentIntent: builder.mutation({
      query: (amount) => ({
        url: "/payment-intent",
        method: "POST",
        body: amount,
      }),
    }),
  }),
});

export const { useCreatePaymentIntentMutation } = paymentapi;
