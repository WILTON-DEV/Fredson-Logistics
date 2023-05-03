import React from "react";
import DiscoverButton from "./DiscoverButton";
import Card2 from "./card2";


function HomeComponent5() {
  return (
    <div className=" h-[100vh] bg-pink-100 flex justify-between py-4">
        <div className="flex flex-col justify-evenly w-1/4 h-full py-2 px-4  ">
          <p className="text-[15px] font-extrabold text-red-400">
            Welcome to freight Services
          </p>

          <h4 className="text-[40px] font-extrabold">
            Lets connect you World wide
          </h4>

          <p className="text-gray-600 mb-8">
            We help companies develop powerful corporate social responsibility,
            grantmaking, and employee engagement strategies.
          </p>
          <DiscoverButton>DISCOVER more</DiscoverButton>
      </div>
      <div className="relative flex flex-col justify-between w-3/4 h-full ">
        <div className="flex justify-between h-full w-full py-4 px-2 ">
          <Card2 />
          <Card2 />
          <Card2 />
        </div>
        <div className="flex justify-between  absolute top-[430px] left-[830px]">
          <button className='flex items-center justify-center w-[50px]   h-[50px] rounded-full border-2 border-gray-950 hover:bg-cyan-950'>--</button>
          <button className='flex items-center justify-center w-[50px]   h-[50px] rounded-full border-2 border-gray-950 mx-2 hover:bg-cyan-950' >--</button>
        </div>
      </div>
    </div>
  );
}

export default HomeComponent5;
