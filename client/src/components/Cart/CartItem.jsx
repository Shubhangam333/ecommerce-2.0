import { useState } from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { toast } from "react-toastify";

const CartItem = ({ item, handleDeleteItem }) => {
  const { section } = useSelector((state) => state.auth);
  const [selectedSize, setSelectedSize] = useState(item.sizeType);
  const [quantity, setQuantity] = useState(item.quantity);

  console.log("i", item);

  const isSizeAvailable = (value) => {
    const selectedItem = item.product.sizes.find(
      (i) => i.sizeType === selectedSize
    );

    console.log("s", selectedItem, quantity);

    return selectedItem && selectedItem.quantity >= value;
  };

  // const updateQuantity = async (e) => {
  //   if (!isSizeAvailable(e.target.value)) {
  //     return toast.error("Size not available");
  //   } else {
  //     setQuantity(parseInt(e.target.value));
  //   }
  // };
  const updateQuantity = async (e) => {
    const newSize = selectedSize;
    const newQuantity = parseInt(e.target.value);

    const isAvailable = isSizeAvailable(newQuantity);

    if (!isAvailable) {
      toast.error("Size or quantity not available");
    } else {
      setQuantity(newQuantity);
      setSelectedSize(newSize);
    }
  };

  return (
    <div className="flex justify-between gap-4 md:flex-row flex-col">
      <div className="basis-[30%] h-[200px]">
        <img
          src={item.product.productImages[0].url}
          alt=""
          className="h-full w-full object-contain"
        />
      </div>
      <div className="basis-[70%] flex justify-between">
        <div>
          <Link
            to={`/${section}/${item.product.subCategory.slug}/${item.product.slug}`}
            className="text-lg text-slate-800 font-bold hover:text-[#014c8c]"
          >
            {item.product.title}
          </Link>
          <p className="text-sm text-gray-600">
            {item.product.subCategory.title}
          </p>
          <div className="flex gap-2 text-sm my-4 md:flex-row flex-col">
            <div className="flex md:gap-2 md:justify-normal justify-between">
              <label htmlFor={`size-section-${item._id}`}>Size:</label>
              <select
                name="qty"
                id={`size-section-${item._id}`}
                className="outline-none border-2  border-gray-300"
                onChange={(e) => setSelectedSize(e.target.value)}
                defaultValue={selectedSize}
              >
                {["XS", "S", "M", "L", "XL", "XXL", "XXXL"].map(
                  (sizeType, idx) => (
                    <option key={idx} value={sizeType}>
                      {sizeType}
                    </option>
                  )
                )}
              </select>
            </div>
            <div className=" flex md:gap-4 md:justify-normal justify-between">
              <label htmlFor="quantity" className="font-light">
                Quantity
              </label>
              <select
                name=""
                id="quantity"
                className="outline-none border-2 px-2 border-gray-300"
                onChange={(e) => updateQuantity(e)}
                defaultValue={quantity}
              >
                {[...Array(10)].map((_, idx) => (
                  <option key={idx + 1} value={idx + 1}>
                    {idx + 1}
                  </option>
                ))}
              </select>
            </div>
          </div>
        </div>
        <div className="flex flex-col justify-between">
          <span className="font-bold text-lg self-end">
            {item.product.price}
          </span>
          <button
            className="px-6 md:mb-6 mb-2 text-sm opacity-90 hover:opacity-100 bg-[#147D7B] py-1 text-white rounded-lg "
            onClick={() => handleDeleteItem(item._id)}
          >
            Remove
          </button>
        </div>
      </div>
    </div>
  );
};

export default CartItem;
