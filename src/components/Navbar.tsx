import { useState } from "react";
import { FaBars, FaTimes, FaGithub, FaLinkedin } from "react-icons/fa";
import { HiOutlineMail } from "react-icons/hi";
import { BsFillPersonLinesFill } from "react-icons/bs";
import { Link } from "react-scroll";

const Navbar = () => {
  const [nav, setNav] = useState(false);
  const handleClick = () => setNav(!nav);

  return (
    <div className="fixed w-full h-[80px] flex justify-between items-center px-4 bg-[#0a192f] text-gray-300 z-50">
      {/* Logo / Name */}
      <div>
        <Link to="home" smooth={true} duration={500} className="cursor-pointer">
          <h1 className="text-2xl font-bold">
            <span className="text-white">Muhammad</span>{" "}
            <span className="text-yellow-500">Fawad</span>
          </h1>
        </Link>
      </div>

      {/* Desktop Menu */}
      <ul className="hidden md:flex">
        {["home", "about", "skills", "work", "contact"].map((section) => (
          <li key={section} className="mx-2 capitalize">
            <Link
              to={section}
              smooth={true}
              duration={500}
              className="cursor-pointer hover:text-yellow-500"
            >
              {section}
            </Link>
          </li>
        ))}
      </ul>

      {/* Hamburger Menu Icon */}
      <div onClick={handleClick} className="md:hidden z-10 cursor-pointer">
        {!nav ? <FaBars /> : <FaTimes />}
      </div>

      {/* Mobile Menu */}
      <ul
        className={
          !nav
            ? "hidden"
            : "absolute top-0 left-0 w-full h-screen bg-[#0a192f] flex flex-col justify-center items-center"
        }
      >
        {["home", "about", "skills", "work", "contact"].map((section) => (
          <li key={section} className="py-6 text-lg capitalize">
            <Link
              to={section}
              smooth={true}
              duration={500}
              onClick={handleClick}
            >
              {section}
            </Link>
          </li>
        ))}
      </ul>

      {/* Social Icons */}
      <div className="hidden lg:flex fixed flex-col top-[35%] left-0">
        <ul>
          <li className="w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-blue-600">
            <a
              className="flex justify-between items-center w-full text-gray-200"
              href="https://www.linkedin.com/in/muhammad-fawad-15a841319"
              target="_blank"
              rel="noreferrer"
            >
              LinkedIn <FaLinkedin size={30} />
            </a>
          </li>
          <li className="w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-[#333333]">
            <a
              className="flex justify-between items-center w-full text-gray-200"
              href="https://github.com/fawadcs2001"
              target="_blank"
              rel="noreferrer"
            >
              GitHub <FaGithub size={30} />
            </a>
          </li>
          <li className="w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-[#6fc2b0]">
            <a
              className="flex justify-between items-center w-full text-gray-200"
              href="mailto:201355@icp.edu.pk"
            >
              Email <HiOutlineMail size={30} />
            </a>
          </li>
          <li className="w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-[#565f69]">
            <a
              className="flex justify-between items-center w-full text-gray-200"
              href="https://drive.google.com/file/d/1Q2i9_rlrrRdFD8vKhsrGsAV7PJQE8mDT/view"
              target="_blank"
              rel="noreferrer"
            >
              Resume <BsFillPersonLinesFill size={30} />
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
