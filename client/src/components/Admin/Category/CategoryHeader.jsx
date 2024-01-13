import { Link } from "react-router-dom";
import SearchInput from "../Dashboard/SearchInput";

const CategoryHeader = () => {
  return (
    <section className="flex gap-6">
      <SearchInput />
      <Link
        to="/admin/dashboard/create-category"
        className="px-6 py-2 bg-[#17B987] text-white rounded-lg active:scale-105"
      >
        Add New Category
      </Link>
    </section>
  );
};

export default CategoryHeader;
