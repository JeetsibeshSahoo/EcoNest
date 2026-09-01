// import React from 'react'

// function Footer() {
//   return (
//     <footer className='border-t border-gray-200 bg-gray-50'>
//         <div className='mx-auto max-w-7xl px-6 py-8'>
//             <p className='text-center text-sm text-gray-500'>
//                 @ 2026 MyBrand. All rights reserved.
//             </p>
//         </div>
//     </footer>
//   )
// }

// export default Footer


import { NavLink } from "react-router-dom"

import { navigationItems } from "../../data/navigation"

function Footer() {
  return (
    <footer className="border-t border-gray-200 bg-[#F7F6F1]">
      <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:py-16">

        <div className="grid gap-10 md:grid-cols-3">

          {/* Brand */}
          <div className="max-w-sm">
            <NavLink to="/" className="inline-block">
              <img
                src="/assets/logos/logo.png"
                alt="EcoNest"
                className="h-10 w-auto"
              />
            </NavLink>

            <p className="mt-5 text-sm leading-6 text-gray-600">
              Thoughtfully selected products for simpler,
              more conscious everyday living.
            </p>
          </div>

          {/* Navigation */}
          <div>
            <h2 className="text-sm font-semibold uppercase tracking-[0.15em] text-[#173F35]">
              Explore
            </h2>

            <nav
              className="mt-5 flex flex-col gap-3"
              aria-label="Footer navigation"
            >
              {navigationItems.map((item) => (
                <NavLink
                  key={item.path}
                  to={item.path}
                  className="w-fit text-sm text-gray-600 transition-colors hover:text-[#173F35]"
                >
                  {item.name}
                </NavLink>
              ))}
            </nav>
          </div>

          {/* Contact */}
          <div>
            <h2 className="text-sm font-semibold uppercase tracking-[0.15em] text-[#173F35]">
              Get in touch
            </h2>

            <div className="mt-5 space-y-3 text-sm text-gray-600">
              <a
                href="mailto:hello@econest.com"
                className="block transition-colors hover:text-[#173F35]"
              >
                hello@econest.com
              </a>

              <p>
                Bhubaneswar, Odisha
              </p>
            </div>
          </div>

        </div>

        {/* Bottom */}
        <div className="mt-12 border-t border-gray-200 pt-6">
          <p className="text-center text-xs text-gray-500">
            © {new Date().getFullYear()} EcoNest. All rights reserved.
          </p>
        </div>

      </div>
    </footer>
  )
}

export default Footer