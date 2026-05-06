import React from "react";
import { Bars3Icon } from "@heroicons/react/24/solid";
import logo2 from "../assets/zephyr w.png";

const Navbar = ({ onMenuToggle }) => {
  return (
    <nav className="nav-royal fixed top-0 left-0 right-0 z-30 p-3 transition-all duration-300">
      <div className="container mx-auto flex justify-between items-center px-2">
        <a href="#hero" className="flex items-center gap-2 hover:opacity-85 transition-opacity">
          <img className="h-14 w-auto" src={logo2} alt="Zephyr" />
        </a>

        {/* Desktop links */}
        <div className="hidden md:flex items-center space-x-8">
          {["Home","About","Merchandise","Gallery","Events"].map((item) => (
            <a
              key={item}
              href={`#${item.toLowerCase()}`}
              className="nav-link-royal"
            >
              {item}
            </a>
          ))}
        </div>

        {/* Hamburger */}
        <button
          onClick={onMenuToggle}
          className="md:hidden text-amber-300 hover:text-amber-100 focus:outline-none transition-colors"
          aria-label="Toggle menu"
        >
          <Bars3Icon className="h-7 w-7" />
        </button>
      </div>

      {/* Gold accent line at bottom */}
      <div
        style={{
          position: "absolute",
          bottom: 0,
          left: "10%",
          right: "10%",
          height: "1px",
          background: "linear-gradient(90deg, transparent, rgba(201,150,58,0.4), rgba(201,150,58,0.6), rgba(201,150,58,0.4), transparent)",
        }}
      />
    </nav>
  );
};

export default Navbar;
