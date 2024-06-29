import React, { useEffect, useState } from 'react'
import { Link, useLocation } from 'react-router-dom'
import LOGIN from "../images/login.png"
import { getNav } from '../navigation/index'



const Sidebar = ({showSidebar,setShowSidebar}) => {
  const {pathname} = useLocation()

  const [allNav, setAllNav] = useState([])
  useEffect(()=>{
      const navs = getNav("seller")
      setAllNav(navs)
  },[])


  return (
    <div>
      <div onClick={()=>setShowSidebar(false)} 
      className={`fixed duration-200 ${!showSidebar ? "invisible" : "visible"} w-screen h-screen bg-red-900 bg-transparent top-0 left-0 z-10`}>

      </div>

      <div className={`w-[260px] fixed bg-[#F0F7FB] z-50 top-0 h-screen transition-all ${showSidebar ? "left-0":"-left-[260px] lg:left-0"}`}>
        <div className='h-[70px] flex justify-center items-center'>
          <Link to="/">
            {/* <img src={LOGIN} alt=""className='w-[180px] h-[50px]'/> */}
            <span>LOGO</span>
          </Link>
        </div>

        <div className='px-[16px]'>
              <ul>
                {
                  allNav.map((n,i)=>{
                    return <li key={i}>
                      <Link to={n.path} className={`${pathname === n.path ? "bg-[#6BAFDB] shadow-indigo-500/50 text-white duration-500":"text-black font-bold duration-200"} flex items-center justify-start gap-[12px] hover:pl-4 w-full mb-1 px-12px py-[9px] rounded-sm pl-[15px]`}>
                        <span>{n.icon}</span>
                        <span>{n.title}</span>
                      </Link>
                    </li>
                  })
                }
                <li>
                  <button className="bg-blue-300 shadow-indigo-500/50  text-black font-bold duration-200  flex items-center justify-start gap-[12px] hover:pl-4 w-full mb-1 px-12px py-[9px] rounded-sm pl-[15px]">Logout</button>
                </li>
              </ul>
          </div>
       
      </div>




    </div>
  )
}

export default Sidebar