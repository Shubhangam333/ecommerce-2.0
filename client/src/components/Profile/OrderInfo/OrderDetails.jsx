import { useParams } from "react-router-dom";
import { useGetOrderByOrderIdMutation } from "../../../redux/api/order/orderapi";
import Loader from "../../Loader/Loader";
import { useCallback, useEffect } from "react";
import AddressDetails from "./AddressDetails";
import OrderedProductList from "./OrderedProductList";
import OrderPaymentDetails from "./OrderPaymentDetails";

const OrderDetails = () => {
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
          />
        </div>
      </section>
    </section>
  );
};

export default OrderDetails;
