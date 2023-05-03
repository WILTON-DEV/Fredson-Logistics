import Image5 from "../images/image5.jpg";
import DiscoverButton from "./DiscoverButton";
import { motion } from "framer-motion";

function HomeComponent1() {
  return (
    <div className="relative h-[70vh]  mb-11">
      <div className="flex absolute top-0 left-0 items-center  bg-gradient-to-t from-slate-950 bg-gray-950/60 h-[88vh] w-full z-10">
        <div className="w-1/2 h-1/2 px-[5vw]">
          <p className="text-white font-bold text-[50px]">WORLD WIDE</p>
          <p className="text-white font-bold text-[50px]">FREIGHT SERVICES</p>
          <DiscoverButton>DISCOVER MORE</DiscoverButton>
        </div>
      </div>

      <motion.div animate={{scale: 1.5}} initial={{scale: 1}} transition={{ repeat: Infinity, type: "tween", delay: 5, duration: [10] }} className="absolute top-0 left-0 h-full w-full">
        <img
          class="w-full h-full  object-cover"
          src={Image5}
          alt="Image 3"
        />
      </motion.div>
    </div>
  );
}
// class="image-carousel flex overflow-hidden"
export default HomeComponent1;
