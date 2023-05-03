import Image7 from '../images/image7.jpg';
import DiscoverButton from './DiscoverButton';

function AboutHead() {
  return (
    <div className="relative h-[70vh] ">
      <div className="flex absolute top-0 left-0 items-center justify-center bg-gradient-to-r from-gray-950 bg-gray-950/60 h-full w-full z-10 ">
        <div className="w-1/2 h-1/2 px-[5vw] ">
          <p className="text-white font-bold text-[50px]">LET US TELL</p>
          <p className="text-white font-bold text-[50px]">YOU ABOUT US</p>
          <DiscoverButton>DISCOVER MORE</DiscoverButton>
        </div>
      </div>

      <div className="absolute top-0 left-0 h-full w-full">
        <img
          class="w-full h-full  object-cover"
          src={Image7}
          alt="Image 7"
        />
      </div>
    </div>
  );
}

export default AboutHead;
