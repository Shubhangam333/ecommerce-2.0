const AddressDetails = ({ address }) => {
  return (
    <div className="flex justify-between py-4">
      <div className="flex flex-col gap-[1px]">
        <h2 className="text-2xl font-bold">Address Details</h2>
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
        <div className="flex gap-2 text-sm">
          <span>Mobile:</span>
          <span className="font-bold">{address.mobileNumber}</span>
        </div>
      </div>
    </div>
  );
};

export default AddressDetails;
