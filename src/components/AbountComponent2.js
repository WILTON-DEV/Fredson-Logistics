import React from "react";
import Image1 from "../images/image1.jpg";
import Image7 from "../images/image7.jpg";
import DiscoverButton from "./DiscoverButton";

function AboutComponent2() {
  return (
    <div className="flex ">
      <div className="relative h-full w-1/2 flex flex-col p-4">
        <div className=" absolute top-20 left-[13vh] h-[80vh] w-3/4 border-8 border-red-900 rounded-3xl"></div>
        <div className="absolute top-40 left-[12vw] h-[80vh] w-3/4 rounded-b-full p-2 z-10">
          <img
            className="w-full  h-full object-cover border-gray-200 hover:scale-200  cursor-pointer transition duration-200 rounded-3xl"
            src={Image7}
            alt="Image 1"
          />
        </div>
          <div className="absolute top-[-10vh] h-[80vh] w-3/4 rounded-b-full p-4 z-20 ">
          <img
            className="w-full  h-full object-cover border-gray-200 hover:scale-200  cursor-pointer transition duration-200 rounded-3xl"
            src={Image1}
            alt="Image 1"
          />
        </div>
      </div>

      <div className="flex flex-col justify-evenly w-1/2 h-[750px] p-8 ">
        <div>
          <p className="text-[15px] font-extrabold text-red-900">
            Welcome to freight Services
          </p>

          <h4 className="text-[50px] font-extrabold">
            Lets connect you World wide
          </h4>

          <p className="text-gray-600">
            We help companies develop powerful corporate social responsibility,
            grantmaking, and employee engagement strategies. Our impact is about
            more than moving money to where it's needed most it's also about
            helping nonprofits access information and ideas that will help them
            listen, learn, and grow.
          </p>
        </div>
        <div>
          <div className=" flex items-center py-2">
            <div className="bg-[#be2117] w-4 h-4 rounded-full text-white flex place-items-center justify-center ">+</div>
            <p className="px-2">Proin sed magna vel mi suscipit commodo.</p>
          </div>
          <div className="flex items-center py-2">
            <div className="bg-[#be2117] w-4 h-4 rounded-full text-white flex place-items-center justify-center ">+</div>
            <p className="px-2">Proin sed magna vel mi suscipit commodo.</p>
          </div>
          <div className="flex items-center py-2">
            <div className="bg-[#be2117] w-4 h-4 rounded-full text-white flex place-items-center justify-center ">+</div>
            <p className="px-2">Proin sed magna vel mi suscipit commodo.</p>
          </div>
        </div>
        <DiscoverButton>DISCOVER MORE</DiscoverButton>
      </div>
      
    </div>
  );
}

export default AboutComponent2;
