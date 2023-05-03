import React from 'react'

function Card4({name, tittle, text, image}) {
  return (
    <div className="h-full w-[20vw] flex flex-col items-center justify-center">
        <div className="w-[20vh] h-[20vh] bg-green-500 rounded-full mb-6">
          <img src={image} alt="image" className="h-full w-full object-cover rounded-full" />
        </div>
        <div className="h-[10vh] w-[10vh] bg-white  rotate-45  mb-[-35px] border-t-4 border-l-4  z-50 border-[#eee9db] "></div>
        <div className="bg-white relative  h-[50vh] w-[20vw] flex flex-col items-center  justify-between border-4 rounded-2xl border-[#eee9db] px-2">
          <p className="my-8 text-gray-500">{text}</p>
          <h4 className='text-[20px] font-extrabold'>{name}</h4>
          <p className='text-cyan-400'>{tittle}</p>
          <div className="flex items-center justify-between w-1/2 h-8 bg-red-950 rounded-full mb-[-23px] text-[25px] text-white px-4 ">
            <div>*</div>
            <div>*</div>
            <div>*</div>
            <div>*</div>
            <div>*</div>
          </div>
        </div>
      </div>
  )
}

export default Card4
