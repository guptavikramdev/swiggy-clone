import React from "react";
const Skeleton=({ size })=> {
  return (
    <>
    <h3 className="w-96 h-8 mb-5 bg-slate-100 dark:bg-slate-800 rounded-3xl"></h3>
    <div className="flex w-full gap-4 ">
      
      {Array(size)
        .fill()
        .map((item, index) => {
          return (<div className="w-1/3 h-64 bg-slate-100 dark:bg-slate-800 rounded-3xl" key={index}></div>);
        })}
    </div>
    </>
  );
}

export default Skeleton;
