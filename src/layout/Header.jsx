import React from 'react'
import { BiSolidDashboard } from "react-icons/bi";
import LOGIN from "../images/login.png"

const Header = ({showSidebar,setShowSidebar}) => {
  return (
    <div  className='fixed top-0 left-0 w-full py-5 px-2 lg:px-7 z-40 '>
        <div className='ml-0 lg:ml-[260px] rounded-md h-[65px] flex justify-between items-center bg-[#6BAFDB] px-5'>
          <div onClick={()=>setShowSidebar(!showSidebar)} className='w-[35px] flex lg:hidden h-[35px] transition-all rounded-sm  shadow-lg justify-center items-center'>
            <span><BiSolidDashboard/></span>
          </div>

          <div className='hidden md:block'>
              <input type="text" name='search' placeholder='search' className='px-3 py-2 outline-none border bg-[#F0F7FB] border-slate-200 rounded-md' />
          </div>

          <div className='flex justify-center items-center gap-8 relative'>
            <div className='flex justify-center items-center'>
              <div className='flex justify-center items-center gap-3'>
                  <div className='flex justify-center items-center flex-col text-end'>
                      <h2 className='text-md font-bold'>Akeremale</h2>
                      <span className='text-[14px] w-full font-normal'>Admin</span>
                  </div>
                 <img src={LOGIN} alt=""className='w-[45px] h-[45px] rounded-full'/>
              </div>
            </div>
            
          </div>    
        </div>
       
    </div>
  )
}

export default Header