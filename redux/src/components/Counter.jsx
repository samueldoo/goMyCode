
import { useSelector } from "react-redux"

const Counter = () => {

    const {count} = useSelector(state => state.Counter);
    

    return (
        <div className="flex text-5xl flex-col items-center justify-center gap-5">
            <p>this count is: {count}</p>
            <div className="gap-10 flex">
                <button onClick={() => setCount(count => count <= 0 ? 0 : count - 1)}>-</button>

                <button onClick={() => setCount(count + 1)}>+</button>
            </div>

        </div>
    )
}

export default Counter