import { NavLink } from "react-router-dom"
import Container from "../common/Container"
import { navigationItems } from "../../data/navigation"

function Footer() {
  return (
    <footer className="border-t border-gray-200 bg-[#F7F6F1]">
      <Container className="py-12 lg:py-16">
        <div className="grid gap-10 md:grid-cols-3">
          <div className="max-w-sm">
            <NavLink
              to="/"
              className="inline-block rounded-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#173F35] focus-visible:ring-offset-2"
              aria-label="EcoNest home"
            >
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
                  className="w-fit rounded-sm text-sm text-gray-600 transition-colors hover:text-[#173F35] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#173F35] focus-visible:ring-offset-2"
                >
                  {item.name}
                </NavLink>
              ))}
            </nav>
          </div>

          <div>
            <h2 className="text-sm font-semibold uppercase tracking-[0.15em] text-[#173F35]">
              Get in touch
            </h2>

            <div className="mt-5 space-y-3 text-sm text-gray-600">
              <a
                href="mailto:hello@econest.com"
                className="block w-fit rounded-sm transition-colors hover:text-[#173F35] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#173F35] focus-visible:ring-offset-2"
              >
                hello@econest.com
              </a>

              <p>Bhubaneswar, Odisha</p>
            </div>
          </div>
        </div>

        <div className="mt-12 border-t border-gray-200 pt-6">
          <p className="text-center text-xs text-gray-500">
            © {new Date().getFullYear()} EcoNest. All rights reserved.
          </p>
        </div>
      </Container>
    </footer>
  )
}

export default Footer