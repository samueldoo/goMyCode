import { useEffect, useState } from "react";

import Welcome from "./components/Welcome";
import Counter from "./components/Counter";
import Example from "./components/Example";
import Client from "./components/client";

function App() {
const [show, setShow] = useState(true)
const [text, setText] = useState("hide")


const hide = () => {
  setShow(!show)
  setText(show ? "show" : "hide") 
}

useEffect(()=>{
console.log("heyyy")
}, [])
useEffect(()=>{
console.log("clicked")
alert("text has changed")
}, [show])

const hey =()=>{
  console.log(
    "weeeeeeeee"
  )
}
  return (
    <>
      <div className="App">
        <Welcome />
        {
          show && <Counter />
        }

        <button onClick={hide}>{text}</button>
      </div>
      <Example />
      <Client />
    </>
  )
}

export default App
