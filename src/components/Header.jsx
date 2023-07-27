import React from 'react'
import logo from '../logo.png'
 const Header=()=> {
  return (
    <div className='w-full h-20  bg-white  dark:bg-gray-900 shadow-lg shadow-slate-100/90 dark:shadow-black/10'>
        <div className='max-w-7xl h-20 items-center  mx-auto flex justify-between'>
              <div className=''>
                  <img src={logo} alt="logo" className='w-24'/>
              </div>
              <ul className='flex gap-10 text-lg tracking-wider'>
                 <li>Search</li>
                 <li>Offers</li>
                 <li>Help</li>
                 <li>Sign In</li>
                 <li>Cart</li>
              </ul>
        </div>
    </div>
  )
}
export default Header