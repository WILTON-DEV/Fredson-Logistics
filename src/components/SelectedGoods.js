import React from "react";
// import Image8 from '../images/image8.jpg';
import { AiOutlineStar } from "react-icons/ai";
import NavigationContext from "../context/Navigation";
import { useContext } from "react";

function SelectedGoods({ selectedGood, index }) {
  const { goodsInChart, setGoodsInChart } = useContext(NavigationContext);
  const handleDelete = (index) => {
    setGoodsInChart([
      ...goodsInChart.slice(0, index),
      ...goodsInChart.slice(index + 1, goodsInChart.length),
    ]);
  };
  return (
    <div className="h-[20vh] w-3/4 shadow-md rounded-3xl flex  text-xl mb-2  border-2  backdrop-blur-md ">
      <div className="h-full w-1/2  rounded-l-3xl">
        <img
          src={selectedGood.image}
          alt="image8"
          className="w-full h-full object-cover rounded-l-3xl"
        />
      </div>
      <div className=" h-full w-full py-4 px-8 flex bg-white/30 backdrop-blur-md">
        <div className="h-full w-full flex flex-col items-center justify-evenly">
          <div className=" flex text-3xl">
            <AiOutlineStar />
            <AiOutlineStar />
            <AiOutlineStar />
            <AiOutlineStar />
            <AiOutlineStar />
          </div>
          <p className="text-gray-900 font-bold">{selectedGood.name}</p>
          <p className="text-gray-400">{selectedGood.price}</p>
        </div>
        <div className="w-full h-full flex items-center justify-end">
          <button
            onClick={() => handleDelete(index)}
            className="h-[6vh] w-[6vh] flex items-center justify-center text-white bg-[#be2117] p-4 rounded-full"
          >
            ---
          </button>
        </div>
      </div>
    </div>
  );
}

export default SelectedGoods;
