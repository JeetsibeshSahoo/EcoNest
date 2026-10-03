import Navbar from '../components/layout/Navbar'
import { Outlet } from 'react-router-dom'
import Footer from '../components/layout/Footer'
import ScrollToTop from '../components/common/ScrollToTop'

function MainLayout() {
  return (
    <div className='flex min-h-screen flex-col'>
        <Navbar />
        <ScrollToTop />
        <div className='flex-1'>
            <Outlet />
        </div>
        <Footer />
    </div>
  )
}

export default MainLayout
