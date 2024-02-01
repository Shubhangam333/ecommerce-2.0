import Loader from "../Loader/Loader";

const AddressCard = ({
  address,
  handleDeleteAddress,
  handleUpdateAddress,
  addressupdateload,
}) => {
  return (
    <div className="flex justify-between address-card">
      <div className="flex flex-col gap-[1px]">
        <div className="flex text-md text-[#147D7B] font-bold gap-2">
          <p>{address.firstname}</p>
          <p>{address.lastname}</p>
        </div>
        <div className="flex text-sm gap-2 flex-col">
          <p> {address.address}</p>
          <p>{address.locality}</p>
          <p>{address.landmark}</p>
          <p>
            <span>{address.cityDistrictTown}</span> -{" "}
            <span className="font-bold">{address.postalCode}</span>
          </p>
        </div>
        <div className="flex gap-2 items-center">
          <span>Mobile -</span>
          <span className="font-bold text-sm">{address.mobileNumber}</span>
        </div>
        <div className="mt-2 flex gap-2">
          <button
            className=" rounded-md border-[1px] border-slate-400 px-2"
            onClick={() => handleDeleteAddress(address._id)}
          >
            Remove
          </button>

          {!address.defaultAddress && (
            <button
              className=" rounded-md border-[1px] border-slate-400 px-2"
              onClick={() => handleUpdateAddress(address._id)}
            >
              Set As Default
            </button>
          )}
        </div>
      </div>
      <div className="flex flex-col gap-2">
        <p className=" px-2 rounded-md capitalize bg-[#147D7B] text-white text-sm">
          {address.addressType}
        </p>

        {address.defaultAddress && (
          <p className=" bg-red-500 px-2 rounded-md text-white text-sm">
            Default
          </p>
        )}
      </div>
    </div>
  );
};

export default AddressCard;
