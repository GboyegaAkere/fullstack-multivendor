import React, { useState } from 'react'
import { FaArrowsUpDown } from "react-icons/fa6";
import Pagination from '../Pagination';

const Orders = () => {
    const [currentPage, setCurentPage] = useState(1)
    const [search, setSearch] = useState("")
    const [parPage, setParPage] =useState(5)
    const [show, setShow] = useState(false)
  return (
    <div  className='px-2 lg:px-7 pt-5'>
      <div className='flex justify-between items-center'>
        <select onChange={(e)=>setParPage(parseInt(e.target.value))} className='px-4 py-2 focus:border-yellow-200 outline-none bg-green-300 border rounded-md text-black border-slate-700'>
            <option value="5">5</option>
            <option value="10">10</option>
            <option value="20">20</option>
        </select>

        <input type="text" placeholder='search' className='px-4 py-2 focus:border-blue-400 rounded-lg'/>
      </div>

      <div className='relative mt-5 overflow-x-auto'>
        <div className='w-full text-sm text-left text-black'>
            <div className='text-sm uppercase border-b border-slate-800'>
                <div className='flex justify-between items-center'>
                    <div className='py-3 w-[25%] font-bold'>Orders ID</div>
                    <div className='py-3 w-[25%] font-bold'>Price</div>
                    <div className='py-3 w-[25%] font-bold'>Payment Status</div>
                    <div className='py-3 w-[25%] font-bold'>Order Status</div>
                    <div className='py-3 w-[25%] font-bold'>Action</div>
                    <div className='py-3 w-[25%] font-bold'><FaArrowsUpDown /></div>
                </div>
            </div>

            <div className='text-blue-400'>
                <div className='flex justify-between items-start border-b border-slate-200'>
                    <div className='py-3 w-[25%] font-bold'>#45550</div>
                    <div className='py-3 w-[25%] font-bold'>$60</div>
                    <div className='py-3 w-[25%] font-bold'>Pending</div>
                    <div className='py-3 w-[25%] font-bold'>Pending</div>
                    <div className='py-3 w-[25%] font-bold'>View</div>
                    <div onClick={(e)=>setShow(!show)} className='py-3 w-[25%] font-bold'><FaArrowsUpDown /></div>
                </div>
            </div>
            <div className={show ? "block border-b border-black bg-slate-300":"hidden"}>
                    <div className='flex justify-between items-start border-b border-slate-200'>
                        <div className='py-3 w-[25%] font-bold'>#45550</div>
                        <div className='py-3 w-[25%] font-bold'>$60</div>
                        <div className='py-3 w-[25%] font-bold'>Pending</div>
                        <div className='py-3 w-[25%] font-bold'>Pending</div>
                        <div className='py-3 w-[25%] font-bold'>View</div>
                    </div>
            </div>


            <div className='text-blue-400'>
                <div className='flex justify-between items-start border-b border-slate-200'>
                    <div className='py-3 w-[25%] font-bold'>#45550</div>
                    <div className='py-3 w-[25%] font-bold'>$60</div>
                    <div className='py-3 w-[25%] font-bold'>Pending</div>
                    <div className='py-3 w-[25%] font-bold'>Pending</div>
                    <div className='py-3 w-[25%] font-bold'>View</div>
                    <div onClick={(e)=>setShow(!show)} className='py-3 w-[25%] font-bold'><FaArrowsUpDown /></div>
                </div>
            </div>
            <div className={show ? "block border-b border-black bg-slate-300":"hidden"}>
                    <div className='flex justify-between items-start border-b border-slate-200'>
                        <div className='py-3 w-[25%] font-bold'>#45550</div>
                        <div className='py-3 w-[25%] font-bold'>$60</div>
                        <div className='py-3 w-[25%] font-bold'>Pending</div>
                        <div className='py-3 w-[25%] font-bold'>Pending</div>
                        <div className='py-3 w-[25%] font-bold'>View</div>
                    </div>
            </div>


            <div className='text-blue-400'>
                <div className='flex justify-between items-start border-b border-slate-200'>
                    <div className='py-3 w-[25%] font-bold'>#45550</div>
                    <div className='py-3 w-[25%] font-bold'>$60</div>
                    <div className='py-3 w-[25%] font-bold'>Pending</div>
                    <div className='py-3 w-[25%] font-bold'>Pending</div>
                    <div className='py-3 w-[25%] font-bold'>View</div>
                    <div onClick={(e)=>setShow(!show)} className='py-3 w-[25%] font-bold'><FaArrowsUpDown /></div>
                </div>
            </div>
            <div className={show ? "block border-b border-black bg-slate-300":"hidden"}>
                    <div className='flex justify-between items-start border-b border-slate-200'>
                        <div className='py-3 w-[25%] font-bold'>#45550</div>
                        <div className='py-3 w-[25%] font-bold'>$60</div>
                        <div className='py-3 w-[25%] font-bold'>Pending</div>
                        <div className='py-3 w-[25%] font-bold'>Pending</div>
                        <div className='py-3 w-[25%] font-bold'>View</div>
                    </div>
            </div>


            <div className='text-blue-400'>
                <div className='flex justify-between items-start border-b border-slate-200'>
                    <div className='py-3 w-[25%] font-bold'>#45550</div>
                    <div className='py-3 w-[25%] font-bold'>$60</div>
                    <div className='py-3 w-[25%] font-bold'>Pending</div>
                    <div className='py-3 w-[25%] font-bold'>Pending</div>
                    <div className='py-3 w-[25%] font-bold'>View</div>
                    <div onClick={(e)=>setShow(!show)} className='py-3 w-[25%] font-bold'><FaArrowsUpDown /></div>
                </div>
            </div>
            <div className={show ? "block border-b border-black bg-slate-300":"hidden"}>
                    <div className='flex justify-between items-start border-b border-slate-200'>
                        <div className='py-3 w-[25%] font-bold'>#45550</div>
                        <div className='py-3 w-[25%] font-bold'>$60</div>
                        <div className='py-3 w-[25%] font-bold'>Pending</div>
                        <div className='py-3 w-[25%] font-bold'>Pending</div>
                        <div className='py-3 w-[25%] font-bold'>View</div>
                    </div>
            </div>


            <div className='text-blue-400'>
                <div className='flex justify-between items-start border-b border-slate-200'>
                    <div className='py-3 w-[25%] font-bold'>#45550</div>
                    <div className='py-3 w-[25%] font-bold'>$60</div>
                    <div className='py-3 w-[25%] font-bold'>Pending</div>
                    <div className='py-3 w-[25%] font-bold'>Pending</div>
                    <div className='py-3 w-[25%] font-bold'>View</div>
                    <div onClick={(e)=>setShow(!show)} className='py-3 w-[25%] font-bold'><FaArrowsUpDown /></div>
                </div>
            </div>
            <div className={show ? "block border-b border-black bg-slate-300":"hidden"}>
                    <div className='flex justify-between items-start border-b border-slate-200'>
                        <div className='py-3 w-[25%] font-bold'>#45550</div>
                        <div className='py-3 w-[25%] font-bold'>$60</div>
                        <div className='py-3 w-[25%] font-bold'>Pending</div>
                        <div className='py-3 w-[25%] font-bold'>Pending</div>
                        <div className='py-3 w-[25%] font-bold'>View</div>
                    </div>
            </div>


        </div>  
        <div className='w-full flex justify-end mt-4 bottom-4 left-4'>
          <Pagination pageNumber={currentPage} setPageNumber={setCurentPage} totalItem={50} parPage={parPage} showItem={3}/>
        </div> 
      </div>
      
    </div>
  )
}

export default Orders
