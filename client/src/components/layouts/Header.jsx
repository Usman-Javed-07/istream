import React, { useState } from "react";
import "../../index.css";
import { Menu } from "lucide-react";
const Header = () => {

  const [open, setOpen] = useState(false)
  return (
    <>
      <nav className="w-full">
        <div
          className="py-8 
                            px-5
                            sm:px-5
                            md:px-10
                            lg:px-20
                            xl:px-28 flex items-center justify-between"
        >
          <img className="w-20 sm:w-30 h-auto" src="logo2.png" alt="logo" />
          <ul className="hidden md:flex gap-10 justify-end ">
            <a href="/" className=" hover:text-blue-400">
              <li>Home</li>
            </a>
            <a href="#" className=" hover:text-blue-400">
              <li>About</li>
            </a>
            <a href="#" className=" hover:text-blue-400">
              <li>Services</li>
            </a>
            <a href="#" className=" hover:text-blue-400">
              <li>Contact</li>
            </a>
          </ul>
          <button className="md:hidden">
            <Menu size={24} onClick={() => setOpen(!open)}/>
          </button>
        </div>
        {open && (
        <div className="md:hidden p-5">
          <ul className="flex flex-col gap-4 ">
            <a href="/" className=" hover:text-blue-400">
              <li>Home</li>
            </a>
            <a href="#" className=" hover:text-blue-400">
              <li>About</li>
            </a>
            <a href="#" className=" hover:text-blue-400">
              <li>Services</li>
            </a>
            <a href="#" className=" hover:text-blue-400">
              <li>Contact</li>
            </a>
          </ul>
        </div>
        )}
      </nav>
    </>
  );
};

export default Header;
