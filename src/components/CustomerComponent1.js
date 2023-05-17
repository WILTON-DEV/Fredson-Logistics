import React from "react";
import SelectedGoods from "./SelectedGoods";
import Image8 from "../images/image8.jpg";
import Image7 from "../images/image7.jpg";
import Image6 from "../images/image6.jpg";
import Image5 from "../images/image5.jpg";
import Image4 from "../images/image4.jpg";
import Image3 from "../images/image3.jpg";
import Image2 from "../images/image2.jpg";
import Image1 from "../images/image1.jpg";
import AddChartCard from "./AddChartCard";

function CustomerComponent1() {
  const GoodsData = [
    {
      name: "Boss Chair",
      price: "90.33$",
      image: Image2,
    },
    {
      name: "Office Table",
      price: "60.33$",
      image: Image3,
    },
    {
      name: "T-Shirt",
      price: "20.33$",
      image: Image4,
    },
    {
      name: "T-Shirt",
      price: "20.33$",
      image: Image4,
    },
    {
      name: "T-Shirt",
      price: "20.33$",
      image: Image4,
    },
    {
      name: "T-Shirt",
      price: "20.33$",
      image: Image4,
    },
    {
      name: "T-Shirt",
      price: "20.33$",
      image: Image4,
    },
    {
      name: "T-Shirt",
      price: "20.33$",
      image: Image4,
    },
  ];
  return (
    <div className=" w-full flex flex-col justify-between mt-2  bg-gray-600/90">
      <div className=" h-[15vh] w-full p-4 flex items-center mb-4">
        <div className="h-full w-1/2 bg-red-400 flex justify-between">
          <div className="h-full w-1/2 bg-cyan-950 text-white font-bold flex items-center justify-center rounded-3xl">
            Search
          </div>
          <div className="h-full w-1/2 bg-white  font-bold flex items-center justify-center rounded-3xl mx-4">
            ---------Search Results For -------
          </div>
        </div>
        <div className="bg-gray-400 w-1/2 h-full flex justify-end">
          <div className="h-full w-1/4 bg-cyan-950 text-white font-bold flex items-center justify-center rounded-3xl"></div>
          <div className="h-full w-1/4 bg-[#be2117] text-white font-bold flex items-center justify-center rounded-3xl"></div>
        </div>
      </div>
      <div className="shadow-md h-full w-full flex  ">
        <div className=" w-1/4 p-4 ">
          <div className="shadow-md h-[200px] w-full rounded-3xl mb-4 flex flex-col items-center justify-evenly p-4 bg-white">
            <h4 className="font-bold text-xl">Price</h4>
            <input type={Range} className="shadow-md" />
            <div className="flex items-center justify-between w-full">
              <p>0$</p>
              <p>90$</p>
            </div>
          </div>
          <div className=" shadow-md h-[400px] w-full rounded-3xl flex flex-col  justify-evenly px-4 py-2 bg-white">
            <h4 className="mb-2 font-bold text-xl">Categories</h4>
            <div>
              <a>Clothing</a>
            </div>
            <div>
              <a>Electronics</a>
            </div>
            <div>
              <a>Construction</a>
            </div>
            <div>
              <a>Medics</a>
            </div>
          </div>
        </div>
        <div className="h-[100vh] w-[70vw]  bg-[#EEF0F2] overflow-y-scroll rounded-3xl shadow-md ">
          {/* <div className="w-full h-full flex flex-wrap justify-between">{GoodsData.map(({name, price, image})=>(
            <AddChartCard name={name} price={price} image={image} />
          ))}</div> */}

          <div className="w-full flex flex-col items-center justify-center mt-4">
            {GoodsData.map(({ name, price, image }) => (
              <SelectedGoods name={name} price={price} image={image} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default CustomerComponent1;
