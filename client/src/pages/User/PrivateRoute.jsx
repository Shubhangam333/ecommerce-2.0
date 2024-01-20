import Layout from "../../components/Layout/Layout";
import { Outlet, Navigate } from "react-router-dom";

const PrivateRoute = ({ isAuthenticated }) => {
  return (
    <>
      {isAuthenticated ? (
        <Layout>
          <Outlet />
        </Layout>
      ) : (
        Navigate("/")
      )}
    </>
  );
};

export default PrivateRoute;
