import Image3 from "../images/image3.jpg";
import Image4 from "../images/image4.jpg";
import Image01 from "../images/image01.jpg";
import Image2 from "../images/image2.jpg";
import Card3 from "./Card3";
import DiscoverButton from './DiscoverButton';
import { motion } from 'framer-motion';

function HomeComponent6({ name, tittle, text }) {
  const data = [
    {
      name: "Muwonge Lawrence",
      tittle: "Managing Director",
      text: "Lorem Ipsum is simply dummy text of the printing and typesetting industry Lorem Ipsum has been the industrys standard dummy text e",
      image: Image2,
    },
   
    
  ];

  return (
    <div className="relative flex h-[95vh]  w-full ">
      <div className="absolute top-0 left-0 w-full h-full bg-slate-600 z-0">
        <img src={Image4} alt='image 4' className="h-full w-full object-cover"/>
      </div>
      <div className=" absolute w-full h-full  flex justify-end z-10">
        <div className="relative w-1/2 h-full">
          <img src={Image4} alt='image 4' className="absolute top-[10vh] left-[-50vh] h-[20vh] w-[20vh] object-cover border-8 rounded-full"/>
          <img src={Image2} alt='image 4' className="absolute top-[70vh] left-[-60vh] h-[20vh] w-[20vh] object-cover border-8 rounded-full"/>
          <img src={Image01} alt='image 4' className="absolute top-[60vh] left-[60vh] h-[20vh] w-[20vh] object-cover border-8 rounded-full"/>
          <img src={Image3} alt='image 4' className="absolute top-[20vh] left-[5vh] h-[20vh] w-[20vh] object-cover border-8 rounded-full"/>
        </div>
        <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-r from-gray-950/40   z-20"></div>
      </div>
      <div className="absolute top-0 left-0 h-full w-full bg-slate-400/90 z-30 flex ">
            <div className="flex flex-col items-center justify-center p-8 w-1/2 h-full ">
        <div className="flex flex-col justify-between h-1/2 ">
          <p className="text-[20px] font-extrabold text-red-400">
            Welcome to freight Services
          </p>

          <h4 className="text-[50px] font-extrabold text-white ">
            Lets connect you World wide
          </h4>

          <p className="text-gray-300 mb-8">
            We help companies develop powerful corporate social responsibility,
            grantmaking, and employee engagement strategies.
          </p>
          <DiscoverButton>DISCOVER more</DiscoverButton>
        </div>
      </div>
      <div className="relative h-full w-1/2 flex items-center justify-center  ">
       {data.map(({name, tittle, text, image})=> (<Card3
          tittle={tittle}
          name={name}
          text={text}
          image={image}
        />))}
        <div className="absolute top-[72vh] left-[35vw] flex items-center justify-between w-1/4 p-4 z-50">
          <div className=" flex items-center justify-center h-[50px] w-[50px] bg-white rounded-full hover:cursor-pointer">--</div>
          <div className=" flex items-center justify-center h-[50px] w-[50px] bg-white rounded-full hover:cursor-pointer">--</div>
          
        </div>
      </div>
      </div>
    // </div>
  );
}

export default HomeComponent6;
