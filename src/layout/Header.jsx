import React from 'react'
import { BiSolidDashboard } from "react-icons/bi";

const Header = ({showSidebar,setShowSidebar}) => {
  return (
    <div  className='fixed top-0 left-0 w-full py-5 px-2 lg:px-7 z-10 '>
        <div className='ml-0 lg:ml-[260px] rounded-md h-[65px] flex justify-between items-center bg-slate-400'>
          <div onClick={()=>setShowSidebar(!showSidebar)} className='w-[35px] flex lg:hidden h-[35px] transition-all rounded-sm bg-black shadow-lg justify-center items-center'>
            <span><BiSolidDashboard/></span>
          </div>
        </div>
       
    </div>
  )
}

export default Header