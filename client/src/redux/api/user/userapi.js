import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const userapi = createApi({
  reducerPath: "userapi",
  baseQuery: fetchBaseQuery({ baseUrl: "/api/auth" }),
  tagTypes: ["cartItems", "wishListItems"],
  endpoints: (builder) => ({
    addToCart: builder.mutation({
      query: (cartItem) => ({
        url: "/addToCart",
        method: "POST",
        body: cartItem,
      }),
      invalidatesTags: ["cartItems"],
    }),
    getCartItems: builder.query({
      query: () => ({
        url: "/getCartItems",
        method: "GET",
      }),
      providesTags: ["cartItems"],
    }),
    addToWishList: builder.mutation({
      query: (cartItem) => ({
        url: "/addToWishList",
        method: "POST",
        body: cartItem,
      }),
      invalidatesTags: ["wishListItems"],
    }),
    getWishListItems: builder.query({
      query: () => ({
        url: "/getWishListItems",
        method: "GET",
      }),
      providesTags: ["wishListItems"],
    }),
  }),
});

export const {
  useAddToCartMutation,
  useGetCartItemsQuery,
  useAddToWishListMutation,
  useGetWishListItemsQuery,
} = userapi;
