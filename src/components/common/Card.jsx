import React from 'react'

const Card = ({imgUrl,resName,avgRating,cuisines,areaName}) => {
  return (
    <div className=' cursor-pointer transform transition duration-100 hover:scale-95'>
        <div className=' '>
            <img src={`https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_850,h_504/${imgUrl}`} className='w-[300px] h-[200px] object-cover rounded-2xl' />
        </div>
        
        <div className='ml-2 mt-2 text-slate-900 text-lg font-black truncate'>
            {resName}
        </div>
        <div className='ml-2'>{avgRating}</div>
        <div className='ml-2 text-slate-500 truncate'>{cuisines.join(",")}</div>
        <div></div>
    </div>
  )
}

export default Card