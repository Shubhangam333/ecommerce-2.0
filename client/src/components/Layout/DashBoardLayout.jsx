import { useSelector } from "react-redux";
import MegaMenu from "../Admin/Dashboard/MegaMenu/MegaMenu";
import DashboardHeader from "../Admin/Dashboard/DashboardHeader";

const DashBoardLayout = ({ children }) => {
  const { isActive } = useSelector((state) => state.dashboard);
  return (
    <section className="overflow-x-hidden">
      <MegaMenu />
      <section
        className={`dashboard-layout-content relative   translate-x-0 duration-1000 min-h-screen  ${
          isActive ? "translate-x-[250px]" : ""
        }`}
      >
        <DashboardHeader />
        {children}
      </section>
    </section>
  );
};

export default DashBoardLayout;
