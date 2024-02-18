import Primaryfilter from "./Primaryfilter";
import Productsection from "./Products/Productsection";

const Mainsection = ({ categoryId }) => {
  return (
    <div className="md:grid md:grid-cols-[repeat(15,1fr)] my-4 gap-4">
      <Primaryfilter categoryId={categoryId} />
      <Productsection categoryId={categoryId} />
    </div>
  );
};

export default Mainsection;
