import React from 'react'
import { FaCartShopping, FaUser } from 'react-icons/fa6'
import { MdCurrencyExchange, MdProductionQuantityLimits } from 'react-icons/md'
import Chart from "react-apexcharts"
import { Link } from 'react-router-dom'
import LOGIN from "../../images/login.png"

const AdminDashboard = () => {
  const state ={
    series:[
      {
        name:"Orders",
        data:[23,34,35,34,23,77,88,99,12,34,123,56]
      },
      {
        name:"Revenue",
        data:[233,343,354,344,243,747,8448,92,49,23,11,12]
      },
      {
        name:"Seller",
        data:[33,43,34,34,243,747,844,29]
      }
    ],
    options:{
      color:["#181ee8","#181ee8"],
      plotOptions:{
        radius:30
      },
      chart:{
        background:"transparent",
        foreColor:"#dod2d6"
      },
      dataLabels:{
        enable:false
      },
      strock:{
        show:true,
        curve:["smooth", "straight","stepline"],
        lineCap:"butt",
        colors:"#f0f0f0",
        width:.5,
        dashArray:0
      },
      xaxis:{
        categories:["Jan","Feb","Mar","Apl","May","Jun","jul","Aug","Sep","Oct","Nov","Dec"]
      },
      legend:{
        position:"top"
      },
      responsive:[
        {
          breakpoint:565,
          yaxis:{
            categories:["Jan","Feb","Mar","Apl","May","Jun","jul","Aug","Sep","Oct","Nov","Dec"]
          },
          options:{
            plotOptions:{
              bar:{
                horizontal:true
              }
            },
            chart:{
              height:"550px"
            }
          }
        }
      ]
    }
  }
  return (
    <div  className='px-2 md:px-7 py-5'>
      <div className='w-full grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-7'>
        <div className='flex justify-between items-center p-5 bg-white rounded-md gap-3'>
            <div className='flex flex-col justify-start items-start text-gray-400'>
              <h2 className='text-3xl font-bold'>$334</h2>
              <span className='text-medium font-medium'>Total sales</span>
            </div>
            
            <div className='w-[40px] h-[47px] rounded-full bg-blue-500 flex justify-center items-center text-xl'>
              <MdCurrencyExchange className='text-white shadow-lg'/>
            </div>
        </div>

        <div className='flex justify-between items-center p-5 bg-indigo-200 rounded-md gap-3'>
            <div className='flex flex-col justify-start items-start text-gray-400'>
              <h2 className='text-3xl font-bold'>40</h2>
              <span className='text-medium font-medium'>Products</span>
            </div>
            
            <div className='w-[40px] h-[47px] rounded-full bg-gray-900 flex justify-center items-center text-xl'>
              <MdProductionQuantityLimits className='text-white shadow-lg'/>
            </div>
        </div>

        <div className='flex justify-between items-center p-5 bg-green-300 rounded-md gap-3'>
            <div className='flex flex-col justify-start items-start text-gray-400'>
              <h2 className='text-3xl font-bold'>54</h2>
              <span className='text-medium font-medium'>Sellers</span>
            </div>
            
            <div className='w-[40px] h-[47px] rounded-full bg-blue-300 flex justify-center items-center text-xl'>
              <FaUser className='text-white shadow-lg'/>
            </div>
        </div>

        <div className='flex justify-between items-center p-5 bg-purple-300 rounded-md gap-3'>
            <div className='flex flex-col justify-start items-start text-gray-400'>
              <h2 className='text-3xl font-bold'>$2345</h2>
              <span className='text-medium font-medium'>Orders</span>
            </div>
            
            <div className='w-[40px] h-[47px] rounded-full bg-yellow-300 flex justify-center items-center text-xl'>
              <FaCartShopping className='text-white shadow-lg'/>
            </div>
        </div>
      </div>

      <div className='w-full flex flex-wrap mt-7 '>
        <div className='w-full lg:w-7/12 lg:pr-3'>
          <div className='w-full bg-yellow-400 p-4 rounded-md'>
            <Chart options={state.options} series={state.series} type='bar' height={350}/>
          </div>
        </div>

        <div className='w-full lg:w-5/12 lg:pl-4 mt-6 lg:mt-0'>
          <div className='w-full bg-gray-200 p-4 rounded-md text-yellow-400'> 
            <div className='flex justify-between items-center'>
              <h2 className='font-semibold text-lg text-black pb-3'>Recent seller message</h2>
              <Link className='font-semibold text-sm text-black'>View All</Link>
            </div>
            <div className='flex flex-col gap-2pt-6 text-black '>
              <ol className='relative border-1 border-slate-600 ml-4'>
                  <li className='mb-3 ml-6'>
                    <div className='flex absolute -left-5 shadow-lg justify-center items-center w-10 h-10 p-[6px] rounded-full bg-purple-300'><img src={LOGIN} alt=""className='w-full h-full rounded-full'/></div>
                    <div className='p-3 bg-slate-300 rounded-lg border border-slate-900 shadow-sm'>
                      <div className='flex justify-between items-center mb-2'>
                          <Link className='text-md font-normal'>Admin</Link>
                          <time className='mb-1 text-sm font-normal sm:order-last sm:mb-0'>2 days ago</time>
                      </div>
                       <div className='p-2 text-sm font-normal bg-slate-200 rounded-lg border border-teal-300'>
                        <h3>How are you?</h3>  
                      </div>
                    </div>
                  </li>
              </ol>
            </div>

            <div className='flex flex-col gap-2pt-6 text-black '>
              <ol className='relative border-1 border-slate-600 ml-4'>
                  <li className='mb-3 ml-6'>
                    <div className='flex absolute -left-5 shadow-lg justify-center items-center w-10 h-10 p-[6px] rounded-full bg-purple-300'><img src={LOGIN} alt=""className='w-full h-full rounded-full'/></div>
                    <div className='p-3 bg-slate-300 rounded-lg border border-slate-900 shadow-sm'>
                      <div className='flex justify-between items-center mb-2'>
                          <Link className='text-md font-normal'>Admin</Link>
                          <time className='mb-1 text-sm font-normal sm:order-last sm:mb-0'>2 days ago</time>
                      </div>
                       <div className='p-2 text-sm font-normal bg-slate-200 rounded-lg border border-teal-300'>
                        <h3>How are you?</h3>  
                      </div>
                    </div>
                  </li>
              </ol>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default AdminDashboard
