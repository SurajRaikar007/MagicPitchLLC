import React from 'react'

const NavSec = () => {
  return (
        <nav className='flex justify-between items-center h-[50px] mt-8 pl-10 pr-24'>
            <div className=''>
                <img src="https://framerusercontent.com/images/qmU7tgmwRQ3dXL9yHkp9GDxbrv0.svg" alt="" />
            </div>
            <div className='flex gap-9'>
                <h4>Product</h4>
                <h4>Compare</h4>
                <h4>Pricing</h4>
                <h4>Contact</h4>
            </div>
            <div className='flex gap-5 z-10'>
                <button className='bg-transparent w-[60px]  text-lg  border-2 rounded-2xl border-gray-900'>Login</button>
                <button className='bg-black w-[100px] text-white border-2 text-lg rounded-2xl border-gray-900'>Lets Talk</button>
            </div>
        </nav>
  )
}

export default NavSec