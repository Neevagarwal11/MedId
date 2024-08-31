import React from 'react'
import img from '../assets/circle-fill.svg';
function Navbar() {
  return (
    <div className='parernt-navbar flex justify-around flex-row w-[98%] h-[10vh] fixed border-red-400  z-10 border-2 ml-4  mt-4 '>
        <div className='logo w-[20%] h-[100%] border-2 '></div>

        <div className='middle flex items-end justify-start border-2 w-[55%]'>
            {["About Us" ,"Procedures" , "Skincare" , "Reviews"].map(
                (items,index)=>( <a href="" className='font-light text-md text-md mr-6 hover:text-blue-400 font-[mona] '>{items}</a> )
            )}
        </div>

        <div className='right w-[20%] h-[100%] flex items-center  border-2 border-green-200'>
            <div className='button w-[50%] h-[60%] bg-[#FCFCFC] text-black border-2 rounded-full text-sm font-[600] flex items-center border-red-300 px-[0.6vw]'>Start program
            </div>
        </div>
    </div>
  )
}

export default Navbar