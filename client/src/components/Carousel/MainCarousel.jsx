import ImageSlider from "./ImageSlider";

const slides = [
  { url: "http://localhost:5173/banner-1-men.webp", title: "beach" },
  { url: "http://localhost:5173/banner-2-men.webp", title: "boat" },
];
const containerStyles = {
  width: "100%",
  height: "30rem",
  margin: "0 auto",
};

const MainCarousel = () => (
  <div
    style={containerStyles}
    className="md:h-[30rem] sm:h-[25rem] h-[5rem] mt-4"
  >
    <ImageSlider slides={slides} />
  </div>
);

export default MainCarousel;
