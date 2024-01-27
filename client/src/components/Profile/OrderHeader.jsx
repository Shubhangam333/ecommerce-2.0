import SearchInput from "../Admin/Dashboard/SearchInput";

const OrderHeader = ({ filterInput, handleFilterChange }) => {
  return (
    <section>
      <SearchInput
        filterInput={filterInput}
        handleFilterChange={handleFilterChange}
      />
    </section>
  );
};

export default OrderHeader;
