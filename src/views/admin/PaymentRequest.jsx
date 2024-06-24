import React, { forwardRef } from 'react'
import {FixedSizeList as List} from "react-window"

function handleOnWheel({deltaY}) {
    console.log("handleOnwheel", deltaY)
}

const outerElementType = forwardRef((props, ref)=>(
    <div ref={ref} onWheel={handleOnWheel} {...props}/>
))

const PaymentRequest = () => {
    const array = [1,2,3,4,5,6,,7,8,9,10]
    const Row = ({index,style}) =>{
        return (
            <div style={style} className='flex tex-sm'>
                <div className='w-[25%] p-2 whitespace-nowrap'>{index + 1}</div>
                <div className='w-[25%] p-2 whitespace-nowrap'>#400</div>
                <div className='w-[25%] p-2 whitespace-nowrap'>Pending</div>
                <div className='w-[25%] p-2 whitespace-nowrap'>2nd of june</div>
                <div className='w-[25%] p-2 whitespace-nowrap'>
                    <button className='bg-gray-300 shadow-lg px-3 py-2px cursor-pointer rounded-sm'>Confirmed</button>
                </div>
            </div>
        )
    }


  return (
    <div className='px-2 lg:px-7 pt-5'>
        <div className='w-full p-4  bg-[#6BAFDB]  rounded-md'>
            <h2 className='text-x font-medium pb-5 text-black'>Withdraw Request</h2>
            <div className='w-full'>
                <div className='w-full overflow-x-auto'>
                    <div className='flex bg-[#aad2e9] uppercase rounded-md font-bold  text-xs mim-w-[340px]'>
                        <div className='w-[25%] p-2'>NO</div>
                        <div className='w-[25%] p-2'>Amount</div>
                        <div className='w-[25%] p-2'>Status</div>
                        <div className='w-[25%] p-2'>date</div>
                        <div className='w-[25%] p-2'>Action</div>
                    </div>
                    {
                        <List style={{minWidth:"340px"}} className='List' height={350} itemCount={1000} outerElementType={outerElementType} itemSize={35}>
                            {Row}
                        </List>
                    }
                </div>
            </div>
        </div>
    </div>
  )
}

export default PaymentRequest