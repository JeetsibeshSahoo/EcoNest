# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Babel](https://babeljs.io/) (or [oxc](https://oxc.rs) when used in [rolldown-vite](https://vite.dev/guide/rolldown)) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## React Compiler

The React Compiler is not enabled on this template because of its impact on dev & build performances. To add it, see [this documentation](https://react.dev/learn/react-compiler/installation).

## Expanding the ESLint configuration

If you are developing a production application, we recommend using TypeScript with type-aware lint rules enabled. Check out the [TS template](https://github.com/vitejs/vite/tree/main/packages/create-vite/template-react-ts) for information on how to integrate TypeScript and [`typescript-eslint`](https://typescript-eslint.io) in your project.

Forest Green
#173F35

Sage
#8FAF9F

Warm Off-White
#F7F6F1

Dark
#17201D

White
#FFFFFF


className="text-3xl font-bold text-[#173F35]"

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
            className="shrink-0"
            >
                <img 
                src="/assets/logos/logo.png" 
                alt="EcoNest" 
                className='h-10 w-auto sm:h-11'
                />
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
