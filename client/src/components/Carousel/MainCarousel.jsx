import ImageSlider from "./ImageSlider";
import { useSelector } from "react-redux";

const slides = [
  {
    category: "men",
    images: [
      { url: "/banner-1-men.webp", title: "shirt" },
      { url: "/banner-2-men.webp", title: "sneaker" },
    ],
  },
  {
    category: "women",
    images: [
      { url: "/women-banner-1.jpg", title: "shirt" },
      { url: "/women-banner-2.jpg", title: "sneaker" },
    ],
  },
  {
    category: "kids",
    images: [
      { url: "/kids-banner-1.jpg", title: "shirt" },
      { url: "/kids-banner-2.jpg", title: "sneaker" },
    ],
  },
];

const containerStyles = {
  width: "100%",
  height: "30rem",
  margin: "0 auto",
};

const MainCarousel = () => {
  const { section } = useSelector((state) => state.auth);
  const images = slides.find((s) => s.category === section).images;

  return (
    <div
      style={containerStyles}
      className="md:h-[30rem] sm:h-[25rem] h-[5rem] mt-4"
    >
      <ImageSlider slides={images} />
    </div>
  );
};

export default MainCarousel;
