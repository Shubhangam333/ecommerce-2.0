import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const addressapi = createApi({
  reducerPath: "addressapi",
  baseQuery: fetchBaseQuery({ baseUrl: "/api/address" }),
  tagTypes: ["address"],
  endpoints: (builder) => ({
    createAddress: builder.mutation({
      query: (addressinfo) => ({
        url: "/newaddress",
        method: "POST",
        body: addressinfo,
      }),
      invalidatesTags: ["address"],
    }),
    deleteAddress: builder.mutation({
      query: (addressId) => ({
        url: `/${addressId}`,
        method: "DELETE",
      }),
      invalidatesTags: ["address"],
    }),
    getAllAddress: builder.query({
      query: () => ({
        url: `/alladdress`,
        method: "GET",
      }),
      providesTags: ["address"],
    }),
  }),
});

export const {
  useCreateAddressMutation,
  useGetAllAddressQuery,
  useDeleteAddressMutation,
} = addressapi;
