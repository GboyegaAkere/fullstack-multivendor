import React, { useEffect, useState } from 'react'
import publicRoutes from './router/routes/publicRoute'
import Router from './router/Router'
import { getRoutes } from './router/routes'

function App(){
  const [allRoutes,setAllRoutes] = useState([...publicRoutes])

  useEffect(()=>{
    const routes = getRoutes()
    // console.log(routes)
    setAllRoutes([...allRoutes,routes])
  },[])


  return <Router allRoutes={allRoutes}/>
}

export default App