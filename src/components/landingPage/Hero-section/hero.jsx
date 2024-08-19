import React, { useState, useEffect } from 'react'
import { heroData } from "../../Database/landingPageData"
import { styles } from "../../../style"
import ShopNow from './shop-now-botton'
import ScreenWidth from '../../functions/screenWidth'


export default function Hero() {
  const isDesktop = ScreenWidth()
  return (
    <div>
      <div className=" relative">

        {heroData.map(item => (
          <div>
            <div key={item.id} className='w-full h-[calc(100vh-5rem)] relative'>
              <img
                src={isDesktop? item.imgDesktop : item.imgMobile}
                alt="collectionBanner"
              />
            </div>
            <div key={item.id} className="px-6 md:px-10 absolute bottom-[8%] md:bottom-[15%] -left-2 ">
              <h2 className={`${styles.whiteText} text-900 w-52 mb-3  `}>{item.text}</h2>
              <div>
                <ShopNow />
              </div>
            </div>
          </div>

        ))}

      </div>
    </div>
  )
}
