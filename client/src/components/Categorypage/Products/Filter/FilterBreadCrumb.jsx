import { useSelector } from "react-redux";
import { useId } from "react";
import StyleFilterItem from "./StyleFilterItem";
import PriceFilterItem from "./PriceFilterItem";

const FilterBreadCrumb = () => {
  const { stylesTitle, priceFilter } = useSelector((state) => state.sort);

  const id = useId();
  return (
    <div className="flex gap-2 items-center my-2 flex-wrap">
      {stylesTitle &&
        stylesTitle.map((style) => <StyleFilterItem key={id} style={style} />)}
      <PriceFilterItem priceFilter={priceFilter} />
    </div>
  );
};

export default FilterBreadCrumb;
