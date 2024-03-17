import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import './App.css'
import About from "./components/About";
import Contact from "./components/Contact";
import Navbar from "./components/Navbar";
import Home from "./components/Home";



function App() {
  

  return (
    <>
<RouterProvider router={createBrowserRouter([
  {
    path: "/",
    element: <div>Hello world!</div>,
  },
  {
    path: "/about",
    element:<About />,
  },
  {
    path: "/contact",
    element:<Contact />,
  },
{
  path: "/Navbar",
  element: <Navbar />,
},
{
  path: "/Home",
  element: <Home />,
}
])} />

    </>
  )
}

export default App
