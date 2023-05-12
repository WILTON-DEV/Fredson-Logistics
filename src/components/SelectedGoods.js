import React from 'react'
import Image8 from '../images/image8.jpg';
import {AiOutlineStar} from 'react-icons/ai';

function SelectedGoods({name, price, image}) {
  return (
    <div className='h-[25vh] w-3/4 shadow-md rounded-3xl flex bg-white text-xl mb-2'>
      <div className='h-full w-1/2 bg-slate-600 rounded-l-3xl'>
        <img src={image} alt='image8' className='w-full h-full object-cover rounded-l-3xl'/>
      </div>
      <div className=' h-full w-full py-4 px-8 flex'>
        <div className='h-full w-full flex flex-col items-center justify-evenly'>
          <div className=' flex text-3xl'>
             <AiOutlineStar />
                <AiOutlineStar />
                <AiOutlineStar />
                <AiOutlineStar />
                <AiOutlineStar />
          </div>
          <p className='text-gray-900 font-bold'>{name}</p>
          <p className='text-gray-400'>{price}</p>
        </div>
        <div className='w-full h-full flex items-center justify-end'>
          <button className='h-[6vh] w-[6vh] flex items-center justify-center text-white bg-red-950 p-4 rounded-full'>---</button>
        </div>
      </div>
    </div>
  )
}

export default SelectedGoods
