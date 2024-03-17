import {useEffect, useState} from "react"

const Example = () => {
const [count, setCount] = useState(0)
const reset = () => {
    setCount(0)
}
   const add = () => {
    setCount(prev => prev + 1)
   }
   useEffect(() => {
    document.title = "You are " + count + " years old!"
   })
    return (
      <div className="flex flex-col justify-center space-x-1">
        <p>Today I am {count} Years of Age</p>
        <button onClick={reset} className="bg-yellow-600 p-5 rounded-xl">Reset</button>
        <button onClick={() => setCount(prev => prev - 1)}>Minus</button>
        <button onClick={add}>Plus</button>
      </div>
    )
  }


  export default Example