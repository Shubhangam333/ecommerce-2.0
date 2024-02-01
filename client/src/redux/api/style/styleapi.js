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
    updateStyle: builder.mutation({
      query: (credentials) => ({
        url: "/updateStyle",
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
    getAllStylesBySubCatAndSection: builder.mutation({
      query: ({ subCatId, section }) => ({
        url: `/styles/${subCatId}/${section}`,
        method: "GET",
      }),
      providesTags: ["styles"],
    }),
    getStyleDetailById: builder.mutation({
      query: (styleId) => ({
        url: `/getStyle/${styleId}`,
        method: "POST",
      }),
    }),
  }),
});

export const {
  useCreateStyleMutation,
  useUpdateStyleMutation,
  useGetAllStylesQuery,
  useDeleteStyleByIdMutation,
  useGetAllStylesBySubCatAndSectionMutation,
  useGetStyleDetailByIdMutation,
} = styleapi;
