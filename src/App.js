import { Header, Footer } from "./components";
import { Outlet } from "react-router-dom";
export default App = () => {
  return (
    <div className=" dark:bg-slate-900 dark:text-slate-300  w-full h-full  font-Poppins">
      <Header />
      <div className="w-3/4  m-auto pt-24 ">
        <Outlet />
      </div>
      <Footer />
    </div>
  );
};
