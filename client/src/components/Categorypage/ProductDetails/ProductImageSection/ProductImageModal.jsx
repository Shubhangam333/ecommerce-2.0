import ImageCaraousel from "./ImageCaraousel";

const ProductImageModal = ({ images, setImageModal }) => {
  return (
    <section className="fixed inset-0 bg-[rgba(0,0,0,0.7)] z-[90000] w-full h-full flex items-center justify-center">
      <ImageCaraousel images={images} setImageModal={setImageModal} />
    </section>
  );
};

export default ProductImageModal;
