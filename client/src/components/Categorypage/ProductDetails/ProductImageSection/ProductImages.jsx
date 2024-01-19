import { useId } from "react";

const ProductImages = ({ images, setImageModal }) => {
  return (
    <div className="basis-[60%] flex flex-wrap gap-4">
      {images.map((image, index) => (
        <div
          key={image.public_id}
          className="basis-[40%]"
          onClick={() => setImageModal(true)}
        >
          <img src={image.url} className=" h-full w-full object-cover" />{" "}
        </div>
      ))}
    </div>
  );
};

export default ProductImages;
