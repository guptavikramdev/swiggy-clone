import { Header, Footer } from "./components";
import { Outlet } from "react-router-dom";
import { useEffect, useState, useRef } from "react";
export default App = () => {
  return (
    <div className=" dark:bg-slate-900 dark:text-slate-300  w-full h-full  font-Poppins">
      <Header />
      <div className="lg:w-3/4 w-full  m-auto pt-24 ">
        <Outlet />
      </div>
      <Footer />
    </div>
  );
};
