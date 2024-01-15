import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const styleapi = createApi({
  reducerPath: "styleapi",
  baseQuery: fetchBaseQuery({ baseUrl: "/api/style" }),
  tagTypes: ["styles"],
  endpoints: (builder) => ({
    createStyle: builder.mutation({
      query: (credentials) => ({
        url: "/createStyle",
        method: "POST",
        body: credentials,
      }),
      invalidatesTags: ["styles"],
    }),
    deleteStyleById: builder.mutation({
      query: (id) => ({
        url: `/${id}`,
        method: "DELETE",
      }),
      invalidatesTags: ["styles"],
    }),
    getAllStyles: builder.query({
      query: () => ({
        url: "/styles",
        method: "GET",
      }),
      providesTags: ["styles"],
    }),
    getAllStylesBySubCat: builder.mutation({
      query: (subCatId) => ({
        url: `/styles/${subCatId}`,
        method: "GET",
      }),
      providesTags: ["styles"],
    }),
  }),
});

export const {
  useCreateStyleMutation,
  useGetAllStylesQuery,
  useDeleteStyleByIdMutation,
  useGetAllStylesBySubCatMutation,
} = styleapi;
