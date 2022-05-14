import { BrowserRouter, Route, Routes } from 'react-router-dom';
import AboutUs from './pages/AboutUs';
import Blogs from './pages/Blogs';
import Checkout from './pages/Checkout';
import ContactUs from './pages/ContactUs';
import Home from './pages/Home';
import OrderDone from './pages/OrderDone';
import Privacy from './pages/Privacy';
import ProductDetails from './pages/ProductDetails';
import Products from './pages/Products';
import SingleBlog from './pages/SingleBlog';

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/products' element={<Products />} />
        <Route path='/blogs' element={<Blogs />} />
        <Route path='/about' element={<AboutUs />} />
        <Route path='/contact' element={<ContactUs />} />
        <Route path='/privacy-policy' element={<Privacy />} />
        <Route path='/products/:productName/checkout' element={<Checkout />} />
        <Route path='/products/:productName/checkout/completed' element={<OrderDone />} />
        <Route path='/blogs/:blogName' element={<SingleBlog />} />
        <Route path='/products/:productName' element={<ProductDetails />} />
      </Routes>
    </BrowserRouter>
  )
}