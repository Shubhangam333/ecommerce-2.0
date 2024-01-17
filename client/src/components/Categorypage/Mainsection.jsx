import Primaryfilter from "./Primaryfilter";
import Productsection from "./Products/Productsection";

const Mainsection = ({ categoryId }) => {
  return (
    <div className="grid grid-cols-[repeat(15,1fr)] my-4 px-8 gap-4">
      <Primaryfilter />
      <Productsection categoryId={categoryId} />
    </div>
  );
};

export default Mainsection;
