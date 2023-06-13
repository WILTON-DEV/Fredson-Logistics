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
import Head from "./Head";
import Route from "./Route";
import Link from "./Link";
import NavigationContext from "../context/Navigation";
import { useContext, useReducer } from "react";
import {AiOutlineShoppingCart} from 'react-icons/ai';
import {CHART_STATUS } from "../constants/navigationStrings";

function CustomerComponent1() {
  const { GoodsDataApi, goodsInChart, dispatch, state } = useContext(NavigationContext);

  const handleChart = () => {
    return (
      dispatch({
        type: CHART_STATUS
      })
      );
  };


  return (
    <div className=" w-full flex flex-col justify-between mt-2  bg-slate-50">
      <Head />
      <div className=" h-[15vh] w-full p-6 flex items-center justify-end mb-4 ">
        <div className="h-full w-1/2 flex  ">
          <div className="h-full w-3/4  font-bold flex items-center justify-center rounded-3xl p-4 mx-4  shadow-md bg-white border-2 border-gray-400/30 ">
            <div className="h-full p-2 font-bold flex items-center justify-center  mx-2 rounded-l-2xl">
              Search
            </div>
            <input
              placeholder=" ---Search Results For ---"
              className="w-3/4"
            ></input>
          </div>
        </div>
        <div className=" w-1/2 h-full flex  justify-end">
         {state.chart? <button className={`h-full w-1/4 shadow-md bg-white backdrop-blur-md border-2 border-white/40  font-bold flex items-center justify-center rounded-3xl mx-2 hover:scale-110 hover:cursor-pointer `}>
            Order
          </button>: <div></div>}
            <button onClick={handleChart} className={`h-full w-1/4 shadow-md bg-white backdrop-blur-md border-2 border-white/40  font-bold flex items-center justify-evenly px-2 rounded-3xl mx-2 hover:scale-110  hover:cursor-pointer`}>
              <div className="w-[2vw] rounded-full bg-slate-400">{goodsInChart.length}</div>
             <div className="w-3/4 flex items-center justify-between px-2">
              <AiOutlineShoppingCart size={30}/>
            Chart
             </div>
          </button>
          
          
        </div>
      </div>
      <div className="shadow-md h-full w-full flex  ">
        <div className=" w-1/4 p-4 ">
          <div className="shadow-md h-[200px] w-full rounded-3xl mb-4 flex flex-col items-center justify-evenly p-4 bg-white border-2 backdrop-blur-md">
            <h4 className="font-bold text-xl">Price</h4>
            <input type={Range} className="shadow-md rounded-3xl" />
            <div className="flex items-center justify-between w-full">
              <p>0$</p>
              <p>90$</p>
            </div>
          </div>
          <div className="h-[400px] w-full  flex flex-col  justify-evenly px-4 py-2  bg-white  border-gray-400/30 rounded-3xl border-2 shadow-md">
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
        <div className="h-[100vh] w-[70vw] overflow-y-scroll rounded-3xl scrollbar-hide ">
          {state.chart ?
          
            
             <div className="w-full grid grid-cols-1 mx-[10vw] mt-4 ">
              {goodsInChart.map((selectedGood, index) => (
                <SelectedGoods key={selectedGood.id} selectedGood={selectedGood}  index={index}/>
              ))}
            </div>
          
          :
          <div className="w-full h-full grid gap-4 grid-cols-3">
              {GoodsDataApi.map((chartGood) => (
                <AddChartCard key={chartGood.id} name={chartGood.name} price={chartGood.price} image={chartGood.image} />
              ))}
            </div>
          }
          
        </div>
      </div>
    </div>
  );
}

export default CustomerComponent1;
