import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import {IoMdImages} from "react-icons/io"

const AddProduct = () => {
 const categorys = [
  {
    id:1,
    name:"Sport"
  },

  {
    id:2,
    name:"Phones"
  },

  {
    id:3,
    name:"Laptops"
  },

  {
    id:4,
    name:"Mouse"
  },

  {
    id:5,
    name:"Books"
  },

  {
    id:6,
    name:"Electronics"
  },
 ]

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

  const [cateShow, setCateShow] = useState(false)
  const [category, setCategory] = useState("")
  const [allCategory, setAllCategory] = useState(categorys)
  const [searchValue, setSearchValue] = useState("")

  const categorySearch = (e)=>{
      const value = e.target.value
      setSearchValue(value)
      if (value) {
        let srcValue  = allCategory.filter(c => c.name.toLowerCase().
      indexOf(value.toLowerCase()) > -1)
      setAllCategory(srcValue)
      } else {
        setAllCategory(categorys)
      }
  }

  const [images, setImages] =useState([])
  const [imageShow, setImageShow] = useState([])

  const imageHandle = (e) => {
    const files = e.target.files
    const length = files.length
    if (length > 0) {
      setImages([...images,...files])
    }
  }
  // console.log(images)
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
                    <div className='flex flex-col w-full gap-1 relative'>
                        <label htmlFor="category">Category</label>
                        <input readOnly onClick={()=>setCateShow(!cateShow)} className='px-4 py-2 focus:border-indigo-500 outline-none bg-[#ebecec] border border-slate-500 rounded-md' onChange={inputHandle} type="text" value={category} id='category' placeholder='Category'  />
                        <div className={`absolute top-[101%] bg-slate-600 rounded-md w-full transition-all ${cateShow ? "scale-100":"scale-0"}`}>
                          <div className='w-full p-4 py-2 fixed'> 
                            <input value={searchValue} onChange={categorySearch} type="text" placeholder='Search' className='px-3 w-full rounded-md py-1 focus:border-indigo-300 outline-none bg-transparent border border-slate-500 overflow-hidden' />
                          </div>

                          <div className='pt-14'></div>
                          <div className='flex justify-start flex-col items-start h-[200px] overflow-hidden'>
                            {
                              allCategory.map((c,i)=>{
                                return(
                                  <span className={`px-4 py-2 hover:bg-slate-800 hover:text-white hover:shadow-lg w-full cursor-pointer ${category === c.name && "bg-indigo-500"}`} onClick={()=>{
                                    setCateShow(false)
                                    setCategory(c.name)
                                    setSearchValue("")
                                    setAllCategory(categorys)
                                  }}>
                                    {c.name}
                                  </span>
                                )
                              })
                            }
                          </div>
                        </div>
                    </div>

                    <div className='flex flex-col w-full gap-1'>
                        <label htmlFor="stock">Stock</label>
                        <input className='px-4 py-2 focus:border-indigo-500 outline-none bg-[#ebecec] border border-slate-500 rounded-md' onChange={inputHandle} type="text" value={state.stock} name='stock' id='stock' placeholder='Stock'   />
                    </div>
                </div>

                <div className='flex flex-col mb-3 md:flex-row gap-4 w-full'>
                    <div className='flex flex-col w-full gap-1'>
                        <label htmlFor="price">Price</label>
                        <input 
                          className='px-4 py-2 focus:border-indigo-500 outline-none bg-[#ebecec] border border-slate-500 rounded-md' 
                          onChange={inputHandle} 
                          type="number" 
                          value={state.price} 
                          name='price' 
                          id='price' 
                          placeholder='Price'  
                        />
                    </div>

                    <div className='flex flex-col w-full gap-1'>
                        <label htmlFor="dicount">Discount</label>
                        <input 
                          className='px-4 py-2 focus:border-indigo-500 outline-none bg-[#ebecec] border border-slate-500 rounded-md' 
                          onChange={inputHandle} 
                          type="number" 
                          value={state.discount} 
                          name='discount' 
                          id='dicount' 
                          placeholder='Discount'  
                        />
                    </div>
                </div>

                <div className='flex flex-col w-full gap-1 mb-5'>
                        <label htmlFor="description">Description</label>
                        <textarea 
                        rows="4"
                        cols="10" 
                        onChange={inputHandle} 
                        value={state.description} 
                        name='description' 
                        id='description' 
                        placeholder='Description'
                        className='px-4 py-2 focus:border-indigo-500 outline-none bg-[#ebecec] border border-slate-500 rounded-md'></textarea>
                 </div>

                 <div className='grid lg:grid-cols-4 grid-cols-1 md:grid-cols-3 sm:grid-cols-2 sm:gap-4 md:gap-4 gap-3 w-full mb-4'>
                  <label className='flex justify-center items-center flex-col h-[180px] cursor-pointer border border-dashed hover:border-red-500' htmlFor="image">
                    <span><IoMdImages/></span>
                    <span>Select Image</span>
                  </label>
                  <input 
                    onChange={imageHandle}
                    className='hidden'
                    multiple 
                    type="file" 
                    id='image' 
                  />

                 </div>
            </form>
        </div>
      </div>
    </div>
  )
}

export default AddProduct
