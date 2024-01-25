import success from "/success-green-check-mark-icon.webp";

function Success() {
  return (
    <div className="flex items-center justify-center flex-col h-[400px] gap-2">
      <img src={success} alt="" className="w-24 h-24" />
      <h4 className="text-xl font-bold">Thanks for your order!</h4>
      <p className="text-md font-normal">your payment is successful.</p>
      <div>
        <button className="py-2 px-4 rounded-md bg-[#298E83] text-white">
          {" "}
          Go to Home page
        </button>
      </div>
    </div>
  );
}

export default Success;
