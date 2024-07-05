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
            <div key={item.id} className='w-full h-full'>
              <img
                src={isDesktop? item.imgDesktop : item.imgMobile}
                alt="collectionBanner"
                className=' object-cover w-full'
              />
            </div>
            <div key={item.id} className="px-10 absolute bottom-[10%] -left-2">
              <h2 className={`${styles.whiteText} text-900 xs:w-36 md:w-52 mb-3  `}>{item.text}</h2>
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
