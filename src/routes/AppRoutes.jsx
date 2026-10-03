import { lazy, Suspense } from "react"
import { Route, Routes } from "react-router-dom"
import MainLayout from "../layouts/MainLayout"
const Home = lazy(() => import("../pages/Home"))
const About = lazy(() => import("../pages/About"))
const Products = lazy(() => import("../pages/Products"))
const ProductDetails = lazy(
  () => import("../pages/ProductDetails")
)
const Cart = lazy(() => import("../pages/Cart"))
const Contact = lazy(() => import("../pages/Contact"))
const NotFound = lazy(() => import("../pages/NotFound"))

function PageLoader() {
  return (
    <main className="flex min-h-[60vh] items-center justify-center bg-white px-6 py-16">
      <div
        className="text-center"
        role="status"
        aria-live="polite"
      >
        <div
          className="mx-auto h-10 w-10 animate-spin rounded-full border-4 border-gray-200 border-t-[#173F35]"
          aria-hidden="true"
        />

        <p className="mt-4 text-sm font-medium text-gray-500">
          Loading page...
        </p>
      </div>
    </main>
  )
}

function AppRoutes() {
  return (
    <Suspense fallback={<PageLoader />}>
      <Routes>
        <Route element={<MainLayout />}>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/products" element={<Products />} />
          <Route
            path="/products/:slug"
            element={<ProductDetails />}
          />
          <Route path="/cart" element={<Cart />} />
          <Route path="/contact" element={<Contact />} />

          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>
    </Suspense>
  )
}

export default AppRoutes
