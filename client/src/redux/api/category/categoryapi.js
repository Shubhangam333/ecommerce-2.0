import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const categoryapi = createApi({
  reducerPath: "categoryapi",
  baseQuery: fetchBaseQuery({ baseUrl: "/api/category" }),
  endpoints: (builder) => ({
    createCategory: builder.mutation({
      query: (credentials) => ({
        url: "/createCategory",
        method: "POST",
        body: credentials,
      }),
    }),
  }),
});

export const { useCreateCategoryMutation } = categoryapi;
