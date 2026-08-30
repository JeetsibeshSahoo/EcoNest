import React from 'react'
import { NavLink } from 'react-router-dom';
import { navigationItems } from '../../data/navigation';


function Navbar() {


  return (
    <header className='border-b border-gray-200 bg-white'>
        <nav className='flex mx-auto max-w-7xl items-center justify-between px-6 py-4'>
            <NavLink
            to="/"
            className="text-3xl font-bold text-[#173F35]"
            >
                EcoNest
            </NavLink>

            <div className='flex items-center gap-6'>
                {
                    navigationItems.map((item) => (
                        <NavLink
                        key={item.path}
                        to={item.path}
                        className={({ isActive }) => `text-lg font-medium transition-colors ${
                            isActive ? "text-[#173F35]" : "text-gray-500 hover:text-[#173F35]"
                        }`}
                        >
                            {item.name}
                        </NavLink>
                    ))
                }
            </div>
        </nav>
    </header>
  )
}

export default Navbar
