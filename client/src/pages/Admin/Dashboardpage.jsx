import { Outlet } from "react-router-dom";
import DashBoardLayout from "../../components/Layout/DashBoardLayout";

const Dashboardpage = () => {
  return (
    <DashBoardLayout>
      <Outlet />
    </DashBoardLayout>
  );
};

export default Dashboardpage;
