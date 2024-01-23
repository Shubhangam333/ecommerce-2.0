import { useState } from "react";
import AddressForm from "./AddressForm";
import {
  useDeleteAddressMutation,
  useGetAllAddressQuery,
} from "../../redux/api/address/addressapi";
import AddressCard from "./AddressCard";
import { toast } from "react-toastify";

const AddressSection = () => {
  const [modal, setModal] = useState(false);
  const { data } = useGetAllAddressQuery();
  const [deleteAddress] = useDeleteAddressMutation();

  const handleDeleteAddress = async (id) => {
    try {
      const res = await deleteAddress(id).unwrap();
      toast.success(res.message);
    } catch (error) {
      toast.error("Something went wrong");
    }
  };

  console.log("d", data);
  return (
    <section className="basis-[60%] flex flex-col gap-2 items-start">
      <h1 className="text-lg">Delivery To</h1>
      <div className="flex items-center justify-between w-full">
        <div className="basis-[100%] flex flex-col gap-4">
          {data &&
            data.map((address) => (
              <AddressCard
                key={address._id}
                address={address}
                handleDeleteAddress={handleDeleteAddress}
              />
            ))}
        </div>
        <div className="basis-[100%] flex justify-center">
          <button
            className="bg-[#147D7B]  text-white px-4 py-2 rounded-md hover:bg-[#298E83] active:bg-[#298E83] active:scale-95"
            onClick={() => setModal(true)}
          >
            Add New Address
          </button>
        </div>
      </div>

      {modal && <AddressForm setModal={setModal} />}
    </section>
  );
};

export default AddressSection;
