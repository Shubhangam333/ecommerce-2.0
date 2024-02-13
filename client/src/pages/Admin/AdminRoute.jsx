import { Navigate, Outlet } from "react-router-dom";
import { useSelector } from "react-redux";
import DashBoardLayout from "../../components/Layout/DashBoardLayout";

const AdminRoute = () => {
  const { user } = useSelector((state) => state.auth);
  console.log("u", user);
  return user && user.role === "admin" ? (
    <DashBoardLayout>
      <Outlet />
    </DashBoardLayout>
  ) : (
    <Navigate to="/auth/login" />
  );
};

export default AdminRoute;
