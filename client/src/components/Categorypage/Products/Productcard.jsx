import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

const Productcard = ({ product }) => {
  const { section } = useSelector((state) => state.auth);
  return (
    <Link
      to={`/${section}/${product.subCategory.slug}/${product.slug}`}
      className="col-span-3 cursor-pointer "
    >
      <div className="transform overflow-hidden rounded-lg bg-white dark:bg-slate-800 shadow-md duration-300 hover:scale-105 hover:shadow-lg">
        <img
          className="h-full w-full object-contain object-center"
          src={product.productImages[0].url}
          alt="Product Image"
        />
        <div className="p-4">
          <h2 className="mb-2 text-lg font-medium dark:text-white text-gray-900">
            {product.title}
          </h2>
          <p className="mb-2 text-base dark:text-gray-300 text-gray-700">
            {product.style.title}
          </p>
          <div className="flex items-center">
            <p className="mr-2 text-lg font-semibold text-gray-900 dark:text-white">
              Rs {product.price}
            </p>
            <p className="ml-auto text-base font-medium text-green-500">
              20% off
            </p>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default Productcard;
