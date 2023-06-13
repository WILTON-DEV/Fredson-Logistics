import { BsWhatsapp } from "react-icons/bs";
import { GoMailRead } from "react-icons/go";
import { IoLocationOutline } from "react-icons/io5";
import Link from "./Link";
import { ABOUT, GALLERY, HOME, SERVICE, START } from "../constants/navigationStrings";


function Head() {
  const navigationStrings = [
    {
      id: 1,
      text: HOME,
      link: "/"
    },
    {
      id: 2,
      text: ABOUT,
      link: "/about"
    },
    {
      id: 3,
      text: SERVICE,
      link: "/service"
    },
    {
      id: 4,
      text: GALLERY,
      link: "/gallery"
    }

  ];

  console.log(navigationStrings)
  return (
    <div className="flex sticky top-0 left-0 right-0 z-[999] bg-white/30 backdrop-blur-2xl">
      <div className=" p-5 flex items-center justify-center w-1/4">
        <h1 className="font-bold underline text-white font-head">LOGO</h1>
      </div>
      <div className="flex flex-col flex-1 justify-between ">
        <div className="flex justify-end text-[13px]">
          <div className="flex items-center justify-between  w-64 h-full p-1">
            <div className="flex items-center justify-center  w-1/4 h-full">
              <BsWhatsapp size={20} color="#be2117" />
            </div>
            <div className="flex-1">
              <p className="text-gray-900">Whatsapp</p>
              <p className="font-bold hover:text-[#be2117] hover:cursor-pointer text-black">
                +256 701774497
              </p>
            </div>
          </div>
          <div className="flex items-center justify-between  w-64 h-full p-1">
            <div className="flex items-center justify-center  w-1/4 h-full">
              <GoMailRead size={20} color="#be2117" />
            </div>
            <div className="flex-1">
              <p className="text-gray-900">Send email</p>
              <p className="font-bold hover:text-[#be2117] hover:cursor-pointer text-black">
                info@fredsonlogistics.com
              </p>
            </div>
          </div>
          <div className="flex items-center justify-between  w-64 h-full p-1 ">
            <div className="flex items-center justify-center  w-1/4 h-full ">
              <IoLocationOutline size={20} color="#be2117" />
            </div>
            <div className="flex-1 ">
              <p className="text-gray-900">Location</p>
              <p className="font-bold hover:text-[#be2117] hover:cursor-pointer text-black">
                Kampala, Uganda
              </p>
            </div>
          </div>
        </div>
        <div className="flex justify-between ">
          <div className="flex items-center justify-evenly flex-1   h-[10vh] rounded-tl-2xl backdrop-blur-md">
            {
              navigationStrings.map(({ id, text, link }) => {

                return(
                <Link to={link} key={id} >{text}</Link>
                );
              }) 

            }
          </div>
          <a className="flex items-center justify-center bg-[#be2117] h-full w-48 hover:bg-gray-950  hover:text-white hover:cursor-pointer text-[25px] font-bold text-gray-400 ">
            <Link to="/customer">Start</Link>
          </a>
        </div>
      </div>
    </div>
  );
}

export default Head;
