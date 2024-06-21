import React, { useState } from 'react'
import { FaArrowsUpDown, } from "react-icons/fa6";
import { FiEdit } from "react-icons/fi";
import Pagination from '../Pagination';
import LOGIN from "../../../src/images/login.png"
import { Link } from 'react-router-dom';
import { MdDelete } from "react-icons/md";


const Category = () => {
    const [parPage, setParPage] = useState(5)
  return (
    <div className='px-2 lg:px-7 pt-5'>
        <div className='flex flex-wrap w-full'>
            <div className='w-full lg:w-7/12'>
                <div className='w-full p-4 bg-[#6BAFDB] rounded-md'>
                    <div className='flex justify-between items-center'>
                        <select onChange={(e)=>setParPage(parseInt(e.target.value))} className='px-4 py-2 focus:border-yellow-200 outline-none bg-green-300 border rounded-md text-black border-slate-700'>
                            <option value="5">5</option>
                            <option value="10">10</option>
                            <option value="20">20</option>
                        </select>

                        <input type="text" placeholder='search' className='px-4 py-2 focus:border-blue-400 rounded-lg'/>
                    </div>
                    <div className='relative overflow-x-auto'>
          <table className='w-full text-sm text-black uppercase border-b border-slate-950 text-left'>
            <thead>
              <tr>
                <th className='py-3 px-4' scope='col'>No</th>
                <th className='py-3 px-4' scope='col'>Image</th>
                <th className='py-3 px-4' scope='col'>Name</th>
                <th className='py-3 px-4' scope='col'>Action</th>
              </tr>
            </thead>
            <tbody>
              {
                [1,2,3,4,5].map((d,i)=>{
                  return(
                    <tr key={i}>
                        <td scope='row' className='py-3 px-4 whitespace-nowrap'>{d}</td>
                        <td scope='row' className='py-3 px-4 whitespace-nowrap'><img src={LOGIN} alt=""className='w-[45px] h-[45px] rounded-full'/></td>
                        <td scope='row' className='py-3 px-4 whitespace-nowrap'>T-shirt</td>
                        
                            <td scope='row' className='py-3 px-4 whitespace-nowrap '>
                                <div className='flex justify-start gap-3 items-center'>
                                    <Link>< FiEdit/></Link>
                                    <Link>< MdDelete/></Link>
                                </div>
                            </td>
                    </tr>
                  )
                })
              }
            </tbody>
          </table>
        </div>
                </div>
            </div>

            <div className='w-full lg:w-5/12'>
                <div className='w-full p-4 bg-red-400 rounded-md'>

                </div>
            </div>
        </div>
    </div>
  )
}

export default Category