import React, { useState, useEffect } from "react";
import "../../index.css";
import {
  Menu,
  X,
  Home,
  Info,
  Briefcase,
  Mail,
  ChevronRight,
} from "lucide-react";

const Header = () => {
  const [open, setOpen] = useState(false);
  const [isClosing, setIsClosing] = useState(false);
  useEffect(() => {
    if (open) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }

    return () => {
      document.body.style.overflow = "unset";
    };
  }, [open]);

  const handleClose = () => {
    setIsClosing(true);
    setTimeout(() => {
      setOpen(false);
      setIsClosing(false);
    }, 300);
  };

  const menuItems = [
    { icon: <Home size={20} />, label: "Home", href: "/" },
    { icon: <Info size={20} />, label: "About", href: "#" },
    { icon: <Briefcase size={20} />, label: "Services", href: "#" },
    { icon: <Mail size={20} />, label: "Contact", href: "#" },
  ];

  return (
    <nav className="w-full relative z-50">
      <div className="py-8 px-5 sm:px-5 md:px-10 lg:px-20 xl:px-28 flex items-center justify-between">
        <div className="flex items-center gap-4">
          <img className="w-20 sm:w-30 h-auto" src="logo2.png" alt="logo" />
        </div>
        <ul className="hidden md:flex gap-10 justify-end">
          {menuItems.map((item) => (
            <a
              key={item.label}
              href={item.href}
              className="hover:text-blue-500 transition-colors duration-200 relative group"
            >
              <li className="flex items-center gap-2">
                {item.label}
                <ChevronRight
                  size={16}
                  className="opacity-0 group-hover:opacity-100 transition-opacity"
                />
              </li>
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-blue-500 group-hover:w-full transition-all duration-300"></span>
            </a>
          ))}
        </ul>
        <div className="flex items-center gap-2 md:hidden">
          {open && (
            <button
              onClick={handleClose}
              className="p-2 hover:bg-gray-100 rounded-lg transition-all hover:scale-110"
            >
              <X size={22} className="text-gray-700" />
            </button>
          )}
          {!open && (
            <button
              className="p-2 hover:bg-gray-100 rounded-lg transition-colors"
              onClick={() => setOpen(true)}
            >
              <Menu size={22} />
            </button>
          )}
        </div>
      </div>
      {open && (
        <>
          <div
            className={`fixed inset-0 z-40 transition-all duration-500 ${
              isClosing
                ? "bg-opacity-0 backdrop-blur-0"
                : "bg-opacity-30 backdrop-blur-sm"
            }`}
          ></div>
          <div
            className={`fixed top-0 right-0 h-full z-50 md:hidden ${
              isClosing ? "animate-slideOutRight" : "animate-slideInRight"
            }`}
          >
            <div className="w-72 sm:w-80 h-full bg-gradient-to-b from-black to-gray-50 shadow-2xl">
              <div className="p-6 border-b border-gray-100">
                <div className="flex items-center justify-between">
                  <img className="w-20 h-auto" src="logo2.png" alt="logo" />
                  <button
                    onClick={handleClose}
                    className="p-2 hover:bg-gray-100 rounded-lg transition-all hover:scale-110"
                  >
                    <X size={24} className="text-white/80" />
                  </button>
                </div>
                <p className="text-white-500 text-sm mt-4">Navigation Menu</p>
              </div>
              <div className="p-6">
                <ul className="space-y-2">
                  {menuItems.map((item, index) => (
                    <li key={item.label}>
                      <a
                        href={item.href}
                        className="flex items-center justify-between p-3 rounded-xl hover:bg-blue-50 hover:text-blue-600 transition-all duration-300 group"
                        onClick={() => setTimeout(handleClose, 300)}
                        style={{ animationDelay: `${index * 100}ms` }}
                      >
                        <div className="flex items-center gap-4">
                          <div className="p-2 rounded-lg bg-blue-50 text-blue-600 group-hover:bg-blue-100 group-hover:scale-110 transition-all">
                            {item.icon}
                          </div>
                          <span className="font-medium">{item.label}</span>
                        </div>
                        <ChevronRight
                          size={18}
                          className="text-white/80 group-hover:text-blue-600 group-hover:translate-x-1 transition-all"
                        />
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="absolute bottom-0 w-full p-6 border-t border-gray-100">
                <div className="text-center">
                  <div className="flex flex-row align-center gap-2 justify-center">
                  <p className="text-gray-500 text-sm">© 2026</p>
                  <img className="w-12 h-auto object-contain" src="logo2.png" alt="logo" />
                  </div>
                 
                  <p className="text-black/90 text-xs mt-1">
                    All rights reserved
                  </p>
                </div>
              </div>
            </div>
          </div>
        </>
      )}
    </nav>
  );
};

export default Header;
