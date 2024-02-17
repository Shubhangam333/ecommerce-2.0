import SearchInput from "../Dashboard/SearchInput";

const AdminOrderHeader = ({ filterInput, handleFilterChange }) => {
  return (
    <section className="flex gap-6 justify-center">
      <SearchInput
        filterInput={filterInput}
        handleFilterChange={handleFilterChange}
      />
    </section>
  );
};

export default AdminOrderHeader;
