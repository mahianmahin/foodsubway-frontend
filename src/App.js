import { BrowserRouter, Route, Routes } from 'react-router-dom';
import AboutUs from './pages/AboutUs';
import Blogs from './pages/Blogs';
import ContactUs from './pages/ContactUs';
import Home from './pages/Home';
import Privacy from './pages/Privacy';
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
        <Route path='/blogs/:blogName' element={<SingleBlog />} />
      </Routes>
    </BrowserRouter>
  )
}