import { useState } from "react"



const Client = () => {
    const [mine, setMine] = useState("BOOK")
    const handleClick = () => {
        setMine('Samuel')
    }
    return (
<div className="mb-32">
    <div className="text-4xl text-white mb-10">{mine}</div>
<button className="bg-yellow-600 p-5 rounded-xl text-black" onClick={handleClick}>click me</button>
</div>
    )
}
export default Client