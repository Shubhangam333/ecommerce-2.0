import { Link } from "react-router-dom";
import SearchInput from "../Dashboard/SearchInput";

const ProductHeader = () => {
  return (
    <section className="flex gap-6">
      <SearchInput />
      <Link
        to="/admin/dashboard/create-product"
        className="px-6 py-2 bg-[#17B987] text-white rounded-lg active:scale-105"
      >
        Add New Product
      </Link>
    </section>
  );
};

export default ProductHeader;
