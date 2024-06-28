import React from 'react'
import LOGIN from "../../../src/images/login.png"

const OrderDetails = () => {
  return (
    <div className='px-2 lg:px-7 pt-5'>
        <div className='w-full p-4 bg-[green] rounded-md'>
            <div className='flex justify-between items-center p-4'>
                <h2 className='text-xl '>Order Details</h2>
                <form action="">
                    <select  className='px-4 py-2 focus:border-yellow-200 outline-none bg-[#F0F7FB] border rounded-md text-black border-slate-700' name="" id="">
                    <option value="pending">Pending</option>
                    <option value="processing">processing</option>
                    <option value="warehouse">warehouse</option>
                    <option value="placed">placed</option>
                    <option value="cancelled">cancelled</option>
                    </select>
                </form>
            </div>
            <div className='p-4'>
                <div className='flex gap-2 text-lg '>
                    <h2>#44477</h2>
                    <span>3 jan 2024</span>

                </div>
                
                <div className='flex flex-wrap'>
                    <div className='w-[30%]'>
                        <div className='pr-3 '>
                            <div className='flex  flex-col gap-1'>
                                <h2 className='pb-2 font-semibold'>Deliver To: Gboyega</h2>
                                <p><span className='text-sm'>No 2 futa junction</span></p>
                            </div>
                            <div className='flex justify-start items-center gap-3'>
                                <h2>Payment Status:</h2>
                                <span>Paid</span>
                            </div>
                            <span>Price:$560</span>
                            <div className='mt-4 flex flex-col gap-4'>
                                <div className=''>
                                    <div className='flex gap-3 text-md'>
                                        <img src={LOGIN} alt=""  className='w-[45px] h-[45px]'/>
                                        <div>
                                            <h2>Round Neck</h2>
                                            <p>
                                                <span>Brand:</span>
                                                <span>Easy</span>
                                                <span>Quantity: 3</span>
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className='mt-4 flex flex-col gap-4'>
                                <div className=''>
                                    <div className='flex gap-3 text-md'>
                                        <img src={LOGIN} alt=""  className='w-[45px] h-[45px]'/>
                                        <div>
                                            <h2>Round Neck</h2>
                                            <p>
                                                <span>Brand:</span>
                                                <span>Easy</span>
                                                <span>Quantity: 3</span>
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className='mt-4 flex flex-col gap-4'>
                                <div className=''>
                                    <div className='flex gap-3 text-md'>
                                        <img src={LOGIN} alt=""  className='w-[45px] h-[45px]'/>
                                        <div>
                                            <h2>Round Neck</h2>
                                            <p>
                                                <span>Brand:</span>
                                                <span>Easy</span>
                                                <span>Quantity: 3</span>
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className='w-[70%]'>
                        <div className='pl-3'>
                         <div className='flex flex-col bg-[yellow] rounded-md p-4'>
                            <div className=''>
                                <div className='flex justify-start items-center gap-3'>
                                    <h2>Seller 1 Order:</h2>
                                    <span>pending</span>
                                </div>
                                 <div>
                                 <div className='flex gap-3 text-md'>
                                        <img src={LOGIN} alt=""  className='w-[45px] h-[45px]'/>
                                        <div>
                                            <h2>Round Neck</h2>
                                            <p>
                                                <span>Brand:</span>
                                                <span>Easy</span>
                                                <span>Quantity: 3</span>
                                            </p>
                                        </div>
                                    </div>

                                    <div className='flex justify-start items-center gap-3'>
                                    <h2>Seller 1 Order:</h2>
                                    <span>pending</span>
                                </div>
                                    <div className='flex gap-3  text-md'>
                                        <img src={LOGIN} alt=""  className='w-[45px] h-[45px]'/>
                                        <div>
                                            <h2>Round Neck</h2>
                                            <p>
                                                <span>Brand:</span>
                                                <span>Easy</span>
                                                <span>Quantity: 3</span>
                                            </p>
                                        </div>
                                    </div>
                                 </div>
                            </div>
                         </div>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    </div>
  )
}

export default OrderDetails