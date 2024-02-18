import React, { useEffect, useState } from "react";
import logo from "../logo.png";
import { Link } from "react-router-dom";
import {
  HelpIcon,
  OffersIcon,
  SearchIcon,
  SignInIcon,
  CartIcon,
} from "./svgIcons";
const Header = () => {
  const [theme, setTheme] = useState(localStorage.getItem("theme") || "light");
  const handleTheme = () => {
    console.log("Theme");
    var is_theme = theme === "light" ? "dark" : "light";
    setTheme(is_theme);
  };
  useEffect(() => {
    if (theme === "light") {
      document.documentElement.classList.remove("dark");
      document.documentElement.classList.add("light");
      localStorage.setItem("theme", theme);
    } else {
      document.documentElement.classList.remove("light");
      document.documentElement.classList.add("dark");
      localStorage.setItem("theme", theme);
    }
  }, [theme]);
  return (
    <div className="w-full h-20 fixed top-0 z-10 bg-white  dark:bg-gray-900 shadow-lg shadow-slate-100/90 dark:shadow-black/10">
      <div className="lg:max-w-7xl px-5 h-20 items-center  mx-auto flex justify-between">
        <div className="">
          <Link to="/">
            <img src={logo} alt="logo" className="w-24" />
          </Link>
        </div>
        <ul className="flex gap-10 text-lg  font-medium tracking-wider invisible lg:visible">
          <li className="hover:text-primary-color duration-500 group">
            <Link to="/search" className=" flex items-center gap-2">
              <SearchIcon className="group-hover:fill-orange-500 duration-500 mt-[-3px]" />
              Search
            </Link>
          </li>
          <li className="hover:text-primary-color duration-500 group">
            <Link to="/offers" className=" flex items-center gap-2">
              <OffersIcon className="group-hover:fill-orange-500 duration-500 mt-[-3px]" />
              Offers
            </Link>
          </li>
          <li className="hover:text-primary-color duration-500 group">
            <Link to="/help" className=" flex items-center gap-2">
              <HelpIcon className="group-hover:fill-orange-500 duration-500 mt-[-3px]" />
              Help
            </Link>
          </li>
          <li className="hover:text-primary-color duration-500 group">
            <Link to="/sign-in" className=" flex items-center gap-2">
              <SignInIcon className="group-hover:fill-orange-500 duration-500 mt-[-3px]" />
              Sign In
            </Link>
          </li>
          <li className="hover:text-primary-color duration-500 group  ">
            <Link to="/cart" className="flex group items-center gap-2 ">
              <CartIcon className="group-hover:fill-orange-500 duration-500 mt-[-3px]" />
              Cart
            </Link>
          </li>
          <li>
            <button onClick={handleTheme} className="dark:hidden  mt-[5px]">
              <svg width="16" height="16" xmlns="http://www.w3.org/2000/svg">
                <path
                  className="fill-slate-300"
                  d="M7 0h2v2H7zM12.88 1.637l1.414 1.415-1.415 1.413-1.413-1.414zM14 7h2v2h-2zM12.95 14.433l-1.414-1.413 1.413-1.415 1.415 1.414zM7 14h2v2H7zM2.98 14.364l-1.413-1.415 1.414-1.414 1.414 1.415zM0 7h2v2H0zM3.05 1.706 4.463 3.12 3.05 4.535 1.636 3.12z"
                />
                <path
                  className="fill-slate-400"
                  d="M8 4C5.8 4 4 5.8 4 8s1.8 4 4 4 4-1.8 4-4-1.8-4-4-4Z"
                />
              </svg>
            </button>
            <button
              onClick={handleTheme}
              className="hidden dark:block mt-[5px]"
            >
              <svg width="16" height="16" xmlns="http://www.w3.org/2000/svg">
                <path
                  className="fill-slate-400"
                  d="M6.2 1C3.2 1.8 1 4.6 1 7.9 1 11.8 4.2 15 8.1 15c3.3 0 6-2.2 6.9-5.2C9.7 11.2 4.8 6.3 6.2 1Z"
                />
                <path
                  className="fill-slate-500"
                  d="M12.5 5a.625.625 0 0 1-.625-.625 1.252 1.252 0 0 0-1.25-1.25.625.625 0 1 1 0-1.25 1.252 1.252 0 0 0 1.25-1.25.625.625 0 1 1 1.25 0c.001.69.56 1.249 1.25 1.25a.625.625 0 1 1 0 1.25c-.69.001-1.249.56-1.25 1.25A.625.625 0 0 1 12.5 5Z"
                />
              </svg>
            </button>
          </li>
        </ul>
      </div>
    </div>
  );
};
export default Header;
