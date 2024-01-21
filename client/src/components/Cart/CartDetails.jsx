import CartSection from "./CartSection";
import CartSummary from "./CartSummary";

const CartDetails = () => {
  return (
    <section className="flex p-6 gap-6">
      <CartSection />
      <CartSummary />
    </section>
  );
};

export default CartDetails;
