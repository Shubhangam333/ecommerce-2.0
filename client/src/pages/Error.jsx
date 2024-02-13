import { useNavigate } from "react-router-dom";
import Layout from "../components/Layout/Layout";

const Error = () => {
  const navigate = useNavigate();
  return (
    <Layout>
      <div className="flex flex-col items-center justify-center">
        <img src="/oops-404.avif" alt="error page image" />
        <button
          className="px-6 py-2 bg-[#17B987] text-white rounded-lg text-lg active:scale-95"
          onClick={() => navigate(-1)}
        >
          Go Back
        </button>
      </div>
    </Layout>
  );
};

export default Error;
