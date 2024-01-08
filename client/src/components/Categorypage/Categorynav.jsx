import Breadcrumb from "./Breadcrumb";
import Secondaryfilter from "./Secondaryfilter";

const Categorynav = () => {
  return (
    <div className="basis-[80%] flex flex-col gap-2">
      <Breadcrumb />
      <Secondaryfilter />
    </div>
  );
};

export default Categorynav;
