import { Route, Routes } from 'react-router-dom'
import Home from '../pages/Home'
import About from '../pages/About'
import Products from '../pages/Products'
import Contact from '../pages/Contact'
import MainLayout from '../layouts/MainLayout'
import ProductDetails from '../pages/ProductDetails'
import Cart from '../pages/Cart'
import NotFound from '../pages/NotFound'

function AppRoutes() {
  return (
    <Routes>
        <Route element={<MainLayout />} >
          <Route path='/' element={<Home />} />
          <Route path='/about' element={<About />} />
          <Route path='/products' element={<Products />} />
          <Route 
            path='/products/:slug' 
            element={<ProductDetails />} 
          />
          <Route path='/cart' element={<Cart />} />
          <Route path='/contact' element={<Contact />} />
          <Route path="*" element={<NotFound />} />
        </Route>
    </Routes>
  )
}

export default AppRoutes
