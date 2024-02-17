const OrderPaymentDetails = ({
  paymentType,
  totalAmount,
  createdAt,
  orderStatus,
  updatedAt,
}) => {
  return (
    <div>
      <h2 className="text-xl font-bold mb-4">PaymentDetails</h2>
      <div className="flex flex-col gap-2 w-[70%]">
        <p className="flex justify-between font-bold text-lg ">
          Total Amount:{" "}
          <span className="font-normal text-md">{totalAmount}</span>
        </p>
        <p className="flex justify-between font-bold text-lg">
          Payment Mode:{" "}
          <span className="font-normal  text-md capitalize">{paymentType}</span>
        </p>
        <p className="flex justify-between font-bold text-lg">
          Status:{" "}
          <span className="font-normal  text-md capitalize">
            {orderStatus[0].type}
          </span>
        </p>
        <p className="flex justify-between font-bold text-lg">
          Ordered At:{" "}
          <span className="font-normal  text-md capitalize">
            {createdAt.slice(0, 10)}
          </span>
        </p>
        <p className="flex justify-between font-bold text-lg">
          Updated At:{" "}
          <span className="font-normal  text-md capitalize">
            {updatedAt.slice(0, 10)}
          </span>
        </p>
      </div>
    </div>
  );
};

export default OrderPaymentDetails;
