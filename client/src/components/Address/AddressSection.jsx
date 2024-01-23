import { useState } from "react";
import AddressForm from "./AddressForm";

const AddressSection = () => {
  const [modal, setModal] = useState(false);
  return (
    <section className="basis-[60%] flex flex-col gap-2 items-start">
      <h1 className="text-lg">Delivery To</h1>
      <button
        className="bg-[#147D7B] text-white px-4 py-2 rounded-md hover:bg-[#298E83] active:bg-[#298E83] active:scale-95"
        onClick={() => setModal(true)}
      >
        Add New Address
      </button>
      {modal && <AddressForm setModal={setModal} />}
    </section>
  );
};

export default AddressSection;
