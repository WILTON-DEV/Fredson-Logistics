import {AiOutlineStar} from 'react-icons/ai';



function AddChartCard({image, name, price}) {
 
  return (
    <div className=" shadow-md h-[60vh] w-1/4 rounded-3xl border-2 m-2 bg-white">
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
              <button className="flex items-center justify-center bg-cyan-950  rounded-2xl p-2 text-white text-[10px] font-bold">ADD TO CHART</button>
            </div>
          </div>
  )
}

export default AddChartCard
