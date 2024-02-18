import Breadcrumb from "./Breadcrumb";
import FilterBreadCrumb from "./Products/Filter/FilterBreadCrumb";
import Secondaryfilter from "./Secondaryfilter";

const Categorynav = ({ title }) => {
  return (
    <div className="md:basis-[80%] w-full  flex flex-col gap-2">
      <Breadcrumb title={title} />
      <Secondaryfilter title={title} />
      <FilterBreadCrumb />
    </div>
  );
};

export default Categorynav;
