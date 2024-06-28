import React, { useState } from 'react'
import { IoMdClose } from 'react-icons/io'
import LOGIN from "../../../src/images/login.png"
import { FaList } from 'react-icons/fa6'

const ChatSeller = () => {
    const [show, setShow] = useState(false)
    const sellerId = 65
  return (
    <div className='px-2 lg:px-7 py-5'>
      <div className='w-full bg-slate-400 px-4 py-4 rounded-md h-[calc(100vh-40px)]'>
        <div className='flex w-full h-full relative'>
            <div className={`w-[280px] h-full absolute z-10 ${show ? "-left-[16px]" :"-left-[336px]"} md:left-0 md:relative transition-all`}>
                <div className='w-full h-[calc(100vh-177px)] bg-slate-600 md:bg-transparent overflow-y-auto'>
                    <div className='flex text-xl justify-between items-center p-4 md:p-0 md:pb-3'>
                      <h2>Sellers</h2>
                     <span onClick={()=> setShow(!show)} className='block cursor-pointer md:hidden'><IoMdClose/></span>
                    </div>

                    <div className={`h-[60px] flex justify-start gap-2 items-center px-2 py-2 cursor-pointer bg-gray-500 rounded-md`}>
                        <div className='relative '>
                            <img className='w-[38px] h-[38px] border border-white  max-w-[38px] p-[2px] rounded-full' src={LOGIN} alt="" />
                            <div className='w-[10px] h-[10px] bg-[green] rounded-full absolute right-0 bottom-0'></div>
                        </div>
                        <div className='flex justify-center items-center flex-col w-full'>
                                <div className='flex justify-between items-center w-full'>
                                    <h2 className='text-base font-semibold'>Gboyega Akere</h2>
                                </div>
                            </div>
                    </div>

                    <div className={`h-[60px] flex justify-start gap-2 items-center px-2 py-2 rounded-sm cursor-pointer`}>
                        <div className='relative '>
                            <img className='w-[38px] h-[38px] border border-white  max-w-[38px] p-[2px] rounded-full' src={LOGIN} alt="" />
                            <div className='w-[10px] h-[10px] bg-[green] rounded-full absolute right-0 bottom-0'></div>
                        </div>
                        <div className='flex justify-center items-center flex-col w-full'>
                                <div className='flex justify-between items-center w-full'>
                                    <h2 className='text-base font-semibold'>Gboyega Akere</h2>
                                </div>
                            </div>
                    </div>

                    <div className={`h-[60px] flex justify-start gap-2 items-center px-2 py-2 rounded-sm cursor-pointer`}>
                        <div className='relative '>
                            <img className='w-[38px] h-[38px] border border-white  max-w-[38px] p-[2px] rounded-full' src={LOGIN} alt="" />
                            <div className='w-[10px] h-[10px] bg-[green] rounded-full absolute right-0 bottom-0'></div>
                        </div>
                        <div className='flex justify-center items-center flex-col w-full'>
                                <div className='flex justify-between items-center w-full'>
                                    <h2 className='text-base font-semibold'>Gboyega Akere</h2>
                                </div>
                            </div>
                    </div>

                    <div className={`h-[60px] flex justify-start gap-2 items-center px-2 py-2 rounded-sm cursor-pointer`}>
                        <div className='relative '>
                            <img className='w-[38px] h-[38px] border border-white  max-w-[38px] p-[2px] rounded-full' src={LOGIN} alt="" />
                            <div className='w-[10px] h-[10px] bg-[green] rounded-full absolute right-0 bottom-0'></div>
                        </div>
                        <div className='flex justify-center items-center flex-col w-full'>
                                <div className='flex justify-between items-center w-full'>
                                    <h2 className='text-base font-semibold'>Gboyega Akere</h2>
                                </div>
                            </div>
                    </div>
                </div>
            </div>

            <div className='w-full md:w-[calc(100%-200px)] md:pl-4'>
                <div className='flex justify-between items-center'>
                    {
                        sellerId && <div className='flex justify-start items-center gap-3'>
                            <div className='relative'>
                                <img className='w-[45px] h-[45px] border border-green-500  max-w-[45px] p-[2px] rounded-full' src={LOGIN} alt="" />
                                <div className='w-[10px] h-[10px] bg-[green] rounded-full absolute right-0 bottom-0'></div>
                            </div>
                        </div>
                    }

                    <div onClick={()=>setShow(!show)} className='w-[35px] flex md:hidden h-[35px] rounded-sm bg-blue-400 shadow-lg justify-center cursor-pointer items-center text-white'>
                        <span><FaList/></span>
                    </div>
                </div>

                <div className='py-4'>
                    <div className='bg-gray-100 h-[calc(100vh-290px)] rounded-md p-3 overflow-y-auto'>
                        <div className='w-full flex justify-start items-center'>
                            <div className='flex justify-start items-start gap-2 md:px-3 py-2 max-w-full lg:max-w-[85%  ]'>
                                <div>
                                    <img className='rounded-full w-[38px] h-[38px] bottom-2 border-white max-w-[38px] p-[3px] ' src={LOGIN} alt="" />
                                </div>
                                <div className='flex justify-center items-start flex-col w-full bg-blue-500 shadow-lg shadow-blue-500/50 text-white py-2 px-3 rounded-sm'>
                                  <span>How are you?</span>
                                 </div>
                            </div>
                        </div>

                        <div className='w-full flex justify-end items-center'>
                            <div className='flex justify-start items-start gap-2 md:px-3 py-2 max-w-full lg:max-w-[85%  ]'>
                                <div className='flex justify-center items-start flex-col w-full bg-red-500 shadow-lg shadow-red-500/50 text-white py-2 px-3 rounded-sm'>
                                  <span>How are you?</span>
                                 </div>

                                 <div>
                                    <img className='rounded-full w-[38px] h-[38px] bottom-2 border-white max-w-[38px] p-[3px] ' src={LOGIN} alt="" />
                                </div>
                            </div>
                        </div>

                        <div className='w-full flex justify-start items-center'>
                            <div className='flex justify-start items-start gap-2 md:px-3 py-2 max-w-full lg:max-w-[85%  ]'>
                                <div>
                                    <img className='rounded-full w-[38px] h-[38px] bottom-2 border-white max-w-[38px] p-[3px] ' src={LOGIN} alt="" />
                                </div>
                                <div className='flex justify-center items-start flex-col w-full bg-blue-500 shadow-lg shadow-blue-500/50 text-white py-2 px-3 rounded-sm'>
                                  <span>i need some help</span>
                                 </div>
                            </div>
                        </div>

                    </div>
                </div>
                <form action="" className='flex gap-3'>
                        <input type="text" placeholder='input your message' className='w-full flex justify-between px-2 border border-slate-900 items-center py-[5px] rounded-md outline-none bg-transparent' />
                        <button className='shadow-lg bg-slate-900 text-white text-semibold w-[75px] h-[35px] flex justify-center items-center rounded-md'>Send</button>
                </form> 
            </div>
        </div>
      </div>
    </div>
  )
}

export default ChatSeller
