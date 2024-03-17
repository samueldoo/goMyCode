
import { useDispatch, useSelector } from "react-redux";
import { decrement, decrementByAmount, increment, incrementByAmount } from "../redux/counterSlice";

const Counter = () => {
  const {count} = useSelector(state => state.counter);
const dispatch = useDispatch()
  return (
    <div className="flex flex-col text-5xl items-center justify-center gap-5">
      <p>This count is :{count}</p>
      <div className="flex gap-10">
        <button onClick={() => dispatch(decrement())}>-</button>
        <button onClick={() => dispatch(increment())}>+</button>
        <button onClick={() => dispatch(incrementByAmount(2))}>+</button>
        <button onClick={() => dispatch(decrementByAmount(2))}>-</button>
      </div>
    </div>
  );
};

export default Counter;
