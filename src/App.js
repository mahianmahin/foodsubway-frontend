import { BrowserRouter, Route, Routes } from 'react-router-dom';
import AboutUs from './pages/AboutUs';
import Blogs from './pages/Blogs';
import Checkout from './pages/Checkout';
import ContactUs from './pages/ContactUs';
import Dashboard from './pages/Dashboard';
import EditProfile from './pages/EditProfile';
import Home from './pages/Home';
import Login from './pages/Login';
import OrderDone from './pages/OrderDone';
import Privacy from './pages/Privacy';
import ProductDetails from './pages/ProductDetails';
import Products from './pages/Products';
import Signup from './pages/Signup';
import SingleBlog from './pages/SingleBlog';

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/dashboard' element={<Dashboard />} />
        <Route path='/profile' element={<EditProfile />} />
        <Route path='/products' element={<Products />} />
        <Route path='/login' element={<Login />} />
        <Route path='/signup' element={<Signup />} />
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