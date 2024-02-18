import PriceFilter from "./Products/Filter/Price/PriceFilter";
import StyleFilter from "./Products/Filter/Style/StyleFilter";

const Primaryfilter = ({ categoryId }) => {
  return (
    <section className="col-span-3 flex-col gap-8 md:flex hidden">
      <StyleFilter categoryId={categoryId} />
      <PriceFilter />
    </section>
  );
};

export default Primaryfilter;
