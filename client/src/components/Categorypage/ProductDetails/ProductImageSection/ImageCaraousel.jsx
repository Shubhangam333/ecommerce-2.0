import { IoClose } from "react-icons/io5";

const ImageCaraousel = () => {
  return (
    <div className="w-[400px] bg-black relative">
      <div className="w-full">
        <img
          src="https://prod-img.thesouledstore.com/public/theSoul/uploads/catalog/product/1705138513_3144750.jpg?format=webp&w=640&dpr=1.5"
          alt=""
          className="h-full w-full object-cover bg-black"
        />
        <button className="absolute top-4 right-4 p-2 text-lg rounded-lg border-[1px] border-slate-500">
          <IoClose />
        </button>
      </div>
    </div>
  );
};

export default ImageCaraousel;
