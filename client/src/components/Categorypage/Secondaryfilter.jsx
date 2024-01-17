import Sortfilter from "./Sortfilter";

const Secondaryfilter = ({ title }) => {
  return (
    <section className="flex items-center justify-between">
      <h3>{title} - items</h3>
      <Sortfilter />
    </section>
  );
};

export default Secondaryfilter;
