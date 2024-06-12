import React, { useState } from 'react'
import { Link } from 'react-router-dom'
// import { FaGoogle } from "react-icons/fa";
// import { CiFacebook } from "react-icons/ci";
import LOGIN from "../../images/login.png"


//   return (
//     <div className='min-w-screen min-h-screen flex justify-center items-center'>
//       <div className='w-[1140px] h-[630px] bg-white flex flex-row justify-center items-center shadow-[#F0F7FB] shadow-2xl'>
//           <div className='w-[362] pr-[55px] md:w-[461px] h-[444px] text-black p-2'>
//             <div className='bg-white p-4 rounded-md'>
//               <h2 className='text-xl mb-3 font-bold'>Login </h2>
//               <form onSubmit={submit}>
//                 <div className='flex flex-col w-full gap-1 mb-3'>
//                   <label htmlFor="email">Username or email address</label>
//                   <input onChange={inputHandle} value={state.email} className='px-3 py-2  placeholder-[#6BAFDB] bg-[#F0F7FB] rounded-md' type="email" name='email' placeholder='Email' id='email' required />

//                 </div>

//                 <div className='flex flex-col w-full gap-1 mb-3'>
//                   <label htmlFor="password">Password</label>
//                   <input onChange={inputHandle} value={state.password} type="password" name='password' placeholder='password' id='password' required  className='px-3 py-2 outline-none placeholder-[#6BAFDB] bg-[#F0F7FB] rounded-md' />
//                 </div>
//                   <div className='flex items-center w-full justify-around gap-3 mb-3'>
//                     <div className='flex items-center gap-2'>
//                       <input className='w-4 h-4 text-blue-600 overflow-hidden bg-gray-200 rounded border border-gray-300 focus:ring-blue-500' type="checkbox" name='checkbox' id='checkbox' />
//                       <label htmlFor="checkbox">Remember me</label>
//                     </div>
//                     <p className='text-[#6BAFDB]'>Forgot your password? </p>
//                   </div>

//                 <button className='bg-[#6BAFDB] h-10 w-full rounded-md hover:shadow-[#6BAFDB] text-white'>Login</button>
                
//               <div className='flex justify-center'>
//                 <p>Don't have an account ?<Link to="/register" className='text-[#6BAFDB] font-bold'>  Register now</Link></p>
//               </div>

//               <div className='w-full flex justify-center items-center mb-3'>
//                 <div className='w-[45%] bg-slate-700 h-[1px]'></div>
//                 <div className='w-[10%] flex justify-center items-center'>
//                   <span className='pb-1'>OR</span>
//                 </div>
//                 <div className='w-[45%] bg-slate-700 h-[1px]'></div>
//               </div>

//               <div className='flex justify-center items-center gap-3'>
//                 <div className='w-[134px] h-[35px] flex rounded-md bg-orange-700 shadow-lg hover:shadow-orange-700/50 justify-center cursor-pointer items-center overflow-hidden'>
//                   <span><FaGoogle /></span>
//                 </div>

//                 <div className='w-[134px] h-[35px] flex rounded-md bg-blue-700 shadow-lg hover:shadow-blue-700/50 justify-center cursor-pointer items-center overflow-hidden'>
//                   <span><CiFacebook /></span>
//                 </div>
//               </div>

              
//               </form>
//             </div>
//         </div>

//         <div className="hidden sm:block" >
//           <img src={LOGIN} alt="" className='object-cover w-[558px] h-[558px]'/>
//         </div>
//      </div>
//     </div>
//   )
// }

// export default Login

// Login.js



function Login() {
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
    console.log(state)
  }

  return (
    <div className="min-h-screen flex items-center justify-center  py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl w-full flex flex-col md:w-[1140px] h-[630px] lg:flex-row items-center justify-center space-y-8 lg:space-x-8">
        <form className="w-full max-w-md space-y-6" onSubmit={submit}>
        <h2 className='text-xl mb-3 font-bold'>Login </h2>
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

          <div className="flex items-center justify-between">
            <div className="flex items-center">
              <input
                id="remember-me"
                name="remember-me"
                type="checkbox"
                className="h-4 w-4 text-indigo-600 focus:ring-indigo-500 border-gray-300 rounded"
              />
              <label htmlFor="remember-me" className="ml-2 block text-sm text-gray-900">
                Remember me
              </label>
            </div>

            <div className="text-sm">
             <p>forget passworld</p>
            </div>
          </div>

          <div>
            <button
              type="submit"
              className="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-[#6BAFDB]  hover:bg-[#6BAFDB]  focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#6BAFDB] "
            >
              Sign in
            </button>
          </div>

          <div className='flex justify-center'>
           <p>Don't have an account ?<Link to="/register" className='text-[#6BAFDB] font-bold'>  Register now</Link></p>
          </div>
        </form>
        <div className="hidden lg:block w-96">
          <img src={LOGIN} alt="" />
        </div>
      </div>
    </div>
  );
};

export default Login;
