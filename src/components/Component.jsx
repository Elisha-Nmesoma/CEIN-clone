import React from 'react';
import LandingPage from '../components/landingPage/landingPage';
import Promotion from "../components/cards/Promotion"
import Shop from './shops/Shop';



export default function Component () {
  return (
    <div className='z-0'>
      <LandingPage /> 
       {/* <Shop />  */}


       <div>
          <dialog> <Promotion /> </dialog>
        </div>
    </div>
  )
}

