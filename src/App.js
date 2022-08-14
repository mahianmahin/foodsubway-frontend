import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Construction from './components/Construction';
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

export const UtilitiesContext = React.createContext();

export default function App() {
  const utilities = {
    baseUrl: "http://127.0.0.1:8000"
  }


  return (
    <BrowserRouter>
      <Switch>
        <UtilitiesContext.Provider value={utilities}>
          <Construction />
          {/* <Route path='/' element={<Home />} /> */}
          <Route exact path='/'> <Home /> </Route>
          <Route exact path='/dashboard'> <Dashboard /> </Route>
          <Route exact path='/profile'> <EditProfile /> </Route>
          <Route exact path='/products'> <Products /> </Route>
          <Route exact path='/login'> <Login /> </Route>
          <Route exact path='/signup'> <Signup /> </Route>
          <Route exact path='/blogs'> <Blogs /> </Route>
          <Route exact path='/about'> <AboutUs /> </Route>
          <Route exact path='/contact'> <ContactUs /> </Route>
          <Route exact path='/privacy-policy'> <Privacy /> </Route>
          <Route exact path='/products/:productCode/checkout'> <Checkout /> </Route>
          <Route exact path='/products/:productCode/checkout/completed'> <OrderDone /> </Route>
          <Route exact path='/blogs/:blogName'> <SingleBlog /> </Route>
          <Route exact path='/products/:productCode'> <ProductDetails /> </Route>
        </UtilitiesContext.Provider>
      </Switch>
    </BrowserRouter>
  )
}