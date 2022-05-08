import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Blogs from './pages/Blogs';
import Home from './pages/Home';
import Products from './pages/Products';
import SingleBlog from './pages/SingleBlog';

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/products' element={<Products />} />
        <Route path='/blogs' element={<Blogs />} />
        <Route path='/blogs/:blogName' element={<SingleBlog />} />
      </Routes>
    </BrowserRouter>
  )
}