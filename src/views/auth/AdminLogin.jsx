import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { admin_login,messageClear } from '../../store/reducer/authReducer'
import {PropagateLoader} from "react-spinners"
import toast from "react-hot-toast"
import { useNavigate } from 'react-router-dom'
import LOGIN from "../../images/login.png"


const AdminLogin = () => {
  const navigate = useNavigate()
  const {loader,errorMessage,success} =useSelector(state=>state.auth)
  const dispatch = useDispatch()
    const [state, setState] = useState({
      email:"",
      password:""
    })
  
    const inputHandle =(e)=>{
      setState({
        ...state,
        [e.target.name]:e.target.value
      })
    }
  
    const submit = (e)=>{
      e.preventDefault()
      dispatch(admin_login(state))
      console.log(state)
    }

    useEffect (()=>{
      if (errorMessage) {
      toast.error(errorMessage)
      dispatch(messageClear())
      } else {
        
      }
      if (success) {
        toast.success(success)
        dispatch(messageClear())
        navigate('/')
      } else {
        
      }
    },[errorMessage,success])

return (
  <div className="min-h-screen flex items-center justify-center  py-12 px-4 sm:px-6 lg:px-8">
    <div className="max-w-4xl w-full flex flex-col md:w-[1140px] h-[630px] lg:flex-row items-center justify-center space-y-8 lg:space-x-8">
      <form className="w-full max-w-md space-y-6" onSubmit={submit}>
        <div className="rounded-md shadow-sm -space-y-px">
          <div>
            <label htmlFor="email" className='font-bold'>
              Username or email address
            </label>
            <input
              onChange={inputHandle} 
              value={state.email}
              id="email"
              name="email"
              type="email"
              autoComplete="email"
              required
              className="appearance-none rounded-md relative block w-full px-3 py-2 border border-gray-300 placeholder-[#6BAFDB] bg-[#F8FBFD]  text-gray-900 rounded-t-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
              placeholder="Email address"
            />
          </div>
          <div>
            <label htmlFor="password" className='font-bold'>
              Password
            </label>
            <input
              onChange={inputHandle} 
              value={state.password}
              id="password"
              name="password"
              type="password"
              autoComplete="current-password"
              required
              className="appearance-none rounded-md relative block w-full px-3 py-2 border bg-[#F8FBFD] border-gray-300 placeholder-[#6BAFDB]  text-gray-900 rounded-b-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
              placeholder="Password"
            />
          </div>
        </div>

        <div>   
        <button disabled={loader ? true : false} 
           className="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-[#6BAFDB]  hover:bg-[#6BAFDB]  focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#6BAFDB] ">
          {
              loader ? <PropagateLoader/> : "Login"
            }</button> 
        </div>
      </form>
      <div className="hidden lg:block w-96">
        <img src={LOGIN} alt="" />
      </div>
    </div>
  </div>
);
};

export default AdminLogin;
