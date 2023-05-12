import { BsWhatsapp } from "react-icons/bs";
import { GoMailRead } from "react-icons/go";
import { IoLocationOutline } from "react-icons/io5";

function Head() {
  return (
    <div className="flex  bg-[#262a38] sticky top-0 left-0 right-0 z-[999]  border-b-2  border-b-white/40">
      <div className=" p-5 flex items-center justify-center w-1/4">
        <h1 className="font-bold underline text-white font-head">LOGO</h1>
      </div>
      <div className="flex flex-col flex-1 justify-between ">
        <div className="flex justify-end  p-2 ">
          <div className="flex items-center justify-between  w-64 h-full p-1">
            <div className="flex items-center justify-center  w-1/4 h-full">
              <BsWhatsapp size={20} color="green" />
            </div>
            <div className="flex-1">
              <p className="text-gray-400">Whatsapp</p>
              <p className="font-bold hover:text-green-600 hover:cursor-pointer text-black">
                +256 701774497
              </p>
            </div>
          </div>
          <div className="flex items-center justify-between  w-64 h-full p-1">
            <div className="flex items-center justify-center  w-1/4 h-full">
              <GoMailRead size={20} color="green" />
            </div>
            <div className="flex-1">
              <p className="text-gray-400">Send email</p>
              <p className="font-bold hover:text-green-600 hover:cursor-pointer text-black">
                info@fredsonlogistics.com
              </p>
            </div>
          </div>
          <div className="flex items-center justify-between  w-64 h-full p-1 ">
            <div className="flex items-center justify-center  w-1/4 h-full ">
              <IoLocationOutline size={20} color="green" />
            </div>
            <div className="flex-1 ">
              <p className="text-gray-400">Location</p>
              <p className="font-bold hover:text-green-600 hover:cursor-pointer text-black">
                Kampala, Uganda
              </p>
            </div>
          </div>
        </div>
        <div className="flex justify-between ">
          <div className="flex items-center justify-evenly flex-1 bg-white/30 backdrop-blur-md  h-[10vh] rounded-tl-2xl ">
            <a className=" font-bold hover:font-bold hover:cursor-pointer hover:text-white">
              Home
            </a>
            <a className="font-bold hover:font-bold hover:cursor-pointer hover:text-white">
              About
            </a>
            <a className="font-bold hover:font-bold hover:cursor-pointer hover:text-white">
              Services
            </a>
            <a className="font-bold hover:font-bold hover:cursor-pointer hover:text-white">
              Gallery
            </a>
          </div>
          <a className="flex items-center justify-center bg-red-950 h-full w-48 hover:bg-gray-950  hover:text-white hover:cursor-pointer text-[25px] font-bold text-gray-400 ">
            Start
          </a>
        </div>
      </div>
    </div>
  );
}

export default Head;
