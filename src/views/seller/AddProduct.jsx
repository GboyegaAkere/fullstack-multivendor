import React, { useState } from 'react'
import { Link } from 'react-router-dom'

const AddProduct = () => {
  const [state, setState] = useState({
    name:"",
    description:"",
    discount:"",
    price:"",
    brand:"",
    stock:""
  })

  const inputHandle = (e) =>{
    setState({
        ...state,
        [e.target.name] : e.target.value
    })
  }

  return (
    <div className='px-2 lg:px-7 pt-5'>
      <div className='w-full p-4 rounded-md bg-slate-300 '>
        <div className='flex justify-between items-center pb-4'>
            <h1>Add Product</h1>
            <Link className="bg-blue-600 hover:shadow-blue-400 rounded-md px-7 py-2 my-2">All Product</Link>
        </div>
        <div>
            <form action="">
                <div className='flex flex-col mb-3 md:flex-row gap-4 w-full'>
                    <div className='flex flex-col w-full gap-1'>
                        <label htmlFor="product">Product Name</label>
                        <input className='px-4 py-2 focus:border-indigo-500 outline-none bg-[#ebecec] border border-slate-500 rounded-md' onChange={inputHandle} type="text" value={state.name} name='name' id='name' placeholder='Product name'  />
                    </div>

                    <div className='flex flex-col w-full gap-1'>
                        <label htmlFor="brand">Brand Name</label>
                        <input className='px-4 py-2 focus:border-indigo-500 outline-none bg-[#ebecec] border border-slate-500 rounded-md' onChange={inputHandle} type="text" value={state.brand} name='brand' id='brand' placeholder='Brand name'  />
                    </div>
                </div>

                <div className='flex flex-col mb-3 md:flex-row gap-4 w-full'>
                    <div className='flex flex-col w-full gap-1'>
                        <label htmlFor="product">Product Name</label>
                        <input className='px-4 py-2 focus:border-indigo-500 outline-none bg-[#ebecec] border border-slate-500 rounded-md' onChange={inputHandle} type="text" value={state.name} name='name' id='name' placeholder='Product name'  />
                    </div>

                    <div className='flex flex-col w-full gap-1'>
                        <label htmlFor="stock">Stock</label>
                        <input className='px-4 py-2 focus:border-indigo-500 outline-none bg-[#ebecec] border border-slate-500 rounded-md' onChange={inputHandle} type="text" value={state.stock} name='stock' id='stock' placeholder='Stock'  />
                    </div>
                </div>
            </form>
        </div>
      </div>
    </div>
  )
}

export default AddProduct
