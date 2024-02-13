import { Navigate, Outlet } from "react-router-dom";
import Layout from "../../components/Layout/Layout";
import { useSelector } from "react-redux";

const PrivateRoute = () => {
  const { user } = useSelector((state) => state.auth);
  return user ? (
    <Layout>
      <Outlet />
    </Layout>
  ) : (
    <Navigate to="/auth/login" />
  );
};

export default PrivateRoute;
