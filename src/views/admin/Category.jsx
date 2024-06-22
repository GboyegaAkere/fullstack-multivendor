import React, { useState } from 'react'
import { FaArrowsUpDown, FaImage, } from "react-icons/fa6";
import { FiEdit } from "react-icons/fi";
import Pagination from '../Pagination';
import LOGIN from "../../../src/images/login.png"
import { Link } from 'react-router-dom';
import { MdDelete } from "react-icons/md";
import { IoMdCloseCircle } from 'react-icons/io';


const Category = () => {
    const [currentPage, setCurentPage] = useState(1)
    const [search, setSearch] = useState("")
    const [parPage, setParPage] =useState(5)
    const [show, setShow] = useState(false)
  return (
    <div className='px-2 lg:px-7 pt-5'>

      <div className='flex lg:hidden justify-between items-center mb-5 p-4 bg-green-300 rounded-md'>
        <h1 className='font-semibold text-lg'>Category</h1>
        <button onClick={()=>setShow(true)} className='bg-red-500 px-4 py-2 cursor-pointer rounded-sm text-sm'>Add</button>
      </div>

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
        <div className='w-full flex justify-end mt-4 bottom-4 left-4'>
          <Pagination pageNumber={currentPage} setPageNumber={setCurentPage} totalItem={50} parPage={parPage} showItem={3}/>
        </div> 
                </div>
            </div>
            <div className={`w-[320px] lg:w-5/12  translate-x-100  lg:relative lg:right-0 fixed ${show ? "right-0": "-right-[340px]"} z-[9999] top-0 transition-all duration-500`}>
                <div className='w-full pl-5'>
                  <div className='bg-[#6BAFDB] h-screen lg:h-auto px-3 py-2 lg:rounded-md '>
                    <div className='flex justify-between items-center mb-4'>
                      <h1 className='text-black font-semibold text-xl mb-4 w-full text-center'>Add Category</h1>
                      <div onClick={()=>setShow(false)} className='block lg:hidden'>
                          <IoMdCloseCircle/>
                      </div>
                    </div>
                    <form>
                      <div className='flex flex-col w-full gap-1 mb-3'>
                            <label htmlFor='name'>Category Name</label>
                            <input className='px-4 py-2 focus:border-indigo-500 outline-none bg-[#ebecec] border border-slate-500 rounded-md' type="text" id='name' name='cstegory_name' placeholder='category'/>
                      </div>
                      <div>
                        <label className='flex justify-center 
                        items-center flex-col h-[238px] cursor-pointer border border-dashed hover:border-indigo-400 w-full border-yellow-300' htmlFor='image'>
                          <span><FaImage/></span>
                          <span>Select Image</span>
                        </label>
                        <input className='hidden' type="file" name='image' id='image' />
                        <div>
                          <button className='bg-[#F0F7FB] w-full px-7 py-2 my-2 rounded-md hover:shadow-sm text-[#6BAFDB]'>Add Category</button>
                        </div>
                      </div>
                    </form>
                  </div>
                </div>
            </div>
           
        </div>
    </div>
  )
}

export default Category