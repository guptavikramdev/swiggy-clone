import React from "react";
import logo from "../logo.png";
import { Link } from "react-router-dom";
const Header = () => {
  return (
    <div className="w-full h-20 fixed top-0 z-10 bg-white  dark:bg-gray-900 shadow-lg shadow-slate-100/90 dark:shadow-black/10">
      <div className="lg:max-w-7xl px-5 h-20 items-center  mx-auto flex justify-between">
        <div className="">
          <Link to="/">
            <img src={logo} alt="logo" className="w-24" />
          </Link>
        </div>
        <ul className="flex gap-10 text-lg font-semibold tracking-wider invisible lg:visible">
          <li>
            <Link to="/search">Search</Link>
          </li>
          <li>
            <Link to="/offers">Offers</Link>
          </li>
          <li>
            <Link to="/help">Help</Link>
          </li>
          <li>Sign In</li>
          <li>Cart</li>
        </ul>
      </div>
    </div>
  );
};
export default Header;
