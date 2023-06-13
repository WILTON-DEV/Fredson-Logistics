
import DiscoverButton from "./DiscoverButton";
import { motion } from "framer-motion";
import Head from "./Head";
import Link from "./Link";


function HomeComponent1({image, text}) {
 
  return (
    <div className="relative h-[100vh]  mt-0 ">
      <Head/>
      <div className="flex absolute top-0 left-0  justify-center  bg-[#06070E]/90 backdrop-blur-sm h-full w-full z-10">
        <div className="w-1/2 h-full px-[5vw] font-head flex items-center justify-center flex-col ">
          <p className="text-white font-bold text-[50px] text-center">{text}</p>
          
          <DiscoverButton className='text-xl font-extrabold'>
            <Link to='/customer'>START</Link>
          </DiscoverButton>
        </div>
      </div>

      <motion.div animate={{ scaleX: 1.3}} initial={{scale: 1}} transition={{ repeat: Infinity, type: "tween", delay: [5], duration: [10] }} className="absolute top-0 left-0 h-full w-full ">
        <img
          class="w-full h-full  object-cover z-0"
          src={image}
          alt="Image 3"
        />
      </motion.div>
    </div>
  );
}
// class="image-carousel flex overflow-hidden"
export default HomeComponent1;
