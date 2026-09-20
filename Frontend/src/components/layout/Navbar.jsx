import { useState } from "react"
import { NavLink } from "react-router-dom"
import { Menu, X, ShoppingCart } from "lucide-react"
import { useSelector } from "react-redux"

import Container from "../common/Container"
import { navigationItems } from "../../data/navigation"
import { selectCartItemCount } from "../../features/cart/cartSelectors"

function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const cartItemCount = useSelector(selectCartItemCount)

  const closeMenu = () => {
    setIsMenuOpen(false)
  }

  const getNavLinkClasses = ({ isActive }) =>
    `rounded-sm text-lg font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#173F35] focus-visible:ring-offset-2 ${
      isActive
        ? "text-[#173F35]"
        : "text-gray-500 hover:text-[#173F35]"
    }`

  return (
    <header className="border-b border-gray-200 bg-white">
      <Container className="py-4">
        <nav
          className="flex items-center justify-between"
          aria-label="Main navigation"
        >
          <NavLink
            to="/"
            onClick={closeMenu}
            className="flex shrink-0 rounded-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#173F35] focus-visible:ring-offset-2"
            aria-label="EcoNest home"
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
                className={getNavLinkClasses}
              >
                {item.name}
              </NavLink>
            ))}

            <NavLink
              to="/cart"
              className={getNavLinkClasses}
              aria-label={
                cartItemCount > 0
                  ? `Cart with ${cartItemCount} ${
                      cartItemCount === 1 ? "item" : "items"
                    }`
                  : "Cart"
              }
            >
              <span className="inline-flex items-center gap-2">
                <span className="relative">
                  <ShoppingCart
                    size={20}
                    aria-hidden="true"
                  />

                  {cartItemCount > 0 && (
                    <span
                      className="absolute -right-3 -top-3 flex h-5 min-w-5 items-center justify-center rounded-full bg-[#173F35] px-1 text-[10px] font-semibold text-white"
                      aria-hidden="true"
                    >
                      {cartItemCount}
                    </span>
                  )}
                </span>

              </span>
            </NavLink>
          </div>

          <button
            type="button"
            onClick={() => setIsMenuOpen((previous) => !previous)}
            className="flex h-10 w-10 items-center justify-center rounded-full text-[#173F35] transition-colors hover:bg-gray-100 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#173F35] focus-visible:ring-offset-2 md:hidden"
            aria-label={
              isMenuOpen
                ? "Close navigation menu"
                : "Open navigation menu"
            }
            aria-expanded={isMenuOpen}
            aria-controls="mobile-navigation"
          >
            {isMenuOpen ? (
              <X size={22} aria-hidden="true" />
            ) : (
              <Menu size={22} aria-hidden="true" />
            )}
          </button>
        </nav>

        {isMenuOpen && (
          <div
            id="mobile-navigation"
            className="border-t border-gray-100 bg-white md:hidden"
          >
            <div className="flex flex-col pt-2">
              {navigationItems.map((item) => (
                <NavLink
                  key={item.path}
                  to={item.path}
                  onClick={closeMenu}
                  className={({ isActive }) =>
                    `rounded-sm border-b border-gray-100 py-4 text-base font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-inset focus-visible:ring-[#173F35] ${
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
                  `flex items-center gap-2 rounded-sm border-b border-gray-100 py-4 text-base font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-inset focus-visible:ring-[#173F35] ${
                    isActive
                      ? "text-[#173F35]"
                      : "text-gray-600 hover:text-[#173F35]"
                  }`
                }
                aria-label={
                  cartItemCount > 0
                    ? `Cart with ${cartItemCount} ${
                        cartItemCount === 1 ? "item" : "items"
                      }`
                    : "Cart"
                }
              >
                <span className="relative">
                  <ShoppingCart
                    size={18}
                    aria-hidden="true"
                  />

                  {cartItemCount > 0 && (
                    <span
                      className="absolute -right-3 -top-3 flex h-5 min-w-5 items-center justify-center rounded-full bg-[#173F35] px-1 text-[10px] font-semibold text-white"
                      aria-hidden="true"
                    >
                      {cartItemCount}
                    </span>
                  )}
                </span>

              </NavLink>
            </div>
          </div>
        )}
      </Container>
    </header>
  )
}

export default Navbar