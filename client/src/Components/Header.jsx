import { FaSearch } from "react-icons/fa";
import { Link } from "react-router-dom";
function Header() {
  return (
    <header className="bg-[#FFF1DB] shadow-md">
      <div className="flex justify-between items-center max-w-6xl mx-auto p-3">
        <Link to="/">
          <h1 className="font-bold text-lg sm:text-xl flex flex-wrap">
            <span className="text-[#EF5A6F]">One</span>
            <span className="text-[#EF5A6F]">Estate</span>
          </h1>
        </Link>
        <form className="bg-[#D4BDAC] flex items-center">
          <input
            type="text"
            placeholder="Search..."
            className="bg-transparent p-3 rounded-lg outline-none w-24 sm:w-64"
          />
          <FaSearch className="text-[#EF5A6F]" />
        </form>
        <ul className="flex gap-4">
          <Link to="/">
            <li className="hidden sm:inline text-[#536493] hover:underline">
              Home
            </li>
          </Link>
          <Link to="/about">
            <li className="hidden sm:inline text-[#536493] hover:underline">
              About
            </li>
          </Link>
          <Link to="/sign-in">
            <li className=" text-[#536493] hover:underline">Sign In</li>
          </Link>
        </ul>
      </div>
    </header>
  );
}

export default Header;
