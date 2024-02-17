import { toast } from "react-toastify";
import { useDeleteCategoryByIdMutation } from "../../../redux/api/category/categoryapi";
import Table from "../Table";
import { useGetAllOrdersQuery } from "../../../redux/api/order/orderapi";

const columns = [
  {
    Header: "Id",
    accessor: "_id",
  },
  {
    Header: "User",
    accessor: "user",
    Cell: ({ cell: { value } }) =>
      value && value.firstName
        ? value.firstName + " " + value.lastName
        : "No User",
  },
  {
    Header: "Total Amount",
    accessor: "totalAmount",
  },
  {
    Header: "Items",
    accessor: "items",
    Cell: ({ cell: { value } }) => {
      if (value && value.length > 0) {
        return value.map((item) => (
          <div key={item.productId}>Product Name: {item.productId.title}</div>
        ));
      }
      return "No Items";
    },
  },
  {
    Header: "Payment Status",
    accessor: "paymentStatus",
  },
  {
    Header: "Payment Type",
    accessor: "paymentType",
  },
  {
    Header: "Coupon",
    accessor: "coupon",
    Cell: ({ cell: { value } }) => {
      if (value && value.length > 0) {
        return value.map((coupon) => (
          <div key={coupon.code}>
            Code: {coupon.code} | Value: {coupon.value}
          </div>
        ));
      }
      return "No Coupons";
    },
  },
  {
    Header: "Order Status",
    accessor: "orderStatus",
    Cell: ({ cell: { value } }) => {
      if (value && value.length > 0) {
        return value.map((status) => (
          <div key={status.date}>{status.type}</div>
        ));
      }
      return "No Order Status";
    },
  },
  {
    Header: "CreatedAt",
    accessor: "createdAt",
    Cell: ({ cell: { value } }) => {
      const formattedDate = formatDateTime(value);
      return formattedDate;
    },
  },
  {
    Header: "UpdatedAt",
    accessor: "updatedAt",
    Cell: ({ cell: { value } }) => {
      const formattedDate = formatDateTime(value);
      return formattedDate;
    },
  },
];

function formatDateTime(value) {
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
  return new Intl.DateTimeFormat("en-IN", options).format(dateObject);
}

const OrderList = () => {
  const { data } = useGetAllOrdersQuery();
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
        tableFor="adminorders"
        handleDeleteItem={handleDeleteItem}
      />
    )
  );
};

export default OrderList;
