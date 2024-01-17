const Pagination = ({ setCurrenPage, currenPage, pages }) => {
  const handleNextPage = () => {
    if (currenPage === pages) {
      return;
    }
    setCurrenPage(currenPage + 1);
  };
  const handlePreviousPage = () => {
    if (currenPage === 1) {
      return;
    }
    setCurrenPage(currenPage - 1);
  };
  return (
    <div className="flex gap-2">
      <button
        key={0}
        onClick={handlePreviousPage}
        className="disabled:bg-slate-500 px-4 text-white rounded-md bg-[#17B987]"
        disabled={currenPage === 1}
      >
        Prev
      </button>
      {[...Array(pages)].map((_, idx) => (
        <button
          key={idx + 1}
          onClick={() => setCurrenPage(idx + 1)}
          className="bg-red-500 px-4 py-1 text-white rounded-md"
        >
          {idx + 1}
        </button>
      ))}
      <button
        key={100000}
        onClick={handleNextPage}
        className="disabled:bg-slate-500 px-4 text-white rounded-md bg-[#17B987]"
        disabled={currenPage === pages}
      >
        Next
      </button>
    </div>
  );
};

export default Pagination;
