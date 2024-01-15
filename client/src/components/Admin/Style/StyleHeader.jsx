import { Link } from "react-router-dom";
import SearchInput from "../Dashboard/SearchInput";

const StyleHeader = ({ filterInput, handleFilterChange }) => {
  return (
    <section className="flex gap-6">
      <SearchInput
        filterInput={filterInput}
        handleFilterChange={handleFilterChange}
      />
      <Link
        to="/admin/dashboard/create-style"
        className="px-6 py-2 bg-[#17B987] text-white rounded-lg active:scale-105"
      >
        Add New Style
      </Link>
    </section>
  );
};

export default StyleHeader;
