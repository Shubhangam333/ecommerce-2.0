import { useSelector } from "react-redux";
import { useGetOrderByUserIdQuery } from "../../redux/api/order/orderapi";
import Table from "../Admin/Table";
import UserOrderTable from "./UserOrderTable";

const columns = [
  {
    Header: "Id",
    accessor: "_id",
  },
  {
    Header: "Total Amount",
    accessor: "totalAmount",
  },
  {
    Header: "Payment Status",
    accessor: "paymentStatus",
  },
  {
    Header: "Order Status",
    accessor: "orderStatus",
    Cell: ({ cell: { value } }) => {
      return value[0].type;
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

const OrderList = () => {
  const { userId } = useSelector((state) => state.auth);
  const { data } = useGetOrderByUserIdQuery(userId);

  console.log("d", data);

  return (
    data && (
      <UserOrderTable columns={columns} data={data} tableFor="userorders" />
    )
  );
};

export default OrderList;
