import React, { useState } from 'react';
import Search from '../components/Search';
import { FaArrowsUpDown, FaImage, } from "react-icons/fa6";
import { FiEdit } from "react-icons/fi";
import Pagination from '../Pagination';
import LOGIN from "../../../src/images/login.png"
import { Link } from 'react-router-dom';
import { MdDelete } from "react-icons/md";
import { IoMdCloseCircle } from 'react-icons/io';


const Products = () => {
    const [currentPage, setCurentPage] = useState(1)
    const [search, setSearch] = useState("")
    const [parPage, setParPage] =useState(5)

    return (
        <div className='px-2 lg:px-7 pt-5'>
            <h1 className='font-semibold text-lg mb-3'>All Products</h1>  
            <div className='w-full p-4 bg-green-400 rounded-md'>
              <Search setSearch={setSearch} search={search} setParPage={setParPage}/>
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
                        <td  className='py-3 px-4 whitespace-nowrap'>{d}</td>
                        <td  className='py-3 px-4 whitespace-nowrap'><img src={LOGIN} alt=""className='w-[45px] h-[45px] rounded-full'/></td>
                        <td className='py-3 px-4 whitespace-nowrap'>T-shirt</td>
                        
                            <td  className='py-3 px-4 whitespace-nowrap '>
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
    );
};

export default Products;