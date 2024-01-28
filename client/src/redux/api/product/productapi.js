import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const productapi = createApi({
  reducerPath: "productapi",
  baseQuery: fetchBaseQuery({ baseUrl: "/api/productRoutes" }),
  tagTypes: ["products", "reviews"],
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
    getProductBySlugName: builder.mutation({
      query: (slug) => ({
        url: `/product/${slug}`,
        method: "GET",
      }),
    }),
    getProductsBySubCategoryId: builder.mutation({
      query: ({
        categoryId,
        currentPage,
        section,
        sort,
        orderBy,
        styles,
        priceFilter,
      }) => ({
        url: `/products/${categoryId}?page=${currentPage}&section=${section}&price[lte]=${priceFilter.hb}&price[gte]=${priceFilter.lb}&sortBy=${sort}&orderBy=${orderBy}`,
        method: "POST",
        body: { styles },
      }),
    }),
    createProductReview: builder.mutation({
      query: (data) => ({
        url: "/createReview",
        method: "POST",
        body: data,
      }),
      invalidatesTags: ["reviews"],
    }),
    getAllProductReview: builder.query({
      query: (productId) => ({
        url: `/reviews/${productId}`,
        method: "POST",
      }),
      providesTags: ["reviews"],
    }),
  }),
});

export const {
  useCreateProductMutation,
  useGetAllProductsQuery,
  useDeleteProductByIdMutation,
  useGetProductsBySubCategoryIdMutation,
  useGetProductBySlugNameMutation,
  useCreateProductReviewMutation,
  useGetAllProductReviewQuery,
} = productapi;
