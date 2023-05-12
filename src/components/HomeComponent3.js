import Card1 from "./Card1";

function HomeComponent3() {
  return (
    <div className=" p-4 my-2 text-white flex flex-col justify-between h-[130vh]">
      <div className="flex flex-col items-center justify-center text-center">
        <p>Help & donate us now</p>
        <p className="text-[50px] w-1/2 font-bold mb-4 ">Find the popular cause and donate them</p>
      </div>
      <div className="flex items-center justify-between h-full">
        <Card1 />
        <Card1 />
        <Card1 />
      </div>
    </div>
  );
}

export default HomeComponent3;
