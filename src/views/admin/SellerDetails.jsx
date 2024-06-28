import React from 'react'
import LOGIN from "../../../src/images/login.png"

const SellerDetails = () => {
  return (
    <div className='px-2 lg:px-7 pt-5'>
      <h1 className='text-[20px] font-bold mb-3'>Seller Details</h1>
      <div className='w-full px-4 bg-[green] rounded-md '>
        <div className='w-full flex flex-wrap '>
          <div className='w-3/12 flex justify-center items-center py-3'>
            <div >
              <img className='w-full h-[230px]' src={LOGIN} alt="" />
            </div>
          </div>

          <div className='w-4/12'>
            <div className='px-0 md:px-5 py-2'>
              <div className='py-2 text-lg'>
                 <h2>Basic Info</h2>
              </div>
              <div className='flex justify-between tex-sm flex-col bg-gray-400 gap-2 p-4 rounded-md'>
                  <div className='flex gap-2'>
                    <span>Name:</span>
                    <span>Gboyega</span>
                  </div>

                  <div className='flex gap-2'>
                    <span>Email:</span>
                    <span>akeremaleoluwagboyega@gmail.com</span>
                  </div>

                  <div className='flex gap-2'>
                    <span>Role:</span>
                    <span>Seller</span>
                  </div>

                  <div className='flex gap-2'>
                    <span>Status:</span>
                    <span>Active</span>
                  </div>

                  <div className='flex gap-2'>
                    <span>Payment Status:</span>
                    <span>Active</span>
                  </div>
              </div>
            </div>
          </div>

          
          <div className='w-4/12'>
            <div className='px-0 md:px-5 py-2'>
              <div className='py-2 text-lg'>
                 <h2>Address</h2>
              </div>
              <div className='flex justify-between tex-sm flex-col bg-gray-400 gap-2 p-4 rounded-md'>
                  <div className='flex gap-2'>
                    <span>Shop Name:</span>
                    <span>Gboyega's Shop</span>
                  </div>

                  <div className='flex gap-2'>
                    <span>Division:</span>
                    <span>Okitipupa</span>
                  </div>

                  <div className='flex gap-2'>
                    <span>District:</span>
                    <span>Akure</span>
                  </div>

                  <div className='flex gap-2'>
                    <span>State:</span>
                    <span>Ondo</span>
                  </div>
              </div>
            </div>
          </div>

        </div>

          <div className='pb-4'>
            <form action="">
              <div className='flex gap-4 pt-3 '>
                <select  className='px-4 py-2 focus:border-yellow-200 outline-none bg-[#F0F7FB] border rounded-md text-black border-slate-700' name="" id="">
                  <option value="">--Select Status</option>
                  <option value="active">Active</option>
                  <option value="deactive">Deactive</option>
                </select>

                <button  className='bg-[#F0F7FB] px-4 py-2 cursor-pointer rounded-md text-sm'>Submit</button>
              </div>
            </form>
          </div>


      </div>
    </div>
  )
}

export default SellerDetails