import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

const CheckOutItemCard = ({ item }) => {
  const { section } = useSelector((state) => state.auth);
  return (
    <div className="flex border-b-[1px] border-slate-500 py-2 md:items-center md:flex-row flex-col">
      <div className="basis-[30%] h-36">
        <img
          src={item.product.productImages[0].url}
          alt="product image"
          className="h-full w-full object-contain"
        />
      </div>
      <div className="basis-[50%] flex flex-col gap-[1px]">
        <p className="text-lg font-bold">{item.product.title}</p>
        <Link
          to={`/${section}/${item.product.subCategory.slug}`}
          className="text-md text-slate-500 font-light hover:text-violet-950"
        >
          {item.product.subCategory.title}
        </Link>
        <p className="text-md">Size: {item.sizeType}</p>
        <p className="text-md">Quantity: {item.quantity}</p>
      </div>
      <div>
        <h3 className="text-md font-bold">Price: {item.product.price}</h3>
      </div>
    </div>
  );
};

export default CheckOutItemCard;
