import React from "react";
import Image3 from '../images/image3.jpg';

function Card1() {
  return (
    <div class="max-w-sm rounded-lg overflow-hidden shadow-lg h-[520px] w-[350px]">
      <div className="h-[250px] ">
        <img class="w-full h-full object-cover" src={Image3} alt="Card Image" />
      </div>
      <div className=" flex flex-col h-full p-2">
        <div class="flex flex-col justify-between ">
          <p class="font-bold text-xl mb-2">The Coldest Sunset</p>
          <p class="text-gray-700 text-base mb-4">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit.
            Voluptatibus quia, nulla! Maiores et perferendis eaque,
            exercitationem praesentium nihil.
          </p>
        </div>
        <div class="flex flex-col justify-center h-[80px] rounded-lg  bg-pink-100 p-4 ">
          <input
            id="large-range"
            type="range"
            value="50"
            className="w-full h-0.5  accent-cyan-950  rounded-lg appearance-none cursor-pointer mb-1 bg-green-950"
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
