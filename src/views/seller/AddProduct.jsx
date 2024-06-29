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
            [e.target.name]:e.target.value
        })
    }

  return (
    <div className='px-2 lg:px-7 pt-5'>
        <div className='w-full p-4 bg-blue-400 rounded-md'>
            <div className='flex justify-between items-center pb-4'>
                <h1>Add Product</h1>
                <Link className='bg-blue-700 hover:shadow-blue-300 rounded-sm px-7 py-2 my-2'>All Product</Link>
            </div>
            <div>
                <form action="">
                    <div className='flex flex-col mb-3 md:flex-row gap-4 w-full'>
                        <div className='flex flex-col w-full gap-1 '>
                            <label htmlFor="name">Product name</label>
                            <input onChange={inputHandle} value={state.name} className='px-4 py-2 focus:border-indigo-500 outline-none bg-[#ebecec] border border-slate-500 rounded-md' type="text" name='name' id='name' placeholder='Product Name' />
                        </div>

                        <div className='flex flex-col w-full gap-1 '>
                            <label htmlFor="brand">Brand Name</label>
                            <input onChange={inputHandle} value={state.brand}  type="text" name='brand' id='brand' placeholder='Brand Name' className='px-4 py-2 focus:border-indigo-500 outline-none bg-[#ebecec] border border-slate-500 rounded-md' />
                        </div>
                    </div>

                    <div className='flex flex-col mb-3 md:flex-row gap-4 w-full'>
                        <div className='flex flex-col w-full gap-1 '>
                            <label htmlFor="name">Category</label>
                            <input onChange={inputHandle} value={state.name} className='px-4 py-2 focus:border-indigo-500 outline-none bg-[#ebecec] border border-slate-500 rounded-md' type="text" name='name' id='name' placeholder='Product Name' />
                        </div>

                        <div className='flex flex-col w-full gap-1 '>
                            <label htmlFor="stock">Product Stock</label>
                            <input onChange={inputHandle} value={state.stock}  type="text" name='stock' id='stock' placeholder='Product Stock' className='px-4 py-2 focus:border-indigo-500 outline-none bg-[#ebecec] border border-slate-500 rounded-md' />
                        </div>
                    </div>
                </form>
            </div>
        </div>
    </div>
  )
}

export default AddProduct