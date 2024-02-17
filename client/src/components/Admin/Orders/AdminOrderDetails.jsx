import { useParams } from "react-router-dom";
import { useGetOrderByOrderIdMutation } from "../../../redux/api/order/orderapi";
import { useCallback, useEffect } from "react";
import Loader from "../../Loader/Loader";
import OrderedProductList from "../../Profile/OrderInfo/OrderedProductList";
import AddressDetails from "../../Profile/OrderInfo/AddressDetails";
import OrderPaymentDetails from "../../Profile/OrderInfo/OrderPaymentDetails";

const AdminOrderDetails = () => {
  const params = useParams();
  const [orderDetails, { data, isFetching }] = useGetOrderByOrderIdMutation(
    params.orderId
  );

  const getOrderDetails = useCallback(async () => {
    try {
      const res = await orderDetails(params.orderId);
      console.log("r", res);
    } catch (error) {
      console.log("er", error);
    }
  }, [orderDetails, params]);

  useEffect(() => {
    getOrderDetails();
  }, [getOrderDetails]);

  if (isFetching) {
    return <Loader />;
  }

  if (!data) {
    return <h1>Not found</h1>;
  }

  console.log("d", data);
  return (
    <section className="flex flex-col gap-2">
      <section className="px-12 flex gap-4 py-6">
        <div className="basis-[70%]">
          <OrderedProductList productdata={data.items} />
        </div>
        <div className="basis-[30%]">
          <AddressDetails address={data.address} />
          <OrderPaymentDetails
            paymentType={data.paymentType}
            totalAmount={data.totalAmount}
            createdAt={data.createdAt}
            orderStatus={data.orderStatus}
            updatedAt={data.updatedAt}
          />
        </div>
      </section>
    </section>
  );
};

export default AdminOrderDetails;
