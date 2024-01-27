import { useSelector } from "react-redux";

const ProfileHeader = () => {
  const { user } = useSelector((state) => state.auth);
  return (
    <div className="flex flex-col ">
      <h3 className="font-bold text-lg capitalize">{user.firstName}</h3>
      <p className="text-sm font-normal">{user.email}</p>
    </div>
  );
};

export default ProfileHeader;
