import { useEffect, useState } from "react";

const Counter = () => {
  const [digit, setDigit] = useState(0);
useEffect(() => {
console.log("The count is:", digit);
}, [digit])
  const decrease = () => {
    setDigit(digit <= 0 ? digit - 0  : digit -1);
  };
  const increase = () => {
    setDigit(digit + 1);
  };
  
  return (
    <div className="flex flex-col items-center justify-center'">
      <h1 className="">Counter</h1>
      <div className="flex gap-5 items-center justify-center">
        <button className="text-2xl" onClick={decrease}>
          -
        </button>
        <p>{digit}</p>
        <button className="text-2xl" onClick={increase}>
          +
        </button>
      </div>
    </div>
  );
};
export default Counter;
