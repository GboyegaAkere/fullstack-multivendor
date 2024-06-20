import React from 'react'
import { IoMdArrowRoundBack } from "react-icons/io";
import { IoMdArrowRoundForward } from "react-icons/io";

const Pagination = ({pageNumber, setPageNumber, totalItem, parPage, showItem}) => {
  let totalPage = Math.ceil(totalItem/parPage)
  let startPage = pageNumber
  let dif = totalPage - pageNumber
  if (dif <= showItem) {
    startPage = totalPage - showItem
  }
  let endPage = startPage < 0 ? showItem : showItem + startPage
  if (startPage <= 0) {
    startPage = 1
  }

  const createBtn = ()=>{
        const btns = []
        for (let i = startPage; i < endPage; i++) {
            btns.push(
                <li onClick={()=>setPageNumber(i)} className={`${pageNumber === i ? "bg-indigo-400" : "bg-black shadow-lg text-white"} w-[35px] h-[35px] flex justify-center items-center rounded-full cursor-pointer`}>
                 {i}
                </li>
            )
        }
        return btns
  }
  return (
    <ul  className='flex gap-3'>
        {
            pageNumber > 1 && <li onClick={()=>setPageNumber(pageNumber-1)} className='w-[33px] h-[33px] rounded-full flex justify-center items-center bg-green-400 cursor-pointer'>
                < IoMdArrowRoundBack/>
            </li>
        }
        {
            createBtn()
        }
         {
            pageNumber < totalPage && <li onClick={()=>setPageNumber(pageNumber + 1)} className='w-[33px] h-[33px] rounded-full flex justify-center items-center bg-green-400 cursor-pointer'>
                <IoMdArrowRoundForward/>
            </li>
        }
    </ul>
  )


}

export default Pagination
