import { toast } from "react-toastify";
import Table from "../Table";
import { useEffect, useState } from "react";
import {
  useDeleteProductByIdMutation,
  useGetAllProductsQuery,
} from "../../../redux/api/product/productapi";

const columns = [
  {
    Header: "Id",
    accessor: "_id",
  },
  {
    Header: "Title",
    accessor: "title",
  },
  {
    Header: "Slug",
    accessor: "slug",
  },
  {
    Header: "Price",
    accessor: "price",
  },
  {
    Header: "Category",
    accessor: "category",
    Cell: ({ cell: { value } }) => {
      const title = value.title;

      return title;
    },
  },
  {
    Header: "SubCategory",
    accessor: "subCategory",
    Cell: ({ cell: { value } }) => {
      const title = value.title;

      return title;
    },
  },
  {
    Header: "Product Images",
    accessor: "productImages",
    Cell: ({ cell: { value } }) => {
      const url = value[0].url;

      return <img src={url} className="w-12 h-12 object-contain" />;
    },
  },
  {
    Header: "CreatedBy",
    accessor: "createdBy",
    Cell: ({ cell: { value } }) => {
      const name = value.firstName;

      return name;
    },
  },

  {
    Header: "UpdatedAt",
    accessor: "updatedAt",
    Cell: ({ cell: { value } }) => {
      // Create a Date object from the original date string
      const dateObject = new Date(value);
      const options = {
        year: "numeric",
        month: "long",
        day: "numeric",
        hour: "2-digit",
        minute: "2-digit",
        second: "2-digit",
        timeZone: "Asia/Kolkata",
      };

      // Format the date using Intl.DateTimeFormat
      const formattedDate = new Intl.DateTimeFormat("en-IN", options).format(
        dateObject
      );

      return formattedDate;
    },
  },
];

const ProductList = () => {
  const { data } = useGetAllProductsQuery();
  const [deleteProductById] = useDeleteProductByIdMutation();

  const handleDeleteItem = async (id) => {
    try {
      await deleteProductById(id).unwrap();
      toast.success("Product Deleted Succssfully");
    } catch (error) {
      toast.error("Something went wrong. Please try again later");
    }
  };

  return (
    data && (
      <Table
        columns={columns}
        data={data.products}
        tableFor="products"
        handleDeleteItem={handleDeleteItem}
      />
    )
  );
};

export default ProductList;
