import {AiOutlineStar} from 'react-icons/ai';
import NavigationContext from '../context/Navigation';
import { useContext } from 'react';
import {AiOutlineShoppingCart} from 'react-icons/ai';



function AddChartCard({image, name, price}) {
 const { setGoodsInChart } = useContext(NavigationContext);
 const handleAddChart = ()=>{
  return(
    setGoodsInChart(oldArray => [...oldArray, {image, name, price}])
  )
 };
  return (
    <div className=" shadow-md h-[60vh]  rounded-3xl border-2 m-2 bg-white">
            <div className=" w-full h-[35vh] rounded-t-3xl">
              <img src={image} alt='boss chair image ' className="h-full w-full object-cover rounded-t-3xl shadow-md"/>
            </div>
            <div className="flex flex-col items-center justify-between  p-4">
              <div className="flex items-center justify-between">
                <AiOutlineStar />
                <AiOutlineStar />
                <AiOutlineStar />
                <AiOutlineStar />
                <AiOutlineStar />
              </div>
              <p className="font-bold text-xl">{name}</p>
              <p className="text-gray-400 mb-2">{price}</p>
              <button onClick={handleAddChart} className="flex items-center justify-center   rounded-2xl p-2 border-2 border-gray-400/30 font-bold backdrop-blur-md hover:scale-110 hover:border-[#be2117]">
                <AiOutlineShoppingCart size={20} />
                <p className='text-[10px] px-1'>ADD TO CHART</p>
                </button>
            </div>
          </div>
  )
}

export default AddChartCard
