import React from "react";

const Navbtn = () => {
  return (
    <div className="nav-btns flex justify-between gap-4">
      <button className="border-2 border-[#148C8D] px-2 py-2 sm:w-60  uppercase font-extrabold text-[#148C8D] rounded-md hover:bg-[#148C8D] hover:text-white">
        Continue Shopping
      </button>
      <button className="border-2 border-[#148C8D] px-2 py-2 sm:w-60 bg-[#148C8D] uppercase font-extrabold text-white rounded-md hover:bg-white hover:text-[#148C8D]">
        Login
      </button>
    </div>
  );
};

export default Navbtn;
