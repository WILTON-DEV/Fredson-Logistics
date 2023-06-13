import React from "react";

function Card4({ name, tittle, text, image }) {
  return (
    <div className="h-full w-[20vw] flex flex-col items-center justify-center ">
      <div className="w-[20vh] h-[20vh] bg-green-500 rounded-full mb-6">
        <img
          src={image}
          alt="image"
          className="h-full w-full object-cover rounded-full border-2 border-white/40"
        />
      </div>
      <div className="h-[10vh] w-[10vh]   bg-[#262a38]/30  border-white/40 backdrop-blur-md  rotate-45  mb-[-35px] border-t-2 border-l-2 z-50  border-[#eee9db] "></div>
      <div className="relative  bg-[#262a38]  border-white/40 backdrop-blur-md shadow-2xl  text-white  h-[50vh] w-[20vw] flex flex-col items-center  justify-end border-2 rounded-2xl border-[#eee9db]">
       <div className="h-3/4 flex flex-col items-center justify-between px-2">
         <p className=" text-gray-500">{text}</p>
        <h4 className="text-[20px] font-extrabold">{name}</h4>
        <p className="text-cyan-400">{tittle}</p>
        <div className="flex items-center justify-between w-1/2 h-8 bg-[#be2117] rounded-full mb-[-23px] text-[25px] text-white px-4 ">
          <div>*</div>
          <div>*</div>
          <div>*</div>
          <div>*</div>
          <div>*</div>
        </div>
       </div>
      </div>
    </div>
  );
}

export default Card4;
