import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom';
import { useState } from 'react';

import NavScrollExample from './NavBar';
import About from './About';
import Banner from './Banner';
import Login from './Login';
import ProductDetails from './ProductDetails';
import Cards from './Cards';
import BuyingPage from './BuyingPage';
import Profile from './MyProfile';
import MyOrders from './MyOrders';
import PaymentMethod from "./PaymentMethod";
import ContactUs from './ContactUs';

const App = () => {

  const [search, setSearch] = useState("");

  return (
    <>
      <BrowserRouter>

        <NavScrollExample setSearch={setSearch} />

        <Routes>

          <Route path='/' element={<Navigate to="/home" />} />

          <Route
            path='/home'
            element={
              <>
                <Banner />
                <Cards search={search} />
              </>
            }
          />
          
          <Route path='/about' element={<About />} />
          <Route path='/login' element={<Login />} />
          <Route path='/products' element={<ProductDetails />} />
          <Route path='/payment' element={<BuyingPage/>}></Route>
          <Route path='/profile' element={<Profile></Profile>}></Route>
          <Route path='/orders' element={<MyOrders></MyOrders>}></Route>
          <Route path="/payment-method" element={<PaymentMethod />} />
          <Route path='/support' element={<ContactUs></ContactUs>}></Route>
        </Routes>

      </BrowserRouter>
    </>
  );
};
export default App;