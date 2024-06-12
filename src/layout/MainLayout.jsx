import React from 'react'
import { Outlet } from 'react-router-dom'

const MainLayout = () => {
  return (
    <div >
      <hi>MainLayout<Outlet/></hi>
    </div>
  )
}

export default MainLayout