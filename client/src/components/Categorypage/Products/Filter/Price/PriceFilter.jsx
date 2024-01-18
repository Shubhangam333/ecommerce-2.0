import PriceRadioInput from "./PriceRadioInput";

const prices = [
  { lb: 839, hb: 1272 },
  { lb: 1273, hb: 1706 },
  { lb: 1707, hb: 2140 },
  { lb: 2141, hb: 2575 },
];

const PriceFilter = () => {
  return (
    <div className="flex flex-col gap-2">
      <h2 className="mb-2 font-bold text-xl">Prices</h2>
      {prices.map((price, index) => (
        <PriceRadioInput key={index} price={price} index={index} />
      ))}
    </div>
  );
};

export default PriceFilter;
