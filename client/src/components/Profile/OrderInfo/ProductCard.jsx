import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

const ProductCard = ({ item }) => {
  const { section } = useSelector((state) => state.auth);
  return (
    <div className="flex border-b-[1px] border-slate-500 py-2 items-center">
      <div className="basis-[30%] h-36">
        <img
          src={item.productId.productImages[0].url}
          alt="product image"
          className="h-full w-full object-contain"
        />
      </div>
      <div className="basis-[50%] flex flex-col gap-[1px]">
        <p className="text-lg font-bold">{item.productId.title}</p>
        <Link
          to={`/${section}/${item.productId.subCategory.slug}`}
          className="text-md text-slate-500 font-light hover:text-violet-950"
        >
          {item.productId.subCategory.title}
        </Link>
        <p className="text-md">Quantity: {item.purchasedQty}</p>
      </div>
      <div>
        <h3 className="text-md font-bold">Price: {item.productId.price}</h3>
      </div>
    </div>
  );
};

export default ProductCard;
