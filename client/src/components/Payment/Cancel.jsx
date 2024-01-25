import { Link } from "react-router-dom";
import cancel from "/cancel.png";

function Cancel() {
  return (
    <div className="flex items-center justify-center flex-col h-[400px] gap-2">
      <img src={cancel} alt="" className="w-24 h-24" />
      <h4 className="text-xl font-bold">
        Oops! Your payment has been cancelled.
      </h4>
      <p className="text-md font-normal">
        We appreciate your business! If you have any questions, please email us
        at
        <Link to="mailto:orders@example.com">orders@example.com</Link>.
      </p>
      <div>
        <button className="py-2 px-4 rounded-md bg-[#298E83] text-white">
          {" "}
          Go to Home page
        </button>
      </div>
    </div>
  );
}

export default Cancel;
