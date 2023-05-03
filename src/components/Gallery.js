import React from "react";
import Image3 from '../images/image3.jpg';

function Gallery({Image}) {
  return (
    <div className=" h-[140vh] w-full mb-2">
      <div className="bg-cyan-950 h-1/4 w-full rounded-b-2xl flex items-center justify-center">
        <div className=" h-full w-1/2 flex flex-col items-center justify-center text-[50px] text-white">
            <p>Gallery</p>
            <div className="bg-white h-2 w-11 rounded-2xl"></div>
          </div>
      </div>
      <div className="h-[10vh] w-full mt-[-5vh] flex justify-center ">
        <div className="bg-cyan-950 h-full w-[10vh] rotate-45 ">
          
        </div>
      </div>
      <div className=" bg-gradient-to-t from-gray-950 h-[90vh] w-full mt-4 flex items-center justify-between flex-wrap">
        <div className="h-[25vh] w-1/4 p-4"> 
          <img src={Image} alt='Gallery Image' className="h-full w-full object-cover rounded-3xl" />
        </div>
      </div>
    </div>
  );
}

export default Gallery;
