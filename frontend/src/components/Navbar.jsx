import React from 'react'
import { FaSearch, FaBell, FaUser } from "react-icons/fa";

const Navbar = () => {



  const NavItems = [
    {
      icon: <FaBell />,
      label: 'Notification',
    },
    {
      icon: <FaUser />,
      label: 'User'
    }
  ]
  return (
    <div className='bg-white text-gray-800 p-2 shadow-md'>
      <div className='flex justify-between items-center'>
        <div className='flex items-center border border-[#1f2154] rounded-full'>
          <form action="/search-result" method="get">
            <input type="search" placeholder='Search' className='border-none outline-none ml-2 placeholder:text-[#1f2154]' />
            <button type="submit" className='p-2 rounded-full bg-[#1f2154] cursor-pointer'>
              <FaSearch className='text-white' />
            </button>
          </form>

        </div>
        <div className=''>
          <div className='flex justify-between items-center'>
            {NavItems.map((item, index) => (
              <div key={index} className='relative mr-4'>
                <button className='p-2 cursor-pointer text-black' >
                  {item.icon}
                </button>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

export default Navbar;