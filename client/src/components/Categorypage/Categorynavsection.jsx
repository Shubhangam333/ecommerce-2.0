import Categorynav from "./Categorynav";

const Categorynavsection = ({ title }) => {
  return (
    <div className="flex md:justify-end justify-between  mt-8 mx-4">
      <Categorynav title={title} />
    </div>
  );
};

export default Categorynavsection;
