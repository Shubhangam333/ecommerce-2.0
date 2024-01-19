import ImageCaraousel from "./ImageCaraousel";

const ProductImageModal = () => {
  return (
    <section className="fixed inset-0 opacity-90 bg-black z-[90000] w-full h-full flex items-center justify-center">
      <ImageCaraousel />
    </section>
  );
};

export default ProductImageModal;
