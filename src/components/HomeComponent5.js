import React from "react";
import DiscoverButton from "./DiscoverButton";
import Card2 from "./card2";

function HomeComponent5() {
  return (
    <div className=" h-[100vh]  flex justify-between py-4 px-2">
      <div className="flex flex-col justify-evenly w-[40vw] h-full py-2 px-4  bg-[#262a38]/30 backdrop-blur-md border-2 border-white/40 text-white shadow-md rounded-3xl">
        <p className="text-[15px] font-extrabold text-[#be2117]">
          Welcome to freight Services
        </p>

        <h4 className="text-[40px] font-extrabold">
          Lets connect you World wide
        </h4>

        <p className="mb-8">
          We help companies develop powerful corporate social responsibility,
          grantmaking, and employee engagement strategies.
        </p>
        <DiscoverButton>DISCOVER more</DiscoverButton>
      </div>
      <div className=" flex flex-col items-center justify-center w-[60vw] h-full ">
        <div className="relative flex items-center justify-evenly h-[85vh] w-full ">
          <Card2 />
          <Card2 />

          <div className="flex justify-between  absolute bottom-8 right-8 ">
            <button className="flex items-center justify-center w-[50px]   h-[50px] rounded-full  bg-[#262a38] border-2 border-white/30 hover:bg-cyan-950 z-50">
              --
            </button>
            <button className="flex items-center justify-center w-[50px]   h-[50px] rounded-full bg-[#262a38] border-2 border-white/30 mx-2 hover:bg-cyan-950 z-50">
              --
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default HomeComponent5;
