import { Outlet, useNavigate } from "react-router-dom";
import Layout from "../../components/Layout/Layout";
import React from "react";

const PrivateRoute = ({ isAuthenticated }) => {
  const navigate = useNavigate();

  React.useEffect(() => {
    if (!isAuthenticated) {
      navigate("/");
    }
  }, [isAuthenticated, navigate]);

  return isAuthenticated ? (
    <Layout>
      <Outlet />
    </Layout>
  ) : null;
};

export default PrivateRoute;
