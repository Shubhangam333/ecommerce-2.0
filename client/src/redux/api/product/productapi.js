import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const productapi = createApi({
  reducerPath: "productapi",
  baseQuery: fetchBaseQuery({ baseUrl: "/api/productRoutes" }),
  tagTypes: ["products"],
  endpoints: (builder) => ({
    createProduct: builder.mutation({
      query: (credentials) => ({
        url: "/createProduct",
        method: "POST",
        body: credentials,
      }),
      invalidatesTags: ["products"],
    }),
    deleteProductById: builder.mutation({
      query: (id) => ({
        url: `/${id}`,
        method: "DELETE",
      }),
      invalidatesTags: ["products"],
    }),
    getAllProducts: builder.query({
      query: () => ({
        url: "/products",
        method: "GET",
      }),
      providesTags: ["products"],
    }),
    getProductsBySubCategoryId: builder.mutation({
      query: (data) => ({
        url: `/products/${data.categoryId}?page=${data.currenPage}&section=${data.section}&sort=${data.sort}`,
        method: "GET",
      }),
      providesTags: ["products"],
    }),
  }),
});

export const {
  useCreateProductMutation,
  useGetAllProductsQuery,
  useDeleteProductByIdMutation,
  useGetProductsBySubCategoryIdMutation,
} = productapi;
