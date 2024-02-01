import { toast } from "react-toastify";
import Table from "../Table";
import {
  useDeleteStyleByIdMutation,
  useGetAllStylesQuery,
} from "../../../redux/api/style/styleapi";

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
    Header: "Section",
    accessor: "section",
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

const StyleList = () => {
  const { data } = useGetAllStylesQuery();
  const [deleteStyleById] = useDeleteStyleByIdMutation();

  const handleDeleteItem = async (id) => {
    try {
      await deleteStyleById(id).unwrap();
      toast.success("Style Deleted Succssfully");
    } catch (error) {
      console.log("er", error);
      toast.error("Something went wrong. Please try again later");
    }
  };

  return (
    data && (
      <Table
        columns={columns}
        data={data.styles}
        tableFor="styles"
        handleDeleteItem={handleDeleteItem}
      />
    )
  );
};

export default StyleList;
