import { useEffect } from "react";
import success from "/success-green-check-mark-icon.webp";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";

function Success() {
  const navigate = useNavigate();
  useEffect(() => {
    const id = setTimeout(() => {
      toast.success("Payment Successful");
      navigate("/user/orders");
    }, 3000);

    return () => clearTimeout(id);
  }, [navigate]);

  return (
    <div className="flex items-center justify-center flex-col h-[400px] gap-2">
      <img src={success} alt="" className="w-24 h-24" />
      <h4 className="text-xl font-bold">Thanks for your order!</h4>
      <p className="text-md font-normal">your payment is successful.</p>
      <div>
        <button
          onClick={() => navigate("/")}
          className="py-2 px-4 rounded-md bg-[#298E83] text-white"
        >
          Go to Home page
        </button>
      </div>
    </div>
  );
}

export default Success;
