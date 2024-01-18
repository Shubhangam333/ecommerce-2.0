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
  }),
});

export const {
  useCreateProductMutation,
  useGetAllProductsQuery,
  useDeleteProductByIdMutation,
  useGetProductsBySubCategoryIdMutation,
} = productapi;
