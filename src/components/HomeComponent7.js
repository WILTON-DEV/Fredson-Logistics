import React from "react";
import DiscoverButton from "./DiscoverButton";
import Image5 from "../images/image5.jpg";
import Image7 from "../images/image7.jpg";

function HomeComponenet7() {
  return (
    <div className=" relative h-[70vh] bg-red-600 ">
      <div className="absolute top-0 left-0 h-full w-full z-10">
        <img src={Image7} alt="image" className="w-full h-full object-cover" />
      </div>
      <div className="absolute top-0 left-0 h-full w-full bg-slate-950/90 z-20"></div>
      <div className="absolute top-0 left-0 h-full w-full z-50 flex items-center justify-between mx-auto  ">
        <div className=" w-1/4 flex flex-col justify-evenly p-2 h-full z-30 mx-8  space-x-4 items-center">
          <div className="text-white bg-cyan-950 h-[15vh] w-[15vh] rounded-full flex items-center   justify-center text-center text-[15px]">
            COMPANY LOGO
          </div>
          <p className="text-gray-600">
            Nulla ultricies justo sit amet ante efficitur, eget pharetra augue
            efficitur. Vestibulum viverra, dolor sit amet ultricies.
          </p>
          <DiscoverButton>DONATE MORE</DiscoverButton>
        </div>
        <div className=" w-1/4 flex flex-col justify-evenly p-2 h-1/2">
          <p className="text-white font-extrabold">Links</p>
          <ul className="text-gray-600">
            <li>About us</li>
            <li>Contact</li>
            <li>Latest News</li>
            <li>Recent Evevnts</li>
            <li>Donations</li>
          </ul>
        </div>
        <div className=" w-1/4 flex flex-col justify-evenly p-2 h-1/2">
          <p className="text-white font-extrabold">Non Profit</p>
          <ul className="text-gray-600">
            <li>Differently Abled Kids</li>
            <li>Help Child Cancer</li>
            <li>Clean Pure water</li>
            <li>Give them Education</li>
            <li>Start a Fundaraising</li>
          </ul>
        </div>
        <div className=" w-1/4 flex flex-col justify-evenly p-2 h-1/2 ">
          <p className="text-white font-extrabold">Contact</p>
          <ul className="text-gray-600">
            <li>380 street kilda Broklyn Road </li>
            <li>Melbourne Australia</li>
          </ul>
          <div className="flex items-center justify-evenly w-1/2">
            <div>SVG</div>
            <p className="text-white">name to svg</p>
          </div>{" "}
          <div className="flex items-center justify-evenly w-1/2">
            <div>SVG</div>
            <p className="text-white">name to svg</p>
          </div>
          <div className="flex items-center justify-center ">
            <div className="h-[5vh] w-[5vh] bg-gray-600 rounded-full flex items-center justify-center mx-2">
              SVG
            </div>
            <div className="h-[5vh] w-[5vh] bg-gray-600 rounded-full flex items-center justify-center mx-2">
              SVG
            </div>
            <div className="h-[5vh] w-[5vh] bg-gray-600 rounded-full flex items-center justify-center mx-2">
              SVG
            </div>
            <div className="h-[5vh] w-[5vh] bg-gray-600 rounded-full flex items-center justify-center mx-2">
              SVG
            </div>
          </div>
        </div>
  
      </div>
    </div>
  );
}

export default HomeComponenet7;
