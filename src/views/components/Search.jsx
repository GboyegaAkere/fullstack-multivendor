import React from 'react'

const Search = ({setParPage,setSearch, search}) => {
  return (
    <div className='flex justify-between items-center'>
            <select onChange={(e)=>setParPage(parseInt(e.target.value))} className='px-4 py-2 focus:border-yellow-200 outline-none bg-[#F0F7FB] border rounded-md text-black border-slate-700'>
                <option value="5">5</option>
                <option value="10">10</option>
                <option value="20">20</option>
            </select>

            <input onChange={(e) => setSearch(e.target.value)} value={search} type="text" placeholder='search' className='px-4 py-2 focus:border-blue-400 rounded-lg'/>
    </div>
  )
}

export default Search
