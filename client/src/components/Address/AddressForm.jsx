import { useEffect, useRef, useState } from "react";
import { CountryDropdown, RegionDropdown } from "react-country-region-selector";
import { Controller, useForm } from "react-hook-form";
import { IoClose } from "react-icons/io5";
import { useCreateAddressMutation } from "../../redux/api/address/addressapi";
import { toast } from "react-toastify";

const AddressForm = ({ setModal }) => {
  const [country, setCountry] = useState("");
  const [region, setRegion] = useState("");
  const addressRef = useRef();
  const [createAddress, { isLoading }] = useCreateAddressMutation();

  const {
    control,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm();

  const onSubmit = async (data) => {
    console.log(data);
    if (country.length === 0 || region.length === 0) {
      return;
    }
    try {
      await createAddress({ ...data, country, state: region }).unwrap();
      reset();
      setModal(false);
      toast.success("Address Created");
    } catch (error) {
      toast.error("Something went wrong");
    }
  };

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (addressRef.current && !addressRef.current.contains(event.target)) {
        setModal(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [addressRef, setModal]);

  return (
    <div className="fixed inset-0 z-[40000] flex  justify-center  bg-[rgba(0,0,0,0.7)]">
      <div
        ref={addressRef}
        className="bg-white  w-[550px] flex flex-col gap-4 p-4 rounded-md overflow-y-scroll"
      >
        <div className="flex justify-between text-slate-500 ">
          <h2 className="text-2xl ">Add New Address</h2>
          <button
            className=" p-2 text-lg rounded-lg border-[1px] border-slate-400 transition-opacity"
            onClick={() => setModal(false)}
          >
            <IoClose />
          </button>
        </div>
        <form
          onSubmit={handleSubmit(onSubmit)}
          className="border-[1px] p-4 border-slate-500  flex flex-col gap-y-2"
        >
          <div className="flex justify-between w-full gap-2">
            <div className="basis-[100%]">
              <Controller
                name="firstname"
                control={control}
                rules={{ required: "First Name is required" }}
                render={({ field }) => (
                  <input
                    {...field}
                    placeholder="FirstName"
                    className="px-2 py-2 w-full rounded-lg border-[1px] border-slate-400 focus:border-blue-400 outline-none "
                  />
                )}
              />
              <p className="text-red-500 px-2">{errors.firstname?.message}</p>
            </div>
            <div className="basis-[100%]">
              <Controller
                name="lastname"
                control={control}
                rules={{ required: "Last Name is required" }}
                render={({ field }) => (
                  <input
                    {...field}
                    placeholder="LastName"
                    className="px-2 py-2 w-full rounded-lg border-[1px] border-slate-400 focus:border-blue-400 outline-none "
                  />
                )}
              />
              <p className="text-red-500 px-2">{errors.lastname?.message}</p>
            </div>
          </div>

          <div>
            <Controller
              name="address"
              control={control}
              rules={{
                required: "House Number or  Building Name is required",
              }}
              render={({ field }) => (
                <input
                  placeholder="H No. , Building Name"
                  className="px-2 py-2 w-full rounded-lg border-[1px] border-slate-400 focus:border-blue-400 outline-none "
                  {...field}
                />
              )}
            />
            <p className="text-red-500 px-2">{errors.address?.message}</p>
          </div>
          <div>
            <Controller
              name="locality"
              control={control}
              rules={{
                required: "Street Name is required",
              }}
              render={({ field }) => (
                <input
                  placeholder="Street Name , Locality is required"
                  className="px-2 py-2 w-full rounded-lg border-[1px] border-slate-400 focus:border-blue-400 outline-none "
                  {...field}
                />
              )}
            />
            <p className="text-red-500 px-2">{errors.locality?.message}</p>
          </div>
          <div>
            <Controller
              name="landmark"
              control={control}
              rules={{
                required: "Landmark is required",
              }}
              render={({ field }) => (
                <input
                  placeholder="Landmark is required"
                  className="px-2 py-2 w-full rounded-lg border-[1px] border-slate-400 focus:border-blue-400 outline-none "
                  {...field}
                />
              )}
            />
            <p className="text-red-500 px-2">{errors.landmark?.message}</p>
          </div>

          <div className="flex justify-between gap-2">
            <div className="basis-[100%]">
              <Controller
                name="cityDistrictTown"
                control={control}
                rules={{ required: "City is required" }}
                render={({ field }) => (
                  <input
                    {...field}
                    placeholder="City"
                    className="px-2 py-2 w-full rounded-lg border-[1px] border-slate-400 focus:border-blue-400 outline-none "
                  />
                )}
              />
              <p className="text-red-500 px-2">
                {errors.cityDistrictTown?.message}
              </p>
            </div>

            <div className="basis-[100%]">
              <Controller
                name="postalCode"
                control={control}
                rules={{ required: "Postal Code is required" }}
                render={({ field }) => (
                  <input
                    type="text"
                    {...field}
                    placeholder="Postal Code"
                    className="px-2 py-2 w-full rounded-lg border-[1px] border-slate-400 focus:border-blue-400 outline-none "
                  />
                )}
              />
              <p className="text-red-500 px-2">{errors.postalCode?.message}</p>
            </div>
          </div>
          <div className="flex gap-2 justify-between">
            <div className="basis-[100%]">
              <CountryDropdown
                id="country"
                value={country}
                onChange={(val) => setCountry(val)}
                className="px-2 py-2 w-full rounded-lg border-[1px] border-slate-400 focus:border-blue-400 outline-none "
              />
              <p className="text-red-500 px-2">
                {country.length === 0 && "Country is Required"}
              </p>
            </div>
            <div className="basis-[100%]">
              <RegionDropdown
                country={country}
                value={region}
                id="region"
                onChange={(val) => setRegion(val)}
                className="px-2 py-2 w-full rounded-lg border-[1px] border-slate-400 focus:border-blue-400 outline-none "
              />
              <p className="text-red-500 px-2">
                {region.length === 0 && "Region is Required"}
              </p>
            </div>
          </div>
          <div>
            <Controller
              name="mobileNumber"
              control={control}
              rules={{
                required: "Mobile Number is required",
                pattern: {
                  value: /^[0-9]{10}$/,
                  message: "Enter a valid 10-digit mobile number",
                },
              }}
              render={({ field, fieldState }) => (
                <>
                  <input
                    type="text"
                    {...field}
                    className="px-2 py-2 w-full rounded-lg border-[1px] border-slate-400 focus:border-blue-400 outline-none "
                    placeholder="Enter your mobile number"
                  />
                  {fieldState.error && (
                    <p className="text-red-500 px-2">
                      {fieldState.error.message}
                    </p>
                  )}
                </>
              )}
            />
          </div>
          <div>
            <Controller
              name="addressType"
              control={control}
              defaultValue=""
              rules={{ required: "Address type is required" }}
              render={({ field }) => (
                <select
                  {...field}
                  className="px-2 py-2 w-full rounded-lg border-[1px] border-slate-400 focus:border-blue-400 outline-none "
                >
                  <option value="" disabled>
                    Select an address type
                  </option>
                  <option value="home">Home</option>
                  <option value="office">Office</option>
                  <option value="work">Work</option>
                </select>
              )}
            />
            <p className="text-red-500 px-2">{errors.addressType?.message}</p>
          </div>
          <div className="flex gap-2">
            <Controller
              name="defaultAddress"
              control={control}
              defaultValue={false}
              render={({ field }) => (
                <input type="checkbox" {...field} id="defaultAddress" />
              )}
            />
            <label htmlFor="defaultAddress">Make this my default address</label>
          </div>

          <div className="flex justify-end gap-2 items-center">
            <button
              className="border-[1px] border-slate-500 px-2  py-2 rounded-md"
              onClick={() => setModal(false)}
            >
              Cancel
            </button>
            <button
              type="submit"
              className="bg-red-500 active:bg-red-600  hover:bg-red-600 px-2 py-2 rounded-md text-white "
            >
              Submit
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default AddressForm;
