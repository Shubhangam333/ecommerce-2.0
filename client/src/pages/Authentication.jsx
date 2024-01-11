import { useNavigate } from "react-router-dom";
import AuthComponent from "../components/Authentication/AuthComponent";
import Layout from "../components/Layout/Layout";

const Authentication = ({ isAuthenticated }) => {
  const navigate = useNavigate();
  return (
    <>
      {!isAuthenticated ? (
        <Layout>
          <AuthComponent />
        </Layout>
      ) : (
        navigate("/")
      )}
    </>
  );
};

export default Authentication;
