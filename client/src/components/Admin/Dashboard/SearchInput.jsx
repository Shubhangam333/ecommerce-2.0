const SearchInput = ({ filterInput, handleFilterChange }) => {
  return (
    <input
      type="search"
      className="basis-[80%] px-6 py-2 outline-none border-2 border-[#17B987] rounded-lg"
      placeholder="Search"
      value={filterInput}
      onChange={handleFilterChange}
    />
  );
};

export default SearchInput;
