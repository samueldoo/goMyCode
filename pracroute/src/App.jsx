import { Routes, Route } from "react-router-dom";
import NavBar from "./components/header/Navbar";
import Home from "./Pages/1.home/Home";
import Services from "./Pages/1.home/2.services/Services";
import Portfolio from "./Pages/1.home/3.portfolio/Portfolio";
import Contact from "./Pages/1.home/4.contact/Contact";
import "./App.css";
import Footer from "./components/footer/Footer";
import Post from "./components/Post";
import Posts from "./components/Posts";
import NewPost from "./components/NewPost";

function App() {
  return (
    <div>
      <NavBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="services" element={<Services />} />
        <Route path="Portfolio " element={<Portfolio />} />
        <Route path="Contact" element={<Contact />} />
        <Route path="Posts" element={<Posts />}>
          <Route path=":Id" element={<Post />} />
          <Route path="new" element={<NewPost />} />
        </Route>
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
