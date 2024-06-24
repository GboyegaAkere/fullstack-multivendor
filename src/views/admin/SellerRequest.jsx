import React, { useState } from 'react'
import { FaArrowsUpDown, FaEye, FaImage, } from "react-icons/fa6";
import { FiEdit } from "react-icons/fi";
import Pagination from '../Pagination';
import LOGIN from "../../../src/images/login.png"
import { Link } from 'react-router-dom';
import { MdDelete } from "react-icons/md";
import { IoMdCloseCircle } from 'react-icons/io';

const SellerRequest = () => {
    const [currentPage, setCurentPage] = useState(1)
    const [search, setSearch] = useState("")
    const [parPage, setParPage] =useState(5)
    const [show, setShow] = useState(false)
  return (
    <div className='px-2 lg:px-7 pt-5'>
        <h1 className='text-[20px] font-bold mt-3'>Deactive Seller</h1>
      <div className='w-full p-4 bg-[#6BAFDB]  rounded-md'>
            <div className='flex justify-between items-center'>
                <select onChange={(e)=>setParPage(parseInt(e.target.value))} className='px-4 py-2 focus:border-yellow-200 outline-none bg-[#F0F7FB] border rounded-md text-black border-slate-700'>
                    <option value="5">5</option>
                    <option value="10">10</option>
                    <option value="20">20</option>
                </select>

                <input type="text" placeholder='search' className='px-4 py-2 bg-[#F0F7FB] focus:border-blue-400 rounded-lg'/>
            </div>

            <div className='relative overflow-x-auto'>
          <table className='w-full text-sm text-black border-b border-slate-950 text-left'>
            <thead>
              <tr>
                <th className='py-3 px-4' scope='col'>No</th>
                <th className='py-3 px-4' scope='col'>Name</th>
                <th className='py-3 px-4' scope='col'>Email</th>
                <th className='py-3 px-4' scope='col'>Payment Status</th>
                <th className='py-3 px-4' scope='col'>Status</th>                                                                                                                           
                <th className='py-3 px-4' scope='col'>Action</th>
              </tr>
            </thead>
            <tbody>
              {
                [1,2,3,4,5].map((d,i)=>{
                  return(
                    <tr key={i}>
                        <td  className='py-3 px-4 whitespace-nowrap'>{d}</td>
                        <td  className='py-3 px-4 whitespace-nowrap'>Gboyega</td>
                        <td  className='py-3 px-4 whitespace-nowrap'>akeremaleOluwagboyega@gmail.com</td>
                        <td  className='py-3 px-4 whitespace-nowrap'>Inactive</td>
                        <td  className='py-3 px-4 whitespace-nowrap'>Pending</td>

                        <td  className='py-3 px-4 whitespace-nowrap'><FaEye/></td>
                    </tr>
                  )
                })
              }
            </tbody>
          </table>
        </div>
        <div className='w-full flex justify-end mt-4 bottom-4 left-4'>
          <Pagination pageNumber={currentPage} setPageNumber={setCurentPage} totalItem={50} parPage={parPage} showItem={3}/>
        </div> 
      </div>
    </div>
  )
}

export default SellerRequest
