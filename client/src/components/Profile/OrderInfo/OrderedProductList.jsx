import ProductCard from "./ProductCard";

const OrderedProductList = ({ productdata }) => {
  return (
    <div>
      <h2 className="text-2xl font-bold">Product Details</h2>
      <div className="flex flex-col gap-2">
        {productdata &&
          productdata.map((item) => <ProductCard key={item._id} item={item} />)}
      </div>
    </div>
  );
};

export default OrderedProductList;
