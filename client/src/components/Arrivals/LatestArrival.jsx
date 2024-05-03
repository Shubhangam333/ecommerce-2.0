import ArrivalProductListing from "./ArrivalProductListing";

const LatestArrival = () => {
  return (
    <section className="py-8">
      <h1 className="text-3xl text-center font-extrabold uppercase">
        New Arrivals
      </h1>
      <ArrivalProductListing />
    </section>
  );
};

export default LatestArrival;
