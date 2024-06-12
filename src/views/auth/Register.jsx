import React, { useState } from 'react'
import { Link } from 'react-router-dom'
// import { FaGoogle } from "react-icons/fa";
// import { CiFacebook } from "react-icons/ci";
import REGISTER from "../../images/Register.png"



function Login() {
  const [state, setState] = useState({
    email:"",
    password:"",
    zipcode:""
  })

  const inputHandle =(e)=>{
    setState({
      ...state,
      [e.target.name]:e.target.value
    })
  }

  const submit = (e)=>{
    e.preventDefault()
    console.log(state)
  }

  return (
    <div className="min-h-screen flex items-center justify-center  py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl w-full flex flex-col md:w-[1140px] h-[630px]  lg:flex-row items-center justify-center space-y-8 lg:space-x-8">
        <form className="w-full max-w-md space-y-6" onSubmit={submit}>
        <h2 className='text-xl mb-3 font-bold'>Register</h2>
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

            <div>
              <label htmlFor="zipcode" className='font-bold'>
                Zip Code
              </label>
              <input
                type="text" 
                pattern="[0-9]{5}" 
                title="Five digit zip code" 
                onChange={inputHandle} 
                value={state.zipcode}
                id="zipcode"
                name="zipcode"
                required
                className="appearance-none rounded-md relative block w-full px-3 py-2 border bg-[#F8FBFD] border-gray-300 placeholder-[#6BAFDB]  text-gray-900 rounded-b-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                placeholder="Zipcode"
              />
            </div>
          </div>

          <div className="flex items-center justify-between">
            <div className="flex items-center">
              <input
                id="remember-me"
                name="remember-me"
                type="checkbox"
                className="h-4 w-4 text-indigo-600 focus:ring-indigo-500 border-gray-300 rounded"
              />
              <label htmlFor="remember-me" className="ml-2 block text-sm text-gray-900">
                I am a Customer
              </label>
            </div>

            <div className="flex items-center">
              <input
                id="remember-me"
                name="remember-me"
                type="checkbox"
                className="h-4 w-4 text-indigo-600 focus:ring-indigo-500 border-gray-300 rounded"
              />
              <label htmlFor="remember-me" className="ml-2 block text-sm text-gray-900">
                I am a Vendor
              </label>
            </div>
          </div>

          <div>
            <button
              type="submit"
              className="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-[#6BAFDB]  hover:bg-[#6BAFDB]  focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#6BAFDB] "
            >
              REGISTER
            </button>
          </div>

          <div className='flex justify-center'>
           <p>Already have an account ?<Link to="/login" className='text-[#6BAFDB] font-bold'>Login Now</Link></p>
          </div>
        </form>
        <div className="hidden lg:block w-96">
          <img src={REGISTER} alt="" />
        </div>
      </div>
    </div>
  );
};

export default Login;
