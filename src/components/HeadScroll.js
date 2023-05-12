

function HeadScroll() {
  return (
    <div className="flex  h-[10vh]  sticky top-0 left-0 z-[999] mt-2  px-4 text-white bg-[#06070E]">
      <div className="h-full w-1/4  flex items-center justify-center ">LOGO</div>
        <div className="flex justify-between w-3/4 h-full">
          <div className="flex items-center justify-evenly flex-1 rounded-tl-2xl ">
            <a className="hover:font-bold hover:cursor-pointer hover:text-white">
              Home
            </a>
            <a className="hover:font-bold hover:cursor-pointer hover:text-white">
              About
            </a>
            <a className="hover:font-bold hover:cursor-pointer hover:text-white">
              Services
            </a>
            <a className="hover:font-bold hover:cursor-pointer hover:text-white">
              Gallery
            </a>
          </div>
          <a className="flex items-center justify-center  h-full w-48 hover:text-red-950 hover:scale-110 transition delay-75  hover:cursor-pointer text-[30px] font-bold rounded-full ">
            Start
          </a>
        </div>
      </div>
  );
}

export default HeadScroll;
