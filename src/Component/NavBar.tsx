import React, { useState } from "react";
import { FiMenu, FiX } from "react-icons/fi";
import { BiWorld } from "react-icons/bi";
import { useNavigate  } from "react-router-dom";
import DarkMode from "./DarkMode";
import { Tooltip } from "@mui/material";
import { useAppSelector } from "../apps/hooks";
import { Link } from "react-router-dom";

type NavbarProps = {};



const NavBar: React.FC<NavbarProps> = () => {
  const navigate = useNavigate();

  const [isOpen, setIsOpen] = useState<boolean>(false);

  const handleLogOut = () => {
    localStorage.removeItem("user");
    navigate("/signup");
  };

  const toggleMenu = (): void => {
    setIsOpen(!isOpen);
  };

  

  
  return (
    <nav className="bg-blue-600 dark:bg-[#32174D] text-white shadow-md dark:blue-600 z-10 relative mt-0 pt-0">
      <div className="container mx-auto flex justify-between items-center px-4 py-3">
        {/* Logo */}
        <div className="text-xl font-bold cursor-pointer" onClick={()=>navigate(-1)}>Application</div>

        <div className="md:hidden" onClick={toggleMenu}>
          {isOpen ? <FiX size={24} /> : <FiMenu size={24} />}
        </div>

        <ul
          className={`md:flex md:items-center md:space-x-6 absolute md:static dark:bg-blue-950 top-16 left-0 w-full md:w-auto bg-blue-600 md:bg-transparent z-10 transition-transform transform md:translate-x-0 ${
            isOpen ? "translate-x-0" : "-translate-x-full"
          }`}
        >
         
          <li className="md:my-0 my-2">
            <input
              type="text"
              placeholder="Search..."
              className="px-4 py-2 rounded-md text-black md:mr-4 w-full md:w-auto"
            />
          </li>
          <li className="md:my-0 my-2">
            <button
              className="bg-red-500 px-4 py-2 rounded-md hover:bg-red-600"
              onClick={handleLogOut}
            >
              Logout
            </button>
          </li>



          <li className="md:my-0 my-2 flex justify-center items-center">
            <DarkMode />
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default NavBar;
