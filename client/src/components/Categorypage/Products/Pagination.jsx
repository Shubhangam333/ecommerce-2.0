import { useDispatch } from "react-redux";
import { setCurrentPage } from "../../../redux/slice/sortSlice";

const Pagination = ({ currentPage, pages }) => {
  const dispatch = useDispatch();

  const handleNextPage = () => {
    if (currentPage === pages) {
      return;
    }
    dispatch(setCurrentPage(currentPage + 1));
  };
  const handlePreviousPage = () => {
    if (currentPage === 1) {
      return;
    }
    dispatch(setCurrentPage(currentPage - 1));
  };
  return (
    <div className="flex gap-2">
      <button
        key={0}
        onClick={handlePreviousPage}
        className="disabled:bg-slate-500 px-4 text-white rounded-md bg-[#17B987]"
        disabled={currentPage === 1}
      >
        Prev
      </button>
      {[...Array(pages)].map((_, idx) => (
        <button
          key={idx + 1}
          onClick={() => dispatch(setCurrentPage(idx + 1))}
          className={`border-red-500 border-[1px] px-4 py-1 text-red-500 rounded-md ${
            currentPage === idx + 1 ? "bg-red-500 text-white" : ""
          }`}
        >
          {idx + 1}
        </button>
      ))}
      <button
        key={100000}
        onClick={handleNextPage}
        className="disabled:bg-slate-500 px-4 text-white rounded-md bg-[#17B987]"
        disabled={currentPage === pages}
      >
        Next
      </button>
    </div>
  );
};

export default Pagination;
