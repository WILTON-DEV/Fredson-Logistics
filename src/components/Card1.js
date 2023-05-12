import React from "react";
import Image3 from '../images/image3.jpg';

function Card1() {
  return (
    <div class="max-w-sm rounded-3xl  shadow-2xl h-[520px] w-[350px] border-2  flex flex-col justify-between bg-[#262a38]/30 backdrop-blur-md ">
      <div className="h-[30vh] w-full flex justify-center mt-[-10vh]">
        <img class="w-[30vh] h-full object-cover rounded-full border-2" src={Image3} alt="Card Image" />
      </div>
      <div className=" flex flex-col h-3/4 py-2 px-6 justify-evenly">
        <div class="flex flex-col justify-between ">
          <p class="font-bold text-xl mb-2">The Coldest Sunset</p>
          <p class="text-base mb-4">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit.
            Voluptatibus quia, nulla! Maiores et perferendis eaque,
            exercitationem praesentium nihil.
          </p>
        </div>
        <div class="flex flex-col justify-center h-[80px] rounded-lg  bg-white/30 backdrop-blur-md border-2 border-white/40 p-4 ">
          <input
            id="large-range"
            type="range"
            value="50"
            className="w-full h-2  accent-cyan-950  rounded-lg appearance-none cursor-pointer mb-1 bg-green-950"
          ></input>
          <div className="flex items-center justify-between w-full">
            <p>
              $5667 <span className="text-gray-400">Raised</span>
            </p>
            <p>
              $1077265 <span className="text-gray-400">Goal</span>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Card1;
