import logo from "../assets/pngwing.com.png"

const Navbar = () => {
  return (
    <nav className="flex justify-between bg-zinc-500 text-yellow-50 px-20 py-5 items-center">
      <div className="hover:cursor-pointer">
        <img src={logo} alt="" className="w-10" />
      </div>
      <div>
        <ul className="flex gap-5">
            <li className="hover:cursor-pointer">
                Resume
            </li>
            <li className="hover:cursor-pointer">About</li>
            <li className="hover:cursor-pointer">Experience</li>
            <li className="hover:cursor-pointer">TechStack</li>
            <li className="hover:cursor-pointer">Projects</li>
            <li className="hover:cursor-pointer">Contacts</li>
        </ul>
      </div>
    </nav>
  );
};
export default Navbar;
