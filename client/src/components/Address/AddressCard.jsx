const AddressCard = ({ address, handleDeleteAddress }) => {
  return (
    <div className="flex justify-between">
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
        <div className="flex gap-2">
          <span>Mobile:</span>
          <span className="font-bold">{address.mobileNumber}</span>
        </div>
        <div className="mt-2">
          <button
            className=" rounded-md border-[1px] border-slate-400 px-2"
            onClick={() => handleDeleteAddress(address._id)}
          >
            Remove
          </button>
        </div>
      </div>
      <div>
        <input type="radio" name="check" />
      </div>
    </div>
  );
};

export default AddressCard;
