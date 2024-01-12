import { useLocation } from "react-router-dom";
import MenuBtn from "./MenuBtn";
import { useEffect, useState } from "react";
import Breadcrumb from "./Breadcrumb";

const DashboardHeader = () => {
  const { pathname } = useLocation();
  const [header, setHeader] = useState("");

  useEffect(() => {
    const heading = pathname.split("/");
    setHeader(heading[heading.length - 1]);
  }, [pathname]);

  return (
    <div>
      <div className="px-4 py-4 flex items-center bg-[#334155]">
        <MenuBtn />
        <h1 className="text-3xl text-[#17B987] capitalize">{header}</h1>
      </div>
      <Breadcrumb />
    </div>
  );
};

export default DashboardHeader;
