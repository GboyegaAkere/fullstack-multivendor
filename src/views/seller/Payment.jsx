import React from 'react';
import { FaCartShopping, FaUser } from 'react-icons/fa6'
import { MdCurrencyExchange, MdProductionQuantityLimits } from 'react-icons/md'

const Payment = () => {
    return (
        <div className='px-2 md:px-7 py-5'>
           <div className='w-full grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-7'>
                <div className='flex justify-between items-center p-5 bg-[#bedcee] rounded-md gap-3'>
                    <div className='flex flex-col justify-start items-start '>
                    <h2 className='text-3xl font-bold'>$334</h2>
                    <span className='text-medium font-medium'>Total sales</span>
                    </div>
                    
                    <div className='w-[40px] h-[47px] rounded-full bg-blue-500 flex justify-center items-center text-xl'>
                    <MdCurrencyExchange className='text-white shadow-lg'/>
                    </div>
                </div>

                <div className='flex justify-between items-center p-5 bg-[#bedcee] shadow-lg rounded-md gap-3'>
                    <div className='flex flex-col justify-start items-start'>
                    <h2 className='text-3xl font-bold'>40</h2>
                    <span className='text-medium font-medium'>Products</span>
                    </div>
                    
                    <div className='w-[40px] h-[47px] rounded-full bg-gray-900 flex justify-center items-center text-xl'>
                    <MdProductionQuantityLimits className='text-white shadow-lg'/>
                    </div>
                </div>

                <div className='flex justify-between items-center p-5 bg-[#bedcee] rounded-md gap-3'>
                    <div className='flex flex-col justify-start items-start '>
                    <h2 className='text-3xl font-bold'>10</h2>
                    <span className='text-medium font-medium'>Orders</span>
                    </div>
                    
                    <div className='w-[40px] h-[47px] rounded-full bg-blue-300 flex justify-center items-center text-xl'>
                    <FaCartShopping className='text-white shadow-lg'/>
                    </div>
                </div>

                <div className='flex justify-between items-center p-5 bg-[#bedcee] rounded-md gap-3'>
                    <div className='flex flex-col justify-start items-start '>
                    <h2 className='text-3xl font-bold'>5</h2>
                    <span className='text-medium font-medium'>Pending Orders</span>
                    </div>
                    
                    <div className='w-[40px] h-[47px] rounded-full bg-yellow-300 flex justify-center items-center text-xl'>
                    <FaCartShopping className='text-white shadow-lg'/>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Payment;