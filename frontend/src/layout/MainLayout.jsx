import React from 'react'
import Navbar from '../components/Navbar'
import Sidebar from '../components/Sidebar'
import { Outlet } from 'react-router-dom'

const MainLayout = () => {
  return (
    <div className='flex h-screen w-full overflow-hidden'>
        <div className='w-64 bg-gray-200'>
          <Sidebar />
        </div>
        <div className='flex flex-1 flex-col overflow-hidden min-h-0'>
          <Navbar />
          <div className='flex-1 overflow-y-auto p-4'>
            <Outlet />
          </div>
        </div>
    </div>
  )
}

export default MainLayout