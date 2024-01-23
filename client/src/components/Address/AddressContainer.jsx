import AddressSection from "./AddressSection";
import AddressSummary from "./AddressSummary";

const AddressContainer = () => {
  return (
    <section className="flex p-6 gap-6">
      <AddressSection />
      <AddressSummary />
    </section>
  );
};

export default AddressContainer;
