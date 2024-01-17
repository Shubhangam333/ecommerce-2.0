const Productcard = ({ product }) => {
  return (
    <div className="col-span-3 cursor-pointer grid-product-card">
      <div className="w-full h-[25rem] overflow-hidden">
        <img
          src={product.productImages[0].url}
          alt=""
          className="w-full h-full object-cover object-center hover:scale-125"
        />
      </div>
      <div className="flex flex-col px-2 py-2">
        <h4 className="text-lg font-extrabold">Star Wars: Do or Do Not</h4>
        <p className="text-md font-normal capitalize">Men Oversized hoodies</p>
        <span className="text-lg font-extrabold">144</span>
      </div>
    </div>
  );
};

export default Productcard;
