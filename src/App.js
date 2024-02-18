import { Header, Footer } from "./components";
import { Outlet } from "react-router-dom";
import { useEffect, useState, useRef } from "react";
export default App = () => {
  const [data, setData] = useState({});
  const ref = useRef(null);
  //console.log(ref?.current?innerText="gjhgghj");
  useEffect(async () => {
    const res = await fetch("https://jsonplaceholder.typicode.com/users");
    const usersData = await res.json();
    const streetArr = [..."tln"];
    const result = {};
    streetArr.forEach((element) => {
      result[element.toUpperCase()] = [];
    });
    usersData?.forEach((user) => {
      const {
        address: { street },
      } = user;
      if (streetArr.includes(street.charAt(street.length - 1))) {
        result[street.toUpperCase().charAt(street.length - 1)].push(street);
      }
    });
    console.log(result);
    setData(result);
  }, []);
  return (
    <div className=" dark:bg-slate-900 dark:text-slate-300  w-full h-full  font-Poppins">
      <Header />

      <div className="lg:w-3/4 w-full  m-auto pt-24 " ref={ref}>
        <div style={{ display: "flex", gap: "20px", flexWrap: "wrap" }}>
          {Object.values(data)?.map((value) => {
            return (
              <>
                {value?.map((item) => {
                  return (
                    <div style={{ flexBasis: "200px", background: "yellow" }}>
                      {item}
                    </div>
                  );
                })}
              </>
            );
          })}
        </div>
        <Outlet />
      </div>
      <Footer />
    </div>
  );
};
