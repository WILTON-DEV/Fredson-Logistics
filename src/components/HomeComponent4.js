import Image6 from "../images/image6.jpg";
import DiscoverButton from "./DiscoverButton";

function HomeComponent4() {
  return (
    <div className="relative h-[600px] bg-cyan-600 ">
      <div className="absolute top-0 left-0 bg-red-900 h-full w-full ">
        <img
          src={Image6}
          className="object-cover h-full w-full"
          alt="image 4"
        />
      </div>
      <div className="absolute flex flex-col items-center justify-center  font-bold text-white  bg-gray-950/90 top-0 left-0 h-full w-full px-[300px] z-10">
        <p className="text-red-400 mb-2">Become a Volunteers</p>
        <p className="mb-2 text-[50px] text-center">
          Join your hand with us for a better life and future
        </p>
        <DiscoverButton className="my-4">DISCOVER MORE</DiscoverButton>
      </div>
    </div>
  );
}

export default HomeComponent4;
