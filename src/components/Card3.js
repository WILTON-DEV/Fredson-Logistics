import { motion } from "framer-motion";

function Card3({name, tittle, text, image}) {
  return (
     <motion.div className=" h-[400px] w-[600px]" animate={{scale: 1}} initial={{scale: 1.5}} transiton={{ repeat: Infinity, type: "tween", delay: 5}}>
        <div className="  w-1/2 mx-[238px] mb-2">
          <p className="text-white text-[30px] font-extrabold">{name}</p>
          <p className="text-red-400 text-[20px]">{tittle}</p>
        </div>
        <div className="relative bg-[#eee9db] border-8 border-red-900 h-3/4 w-full rounded-2xl z-40">
          
          <div className="relative flex h-[20vh] items-center justify-between my-[-10vh] px-10  ">
            <div className=" w-[170px] h-[170px] rounded-full border-8 border-red-900 z-20">
              <img
                src={image}
                alt="image 3"
                className="object-cover h-full w-full rounded-full"
              />
            </div>
            <div className=" absolute left-[160px] top-[35px] w-[70px] h-[70px] mx[-350px] rounded-[35px] bg-[#eee9db] border-t-8 border-red-900">
            </div>

            <div className="flex items-center justify-center w-[70px] h-[70px]  bg-cyan-950 rounded-full">
              <p className="text-white font-bold text-[40px]">" "</p>
            </div>

          </div>
           <div className="absolute top-[15vh] left-11 right-11 text-[25px] text-gray-800">
                <p>{text}</p>
              </div>
        </div>
      </motion.div>
  )
}

export default Card3
