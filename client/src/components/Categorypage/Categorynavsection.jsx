import Categorynav from "./Categorynav";

const Categorynavsection = ({ title }) => {
  return (
    <div className="flex justify-end mt-8 mx-4">
      <Categorynav title={title} />
    </div>
  );
};

export default Categorynavsection;
