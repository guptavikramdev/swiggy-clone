import React from "react";
const Skeleton = ({ size, w, h, rounded = "" }) => {
  return (
    <>
      <h3 className="w-96 h-8 my-5 bg-slate-100 dark:bg-slate-800 rounded-3xl"></h3>
      <div className="flex w-full gap-4">
        {Array(size)
          .fill()
          .map((item, index) => {
            return (
              <div
                className={`${w} ${h} ${rounded} bg-slate-100 dark:bg-slate-800 `}
                key={index}
              ></div>
            );
          })}
      </div>
    </>
  );
};

export default Skeleton;
