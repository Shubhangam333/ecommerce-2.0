import { useEffect, useRef, useState } from "react";
import { IoClose } from "react-icons/io5";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";

const ImageCarousel = ({ images, setImageModal }) => {
  const imageModalRef = useRef();
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (
        imageModalRef.current &&
        !imageModalRef.current.contains(event.target)
      ) {
        setImageModal(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [imageModalRef, setImageModal]);

  const handlePrevClick = () => {
    setCurrentImageIndex((prevIndex) =>
      prevIndex === 0 ? images.length - 1 : prevIndex - 1
    );
  };

  const handleNextClick = () => {
    setCurrentImageIndex((prevIndex) =>
      prevIndex === images.length - 1 ? 0 : prevIndex + 1
    );
  };

  return (
    <div className="w-[400px] bg-black relative flex" ref={imageModalRef}>
      <div className="w-full bg-black">
        <img
          src={images[currentImageIndex].url}
          alt=""
          className="h-full w-full object-cover "
        />
        <button
          className="absolute  top-4 right-4 p-2 text-lg rounded-lg border-[1px] border-slate-500"
          onClick={() => setImageModal(false)}
        >
          <IoClose />
        </button>
      </div>
      <button
        className="absolute top-1/2 transform -translate-y-1/2 left-4 text-black text-2xl border-[1px] border-slate-600"
        onClick={handlePrevClick}
      >
        <IoIosArrowBack />
      </button>
      <button
        className="absolute top-1/2 transform -translate-y-1/2 right-4 text-black text-2xl border-[1px] border-slate-600"
        onClick={handleNextClick}
      >
        <IoIosArrowForward />
      </button>
    </div>
  );
};

export default ImageCarousel;
