import React from "react";
import Image1 from "../images/image1.jpg";
import Image2 from "../images/image2.jpg";
import DiscoverButton from "./DiscoverButton";

function HomeComponent2() {
  return (
    <div className="relative flex p-2  h-[90vh] z-50">
      <div className="relative h-full w-1/2 flex flex-col ">
        <div className=" absolute top-5 left-[70px] h-[85vh] w-[450px] rounded-b-full border-8 border-red-900 z-10 "></div>
        <div className="absolute top-20 left-[100px] h-[85vh] w-[450px] rounded-b-full rounded-tr-full p-2">
          <img
            className="w-full  h-full object-cover rounded-b-full rounded-tr-full border-2 border-gray-200 hover:scale-200  cursor-pointer transition duration-200"
            src={Image1}
            alt="Image 1"
          />
        </div>
      </div>

      <div className="flex flex-col justify-evenly w-1/2 h-[85vh] p-8 bg-[#262a38]/30  border-white/40 backdrop-blur-md border-2 shadow-2xl rounded-2xl text-white">
        <div>
          <p className="text-[15px] font-extrabold text-red-900">
            Welcome to freight Services
          </p>

          <h4 className="text-[35px] font-extrabold">
            Lets connect you World wide
          </h4>

          <p className="">
            We help companies develop powerful corporate social responsibility,
            grantmaking, and employee engagement strategies. Our impact is about
            more than moving money to where it's needed most it's also about
            helping nonprofits access information and ideas that will help them
            listen, learn, and grow.
          </p>
        </div>
        <div className="flex h-11 items-center justify-evenly my-2">
          <div className="w-2 mx-8 bg-red-900 h-full "></div>
          <p className="mx-2">
            Helped fund 24,537 Projects in 24 Countries, Benefiting over 8.2
            Million people.
          </p>
        </div>
        <div className="flex items-center justify-between">
          <div className="flex items-center h-[100px] w-1/2">
            <div className="flex items-center justify-center h-full w-1/4 hover:scale-75">
              SVG
            </div>
            <div className="h-full flex flex-col justify-evenly flex-1">
              <p className="font-extrabold p-1 hover:cursor-pointer hover:text-red-900">
                Join Our Team
              </p>
              <p className="p-1">
                Lorem ipsum dolor sit amet not quis mis notted.
              </p>
            </div>
          </div>

          <div className="flex items-center h-[100px] w-1/2">
            <div className="flex items-center justify-center h-full w-1/4 hover:scale-75">
              SVG
            </div>
            <div className="h-full flex flex-col justify-evenly flex-1">
              <p className="font-extrabold p-1 hover:cursor-pointer hover:text-red-900">
                Start donating
              </p>
              <p className="p-1">
                Lorem ipsum dolor sit amet not quis mis notted.
              </p>
            </div>
          </div>
        </div>
        <DiscoverButton>DISCOVER MORE</DiscoverButton>
      </div>
    </div>
  );
}

export default HomeComponent2;
