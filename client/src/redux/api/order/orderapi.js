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
    getOrderByUserId: builder.query({
      query: (userId) => ({
        url: `/${userId}`,
        method: "GET",
      }),
    }),
    getOrderByOrderId: builder.mutation({
      query: (orderId) => ({
        url: `/${orderId}`,
        method: "POST",
      }),
    }),
    getAllOrders: builder.query({
      query: () => ({
        url: `/orders/all`,
        method: "GET",
      }),
    }),
  }),
});

export const {
  useCreateOrderMutation,
  useGetOrderByUserIdQuery,
  useGetOrderByOrderIdMutation,
  useGetAllOrdersQuery,
} = orderapi;
