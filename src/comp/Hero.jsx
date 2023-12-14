import React from 'react'

const Hero = () => {
  return (
    <div className='flex '>
            <div className='w-[50%]  flex flex-col ml-16'>
                <button className='bg-transparent w-[200px]  text-lg  border-2 rounded-2xl border-gray-900 relative top-[140px] left-[50px]'>Financial Management</button>
                <h1 className='text-[90px] mt-[180px] pl-11 font-semibold text-start'>A simpler,<br /> smarter basic <br/> credit <span className=' text-transparent bg-clip-text bg-gradient-to-r from-pink-400 to-blue-700'>card.</span></h1>
                <h4 className='pl-11'>Your powerful companion on the road to financial success!   <br />Explore personal budget management, investment opportunities.</h4>
                <button className='bg-black w-[100px] text-white border-2 text-lg rounded-2xl border-gray-900 ml-11 mt-5'>App Store </button>
            </div>
            <div>
              <div className='w-[500px] h-[700px] bg-gradient-to-t from-green-400  to-blue-400 absolute top-[30px] right-[80px] rounded-2xl'>   </div>
        <img className='w-[400px] h-[600px] absolute right-[290px] top-[20%]' src="https://framerusercontent.com/images/1JFj3FwlaG94oqSBTQUOdyY6nHA.png?scale-down-to=1024" alt="" />
    </div>
    </div>
  )
}

export default Hero