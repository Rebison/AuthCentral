import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { FaHouse, FaPhone } from 'react-icons/fa6'
import { IoMdSettings } from "react-icons/io";


const Sidebar = () => {
    const [selectedItem, setSelectedItem] = useState(null);
    const menuItems = [
        { label: 'Home', path: '/', icon: <FaHouse /> },
        { label: 'About', path: '/about', icon: <FaHouse /> },
        { label: 'Contact', path: '/contact', icon: <FaPhone /> },
    ]

    const footerItems = [
        { label: 'logout', path: '/settings', icon: <IoMdSettings /> },
    ]

    const MenuItem = ({ label, path, icon }) => {
        return (
            <div className={`mb-2 cursor-pointer hover:bg-blue-500 p-2 rounded ${selectedItem === label ? 'bg-blue-600' : ''}`}>
                <div className='flex justify-between items-center gap-2'>
                    <div className={``}>
                        {icon}
                    </div>
                    <Link to={path} className={'flex-1'} onClick={() => setSelectedItem(label)}>
                        {label}
                    </Link>
                </div>
            </div>
        )
    }
    return (
        <div className='h-full w-64 bg-[#0b0c28] text-white flex flex-col'>
            <div className='mb-4 text-lg font-bold p-2'>Sidebar</div>
            <aside className='h-full flex flex-1 flex-col space-between'>
                <p className='mb-2 text-sm font-bold px-2'>Menu</p>
                <div className='flex-1'>
                    {menuItems.map((item, index) => (
                        <MenuItem key={index} label={item.label} path={item.path} icon={item.icon} />
                    ))}
                </div>
                <hr />
                <div className=''>
                    {footerItems.map((item, index) => (
                        <MenuItem key={index} label={item.label} path={item.path} icon={item.icon} />
                    ))}
                </div>
            </aside>
        </div>
    )
}

export default Sidebar