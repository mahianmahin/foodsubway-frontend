import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import Products from './pages/Products';

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        {/* <div className='d-flex justify-content-center' style={{padding: '5px', backgroundColor: 'orange', fontWeight: 'bold', textAlign: 'center'}}>This website is currently under construction!</div> */}
        <Route path='/' element={<Home />} />
        <Route path='/products' element={<Products />} />
      </Routes>
    </BrowserRouter>
  )
}