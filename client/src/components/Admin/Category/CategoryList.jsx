import { toast } from "react-toastify";
import {
  useDeleteCategoryByIdMutation,
  useGetAllCategoriesQuery,
} from "../../../redux/api/category/categoryapi";
import Table from "../Table";
import { useEffect, useState } from "react";

const columns = [
  {
    Header: "Id",
    accessor: "_id",
  },
  {
    Header: "Slug",
    accessor: "slug",
  },
  {
    Header: "Title",
    accessor: "title",
  },
  {
    Header: "Parent",
    accessor: "parentId",
    Cell: ({ cell: { value } }) => {
      if (value && value.title) {
        const name = value.title;

        return name;
      }
      return "No Parent";
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
    Header: "CreatedAt",
    accessor: "createdAt",
    Cell: ({ cell: { value } }) => {
      // Create a Date object from the original date string
      const dateObject = new Date(value);

      // Define the format options for the date and time in Indian format
      const options = {
        year: "numeric",
        month: "long",
        day: "numeric",
        hour: "2-digit",
        minute: "2-digit",
        second: "2-digit",
        timeZone: "Asia/Kolkata",
      };

      const formattedDate = new Intl.DateTimeFormat("en-IN", options).format(
        dateObject
      );

      return formattedDate;
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

const CategoryList = () => {
  const { data } = useGetAllCategoriesQuery();
  const [deleteCatById] = useDeleteCategoryByIdMutation();

  const handleDeleteItem = async (id) => {
    try {
      await deleteCatById(id).unwrap();
      toast.success("Category Deleted Succssfully");
    } catch (error) {
      console.log("er", error);
      toast.error("Something went wrong. Please try again later");
    }
  };

  return (
    data && (
      <Table
        columns={columns}
        data={data.categories}
        tableFor="categories"
        handleDeleteItem={handleDeleteItem}
      />
    )
  );
};

export default CategoryList;
