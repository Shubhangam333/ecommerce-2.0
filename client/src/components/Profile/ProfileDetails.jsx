import { useSelector } from "react-redux";

const ProfileDetails = () => {
  const { user } = useSelector((state) => state.auth);
  return (
    <section className="flex flex-col gap-24">
      <div className="flex flex-col gap-4">
        <p className="text-lg font-bold ">Email ID:</p>
        <span className="text-md font-light w-max px-4">{user.email}</span>
      </div>
      <div className="flex flex-col gap-4">
        <div className="flex flex-col gap-8">
          <div className="flex justify-between w-[70%]">
            <div>
              <p className="text-lg font-bold ">FirstName:</p>
              <span className="text-md font-light w-max px-4 capitalize">
                {user.firstName}
              </span>
            </div>
            <div>
              <p className="text-lg font-bold ">LastName:</p>
              <span className="text-md font-light w-max px-4 capitalize">
                {user.lastName}
              </span>
            </div>
          </div>
        </div>
        <div className="flex flex-col gap-8">
          <div className="flex justify-between w-[70%]">
            <div>
              <p className="text-lg font-bold ">Gender:</p>
              <span className="text-md font-light w-max px-4 capitalize">
                {user.gender}
              </span>
            </div>
            <div>
              <p className="text-lg font-bold ">Role:</p>
              <span className="text-md font-light w-max px-4 capitalize">
                {user.role}
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProfileDetails;
