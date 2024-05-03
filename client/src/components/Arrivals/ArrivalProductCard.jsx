import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

const ArrivalProductCard = ({ arrivalItem }) => {
  const { section } = useSelector((state) => state.auth);
  console.log("a", arrivalItem);
  return (
    <Link
      to={`/${section}/${arrivalItem.subCategory.slug}/${arrivalItem.slug}`}
      className={` overflow-hidden cursor-pointer border-[1px] border-[#17b987] rounded-md`}
    >
      <div className="max-w-[300px] max-h-[400px]">
        <img
          src={arrivalItem.productImages[0].url}
          className="object-cover w-full h-full hover:scale-125 transition-all duration-500"
          alt=""
        />
      </div>
    </Link>
  );
};

export default ArrivalProductCard;
