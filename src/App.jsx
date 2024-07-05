import React, { useContext } from 'react';
import { ModalContext } from './components/functions/ModalPopup';
import './App.css'
import DropDown from './components/Navigation/dropdown'
import Search from './components/filter/search'
import { Route, Routes } from 'react-router-dom';
import Layout from './components/Navigation/layout';
import Shop from './components/shops/Shop';
import NewArrivals from './components/shops/newArrivals';
import Sales from './components/shops/sales';
import Journal from './components/shops/journal';
import UserProfile from './components/shops/userProfile';
import Stores from './components/shops/Store';
import ErrorPage from './components/ErrorPage';
import LandingPage from './components/landingPage/landingPage';
import ScreenWidth from './components/functions/screenWidth'
import Promotion from './components/cards/Promotion';
import ProductDatails from './components/shops/productDatail';
import Cart from './components/shops/Cart';
import SignUp from './components/usersProfile/SignUp';
import Clothing from './components/state/clothing';

function App() {
  const isDesktop = ScreenWidth()
  const { showModal, showSearch, shopSignUp } = useContext(ModalContext)
  return (
    <>
      <div className='bg-neutral-50 relative' >
        <Routes >
          <Route path="/" element={<Layout />}>
            <Route index element={<LandingPage />} />
            <Route path="/shops/newArrivals" element={<NewArrivals />} />
            <Route path="/sales" element={<Sales />} />
            <Route path="/journal" element={<Journal />} />
            <Route path="/profile" element={<UserProfile />} />
            <Route path="/stores/" element={<Stores />} />
            {/* <Route path='/shops/Clothing' element ={<ProductDatails />} /> */}
            <Route path='/shops/Clothing/cart' element={<Cart />} />
            <Route path='/SignUp/' element={<SignUp />} />
            <Route path='/shops/Clothing' element={<Clothing />} />
          </Route>
          <Route path="*" element={<ErrorPage />} />
        </Routes>


        <div>

          {showModal && (<div className={isDesktop ? "absolute w-[100vw] top-[5rem] bg-Dim" : "w-[100vw] absolute top-0 left-0"}><DropDown /> </div>)}
          {showSearch && <Search />}
          {shopSignUp && <Promotion />}
        </div>
      </div>
    </>
  )
}

export default App
