import { toast } from "react-toastify";
import {
  useDeleteCategoryByIdMutation,
  useGetAllCategoriesQuery,
} from "../../../redux/api/category/categoryapi";
import Table from "../Table";
import { useGetAllUsersQuery } from "../../../redux/api/user/userapi";

const columns = [
  {
    Header: "Id",
    accessor: "_id",
  },
  {
    Header: "firstName",
    accessor: "firstName",
  },
  {
    Header: "lastName",
    accessor: "lastName",
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
];

const UsersList = () => {
  const { data } = useGetAllUsersQuery();
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
        data={data}
        tableFor="adminusers"
        handleDeleteItem={handleDeleteItem}
      />
    )
  );
};

export default UsersList;
