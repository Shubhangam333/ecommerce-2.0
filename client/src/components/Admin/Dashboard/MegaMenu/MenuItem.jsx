import { Link } from "react-router-dom";

const MenuItem = ({ icon, title, url }) => {
  return (
    <>
      <Link
        to={`${url}`}
        className="flex overflow-y-hidden  justify-between items-center gap-4 cursor-pointer py-2 menu relative"
      >
        <div className="flex justify-start items-center gap-4 ">
          {icon}
          <h2 className="text-lg text-[#17B987] font-bold">{title}</h2>
        </div>
      </Link>
    </>
  );
};

export default MenuItem;
