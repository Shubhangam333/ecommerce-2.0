import { useEffect, useState } from "react";
import AddressForm from "./AddressForm";
import {
  useDeleteAddressMutation,
  useGetAllAddressQuery,
  useUpdateAddressMutation,
} from "../../redux/api/address/addressapi";
import AddressCard from "./AddressCard";
import { toast } from "react-toastify";
import Loader from "../Loader/Loader";
import { useDispatch } from "react-redux";
import { clearAddress, setCartAddress } from "../../redux/slice/cartSlice";

const AddressSection = () => {
  const [modal, setModal] = useState(false);
  const { data, isLoading } = useGetAllAddressQuery();
  const [deleteAddress] = useDeleteAddressMutation();
  const [updateAddress, { isLoading: addressupdateload }] =
    useUpdateAddressMutation();
  const dispatch = useDispatch();

  useEffect(() => {
    if (data) {
      const defaultAddress = data.find(
        (address) => address.defaultAddress === true
      );

      if (defaultAddress) {
        dispatch(setCartAddress(defaultAddress));
      } else {
        dispatch(clearAddress());
      }
    }
  }, [dispatch, data]);

  const handleDeleteAddress = async (id) => {
    try {
      const res = await deleteAddress(id).unwrap();
      if (res) {
        toast.success(res.message);
      }
    } catch (error) {
      toast.error("Something went wrong");
    }
  };
  const handleUpdateAddress = async (id) => {
    try {
      const res = await updateAddress(id).unwrap();
      if (res) {
        toast.success(res.message);
      }
    } catch (error) {
      toast.error("Something went wrong");
    }
  };

  return (
    <section className="basis-[60%] flex flex-col gap-2 items-start">
      <h1 className="text-lg">Delivery To</h1>
      <div className="flex flex-col gap-4  w-full">
        <div className="basis-[100%] flex flex-col gap-4">
          {isLoading && <Loader />}
          {data &&
            data.map((address) => (
              <AddressCard
                key={address._id}
                address={address}
                handleDeleteAddress={handleDeleteAddress}
                handleUpdateAddress={handleUpdateAddress}
                addressupdateload={addressupdateload}
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
