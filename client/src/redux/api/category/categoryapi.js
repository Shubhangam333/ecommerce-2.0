import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const categoryapi = createApi({
  reducerPath: "categoryapi",
  baseQuery: fetchBaseQuery({ baseUrl: "/api/category" }),
  tagTypes: ["categories"],
  endpoints: (builder) => ({
    createCategory: builder.mutation({
      query: (credentials) => ({
        url: "/createCategory",
        method: "POST",
        body: credentials,
      }),
      invalidatesTags: ["categories"],
    }),
    updateCategory: builder.mutation({
      query: (categoryData) => ({
        url: `/updateCategory`,
        method: "POST",
        body: categoryData,
      }),
      invalidatesTags: ["categories"],
    }),
    deleteCategoryById: builder.mutation({
      query: (id) => ({
        url: `/${id}`,
        method: "DELETE",
      }),
      invalidatesTags: ["categories"],
    }),
    getAllCategories: builder.query({
      query: () => ({
        url: "/categories",
        method: "GET",
      }),
      providesTags: ["categories"],
    }),
    getAllParentCategories: builder.query({
      query: () => ({
        url: "/parentCategories",
        method: "GET",
      }),
      providesTags: ["categories"],
    }),
    getAllSubCategories: builder.query({
      query: () => ({
        url: "/subCategories",
        method: "GET",
      }),
    }),
    getAllSubCatByParentId: builder.mutation({
      query: (parentCatId) => ({
        url: `/subCategories/${parentCatId}`,
        method: "GET",
      }),
    }),
    getAllCategoriesWithSubCat: builder.query({
      query: () => ({
        url: `/allcategories`,
        method: "GET",
      }),
    }),
    getCategoryBySlug: builder.mutation({
      query: (slug) => ({
        url: `/category/${slug}`,
        method: "GET",
      }),
    }),
  }),
});

export const {
  useCreateCategoryMutation,
  useUpdateCategoryMutation,
  useGetAllCategoriesQuery,
  useDeleteCategoryByIdMutation,
  useGetAllParentCategoriesQuery,
  useGetAllSubCategoriesQuery,
  useGetAllSubCatByParentIdMutation,
  useGetAllCategoriesWithSubCatQuery,
  useGetCategoryBySlugMutation,
} = categoryapi;
