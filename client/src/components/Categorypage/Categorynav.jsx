import Breadcrumb from "./Breadcrumb";
import Secondaryfilter from "./Secondaryfilter";

const Categorynav = ({ title }) => {
  return (
    <div className="basis-[80%] flex flex-col gap-2">
      <Breadcrumb title={title} />
      <Secondaryfilter title={title} />
    </div>
  );
};

export default Categorynav;
