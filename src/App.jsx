import React, {  useState, useEffect } from 'react';
import './App.css';
import { Routes, Route, useLocation } from 'react-router-dom';
import ErrorPage from './components/ErrorPage';
import Promotion from './components/cards/Promotion';
import LandingPage from './components/landingPage/landingPage';
import Notification from './components/Navigation/Notification';
import DropDown from './components/Navigation/dropdown';
import Layout from './components/Navigation/layout';
import { FAQ, Delivery,Returns,Payments,Information, } from './imports/FAQ';
import { Profile,Orders, Favourites,Bag, Payment,ShippingAddress,Reviews, } from './imports/accounts';
import { Shop, NewArrivals,Sales,Journal,Stores,ProductDetails,Cart,Clothing } from './imports/shops';
import {Login, SignOut, SignUp, AuthFooter} from './imports/auth'
import { useAuth } from './components/auth/authContex';


function App() {
  const location = useLocation();
  const previousLocation = location.state?.previousLocation;
  const [isLoading, setIsLoading] = useState(true);
  const {user} =useAuth();
  const [showPromotion, setShowPromotion] = useState(false);

  useEffect(() =>{
    const timer = setTimeout(() => {
      setShowPromotion(true);
    }, 9000); // 5000 milliseconds = 5 seconds

    return () => clearTimeout(timer);
  },[])
  // close promotion
  const closePromotion = () => {
    setShowPromotion(false)
  }

  


  return (
    <>
      <div className='bg-neutral-50 relative' >
        {!user ? (
          showPromotion && <Promotion closePromotion={closePromotion}  />
        ): null}
        <Routes location={previousLocation || location}>
          <Route path="/" element={<Layout />}>
            <Route index element={<LandingPage />} />

            <Route path='shops' >
              <Route path="newArrivals" element={<NewArrivals />} />
              <Route path='Clothing' element={<Clothing />} >
                <Route path='product/:id' element={<ProductDetails />} />
                <Route path='cart' element={<Cart />} />
              </Route>
            </Route>


            <Route path="/account" element={<Profile />}>
              <Route path='favourites' element={<Favourites />} />
              <Route path='bag' element={<Bag />} />
              <Route path='orders' element={<Orders />} />
              <Route path='shipping' element={<ShippingAddress />} />
              <Route path='payment' element={<Payment />} />
              <Route path='reviews' element={<Reviews />} />
            </Route>
            <Route path='bag' element={<Bag />} />
            <Route path='orders' element={<Orders />} />

            <Route path="sales" element={<Sales />} />
            <Route path="journal" element={<Journal />} />
            <Route path="stores" element={<Stores />} />
          </Route>

          <Route path='auth' element={<AuthFooter />}>
            <Route path='Login' element={<Login />} />
            <Route path='signup' element={<SignUp />} />
            <Route  path="signout" element={<SignOut />}/>
          </Route>



          <Route path='fag' element={<FAQ />}>
            <Route index element={<Delivery />} />
            <Route path='returns' element={<Returns />} />
            <Route path='payments' element={<Payments />} />
            <Route path='information' element={<Information />} />
            <Route path='personal_data_and_notification' element={<Notification />} />
          </Route>
          <Route path="*" element={<ErrorPage />} />
        </Routes>




        {previousLocation && (
          <Routes>
            <Route path="/shop" element={ <DropDown />} />
          </Routes>
        )}

      </div>

     
    </>
  )
}

export default App
