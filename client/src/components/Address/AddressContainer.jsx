import AddressSection from "./AddressSection";
import AddressSummary from "./AddressSummary";

const AddressContainer = () => {
  return (
    <section className="flex p-6 gap-6 md:flex-row flex-col">
      <AddressSection />
      <AddressSummary />
    </section>
  );
};

export default AddressContainer;
