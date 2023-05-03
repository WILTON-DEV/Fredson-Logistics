import React from "react";
import Image7 from "../images/image7.jpg";

function Companies({ name }) {
  return (
    <div className=" relative h-[30vh] flex items-center justify-between px-10 py-4 ">
      <div className="absolute top-0 left-0 bg-red-950/90 h-full w-full"></div>
      <div className=" h-full flex items-center  p-4">
        <div className="h-3/4 w-[10vw] flex flex-col items-center justify-center">
          <div className="h-1/2 w-1/2 bg-green-950 rounded-full flex items-center justify-center text-white ">
            <img
              src={Image7}
              alt="logo"
              className="h-full w-full rounded-full"
            />
          </div>
          <p className="p-2 font-extrabold">{name}</p>
        </div>
      </div>
    </div>
  );
}

export default Companies;
