import { useState } from "react"
import { NavLink } from "react-router-dom"
import { Menu, X, ShoppingCart } from "lucide-react"
import { useSelector } from "react-redux"

import { navigationItems } from "../../data/navigation"

function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const cartItems = useSelector((state) => state.cart.items)

  const cartItemCount = cartItems.reduce(
    (total, item) => total + item.quantity,
    0
  )

  const closeMenu = () => {
    setIsMenuOpen(false)
  }

  return (
    <header className="border-b border-gray-200 bg-white">
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
        <NavLink
          to="/"
          onClick={closeMenu}
          className="flex h-full shrink-0 items-center"
        >
          <img
            src="/assets/logos/logo.png"
            alt="EcoNest"
            className="h-12 w-auto object-contain sm:h-14"
          />
        </NavLink>

        <div className="hidden items-center gap-6 md:flex">
          {navigationItems.map((item) => (
            <NavLink
              key={item.path}
              to={item.path}
              className={({ isActive }) =>
                `text-lg font-medium transition-colors ${
                  isActive
                    ? "text-[#173F35]"
                    : "text-gray-500 hover:text-[#173F35]"
                }`
              }
            >
              {item.name}
            </NavLink>
          ))}

          <NavLink
            to="/cart"
            className={({ isActive }) =>
              `flex items-center gap-2 text-lg font-medium transition-colors ${
                isActive
                  ? "text-[#173F35]"
                  : "text-gray-500 hover:text-[#173F35]"
              }`
            }
          >
            <span className="relative">
              <ShoppingCart size={20} aria-hidden="true" />

              {cartItemCount > 0 && (
                <span className="absolute -right-3 -top-3 flex h-5 min-w-5 items-center justify-center rounded-full bg-[#173F35] px-1 text-[10px] font-semibold text-white">
                  {cartItemCount}
                </span>
              )}
            </span>
          </NavLink>
        </div>

        <button
          type="button"
          onClick={() => setIsMenuOpen((prev) => !prev)}
          className="flex h-10 w-10 items-center justify-center rounded-full text-[#173F35] transition-colors hover:bg-gray-100 md:hidden"
          aria-label={
            isMenuOpen ? "Close navigation menu" : "Open navigation menu"
          }
          aria-expanded={isMenuOpen}
        >
          {isMenuOpen ? (
            <X size={22} aria-hidden="true" />
          ) : (
            <Menu size={22} aria-hidden="true" />
          )}
        </button>
      </nav>

      {isMenuOpen && (
        <div className="border-t border-gray-100 bg-white md:hidden">
          <div className="mx-auto flex max-w-7xl flex-col px-4 py-4 sm:px-6">
            {navigationItems.map((item) => (
              <NavLink
                key={item.path}
                to={item.path}
                onClick={closeMenu}
                className={({ isActive }) =>
                  `border-b border-gray-100 py-4 text-base font-medium transition-colors last:border-b-0 ${
                    isActive
                      ? "text-[#173F35]"
                      : "text-gray-600 hover:text-[#173F35]"
                  }`
                }
              >
                {item.name}
              </NavLink>
            ))}

            <NavLink
              to="/cart"
              onClick={closeMenu}
              className={({ isActive }) =>
                `flex items-center gap-2 border-b border-gray-100 py-4 text-base font-medium transition-colors ${
                  isActive
                    ? "text-[#173F35]"
                    : "text-gray-600 hover:text-[#173F35]"
                }`
              }
            >
              <span className="relative">
                <ShoppingCart size={18} aria-hidden="true" />

                {cartItemCount > 0 && (
                  <span className="absolute -right-3 -top-3 flex h-5 min-w-5 items-center justify-center rounded-full bg-[#173F35] px-1 text-[10px] font-semibold text-white">
                    {cartItemCount}
                  </span>
                )}
              </span>
            </NavLink>
          </div>
        </div>
      )}
    </header>
  )
}

export default Navbar