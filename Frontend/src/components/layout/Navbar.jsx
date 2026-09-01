import React, { useState } from 'react'
import { NavLink } from 'react-router-dom';
import { navigationItems } from '../../data/navigation';
import { Menu, X } from "lucide-react"


function Navbar() {

    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const closeMenu = () => {
        setIsMenuOpen(false);
    }


  return (
    <header className='border-b border-gray-200 bg-white'>
        <nav className='flex mx-auto max-w-7xl items-center justify-between px-6 py-4'>
            <NavLink
            to="/"
            onClick={closeMenu}
            className="flex h-full items-center shrink-0"
            >
                <img 
                src="/assets/logos/logo.png" 
                alt="EcoNest" 
                className='h-12 w-auto object-contain sm:h-14'
                />
            </NavLink>

            <div className='hidden items-center gap-6 md:flex'>
                {navigationItems.map((item) => (
                    <NavLink
                    key={item.path}
                    to={item.path}
                    className={({ isActive }) => 
                    `text-lg font-medium transition-colors ${
                        isActive ? "text-[#173F35]" : "text-gray-500 hover:text-[#173F35]"
                    }`
                    }
                    >
                        {item.name}
                    </NavLink>
                ))}
            </div>

            <button
            type='button'
            onClick={() => setIsMenuOpen((prev) => !prev)}
            className='flex h-10 w-10 items-center justify-center rounded-full text-[#173F35] transition-colors hover:bg-gray-100 md:hidden'
            aria-label={isMenuOpen ? "Close navigation menu" : "Open navigation menu"}
            aria-expanded={isMenuOpen}
            >
                {isMenuOpen ? <X size={22} /> : <Menu size={22} />}
            </button>

        </nav>

        {isMenuOpen && (
            <div className='border-t border-gray-100 bg-white md:hidden'>
                <div className='mx-auto flex max-w-7xl flex-col px-4 py-4 sm:px-6'>
                    {navigationItems.map((item) => (
                        <NavLink
                        key={item.path}
                        to={item.path}
                        onClick={closeMenu}
                        className={({ isActive }) => 
                        `border-b border-gray-100 py-4 text-base font-medium transition-colors last:border-b-0 ${
                            isActive ? "text-[#173F35]" : "text-gray-600 hover:text-[#173F35]"
                        }`
                        }
                        >
                            {item.name}
                        </NavLink>
                    ))}
                </div>
            </div>
        )}
    </header>
  )
}

export default Navbar
