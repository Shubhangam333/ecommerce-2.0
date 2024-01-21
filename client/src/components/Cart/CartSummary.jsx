import { useEffect, useState } from "react";

const CartSummary = ({ cartItems }) => {
  const [price, setPrice] = useState(0);
  useEffect(() => {
    const totalPrice = cartItems.reduce((accumulator, currentItem) => {
      const { product, quantity } = currentItem;
      const itemPrice = product.price * quantity;
      return accumulator + itemPrice;
    }, 0);
    setPrice(totalPrice);
  }, [cartItems]);
  return (
    <div className="basis-[30%] flex flex-col">
      <button className="hover:bg-[#298E83] bg-[#147D7B] py-2 rounded-md text-white">
        Place Order
      </button>
      <div className="flex flex-col gap-6 p-2 my-4">
        <h2>Billing Details</h2>
        <div className="flex flex-col gap-2 px-4 ">
          <div className="flex justify-between">
            <span className="text-lg font-light">Cart Total</span>
            <span className="text-md font-bold">1200</span>
          </div>
          <div className="flex justify-between">
            <span className="text-lg font-light">GST</span>
            <span className="text-md font-light">160</span>
          </div>
          <div className="flex justify-between">
            <span className="text-lg font-light">Shipping Charges</span>
            <span className="text-md font-light">0</span>
          </div>
          <div className="flex justify-between">
            <span className="text-lg font-light">Total Amount</span>
            <span className="text-md font-bold">{price}</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CartSummary;
