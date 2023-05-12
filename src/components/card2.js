import React from "react";
import DiscoverButton from "./DiscoverButton";
import Image2 from "../images/image2.jpg";

function card2() {
  return (
    <div className="relative h-3/4 w-[300px] transition-all duration-75 delay-75 ease-in-out  hover:scale-105 ">
      <div className="absolute top-0 left-0 w-full h-full  rounded-[50px] border-2 border-white">
        <img
          src={Image2}
          alt="image 4"
          className="w-full h-full object-cover rounded-[50px]"
        />
      </div>
      <div className="flex flex-col justify-between  absolute top-0 left-0 w-full h-full  rounded-[50px] z-10 hover:bg-gray-950/60 ">
        <div className="flex items-center justify-end ">
          <button className="w-[15vw] h-2  mx-6 my-4 text-xl flex items-center justify-center bg-cyan-950/40  text-white font-bold p-4 rounded-full">
            23-May-2023
          </button>
        </div>
        <div className="flex flex-col justify-end text-white p-8 rounded-[50px] bg-gradient-to-t from-gray-950/60 h-3/4">
          <div className="flex justify-start items-center ">
            <div className="flex items-center justify-between p-1 text-[15px]">
              <div>SVG</div>
              <p className="px-1">8:00pm</p>
            </div>
            <div className="flex items-center justify-between p-1 text-[15px]">
              <div>SVG</div>
              <p className="px-1">New York</p>
            </div>
          </div>
          <p className="font-extrabold text-[20px]">
            Play for the world with us
          </p>
        </div>
      </div>
    </div>
  );
}

export default card2;
