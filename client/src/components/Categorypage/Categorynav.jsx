import Breadcrumb from "./Breadcrumb";
import FilterBreadCrumb from "./Products/Filter/FilterBreadCrumb";
import Secondaryfilter from "./Secondaryfilter";

const Categorynav = ({ title }) => {
  return (
    <div className="basis-[80%] flex flex-col gap-2">
      <Breadcrumb title={title} />
      <Secondaryfilter title={title} />
      <FilterBreadCrumb />
    </div>
  );
};

export default Categorynav;
