import React from "react";
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
            <Link to="/search" className=" flex items-center gap-2">
              <OffersIcon className="group-hover:fill-orange-500 duration-500 mt-[-3px]" />
              Offers
            </Link>
          </li>
          <li className="hover:text-primary-color duration-500 group">
            <Link to="/search" className=" flex items-center gap-2">
              <HelpIcon className="group-hover:fill-orange-500 duration-500 mt-[-3px]" />
              Help
            </Link>
          </li>
          <li className="hover:text-primary-color duration-500 group">
            <Link to="/search" className=" flex items-center gap-2">
              <SignInIcon className="group-hover:fill-orange-500 duration-500 mt-[-3px]" />
              Sign In
            </Link>
          </li>
          <li className="hover:text-primary-color duration-500 group  ">
            <Link to="/help" className="flex group items-center gap-2 ">
              <CartIcon className="group-hover:fill-orange-500 duration-500 mt-[-3px]" />
              Cart
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
};
export default Header;
