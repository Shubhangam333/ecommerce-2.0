const Categorycard = ({ catItem }) => {
  return (
    <div className={`${catItem.class} overflow-hidden cursor-pointer`}>
      <img
        src={catItem.images}
        className="object-cover w-full h-full hover:scale-125 transition-all duration-500"
        alt=""
      />
    </div>
  );
};

export default Categorycard;
