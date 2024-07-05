import React, { useContext } from 'react'
import { close } from "../../assets/index"
import { styles } from "../../style"
import { ModalContext } from '../functions/ModalPopup'
import ScreenWidth from '../functions/screenWidth'
import { Link } from 'react-router-dom'

export default function DropDown() {

  const isDesktop = ScreenWidth();
  const { handleClose } = useContext(ModalContext);

  return (
      <div className='relative z-50 bg-neutral-50'>
        <div className={`${styles.Bhidden} p-6 border-b-natural-900 border-b-[.02rem] `}>
          <img src={close} className={`${styles.closeIcon} `} onClick={handleClose} />
        </div>

        <div className='p-6 md:pl-3 md:pr-5 md:flex md:justify-between text-100 leading-10 md:leading-5 ' onClick={handleClose}>
          <p className={`${styles.Bhidden} `}>Shop</p>

          <div className=' md:flex md:gap-8 md:justify-between md:p-2 pl-2 pr-2 border-b-natural-900 md:border-b-0 border-b-[.1rem] w-full md:w-[25%] h-fit md:ml-[5.5rem] '>

            <div className={`${styles.hidden}`} >
              <p className={`${styles.whiteText2} md:pb-2 text-100`}>Categories</p>
              <ul 
              className={`${isDesktop ? styles.blackText : styles.whiteText2} 
              border-s-natural-900 md:border-s-0 border-s-[.1rem] md:flex md:flex-col md:items-start md:justify-start  md:gap-x-8  `}
               >
                <Link to="/shops" >Bags</Link>
                <Link to="/shops/Clothing">Clothing</Link >
                <Link to="/shops">{isDesktop ? "" : "Small"} Leather Goods</Link>
                <Link to="/shops">Accessories</Link>
                <Link  to="/shops">Gifts</Link>
                <Link to ="shops">Shop All</Link>
              </ul>
            </div>

            <div className={`${styles.hidden}`} >
              <p className={`${styles.whiteText2} md:pb-2 text-100`}>Categories</p>
              <ul 
              className={`${isDesktop ? styles.blackText : styles.whiteText2} 
              border-s-natural-900 md:border-s-0 border-s-[.1rem] md:flex md:flex-col md:items-start md:justify-start  md:gap-x-8  `}
               >
                <Link to="/shops" >Bags</Link>
                <Link to="/shops/Clothing">Clothing</Link >
                <Link to="/shops">{isDesktop ? "" : "Small"} Leather Goods</Link>
                <Link to="/shops">Accessories</Link>
                <Link  to="/shops">Gifts</Link>
                <Link to ="shops">Shop All</Link>
              </ul>
            </div>
            <div className={`${styles.hidden}`} >
              <p className={`${styles.whiteText2} md:pb-2 text-100`}>Categories</p>
              <ul 
              className={`${isDesktop ? styles.blackText : styles.whiteText2} 
              border-s-natural-900 md:border-s-0 border-s-[.1rem] md:flex md:flex-col md:items-start md:justify-start  md:gap-x-8  `}
               >
                <Link to="/shops" >Bags</Link>
                <Link to="/shops">Clothing</Link >
                <Link to="/shops">{isDesktop ? "" : "Small"} Leather Goods</Link>
                <Link to="/shops">Accessories</Link>
                <Link  to="/shops">Gifts</Link>
                <Link to ="shops">Shop All</Link>
              </ul>
            </div>
          </div>

          <div className={`${styles.hidden}  w-[18rem] xl:w-[22rem] h-[20rem] lg:h-[22rem] xl:h-[26rem] bg-blue-600 `}>
            <img src="https://res.cloudinary.com/dyknfomwp/image/upload/v1717592761/e-commerce-app/f3_spcawv.jpg" className=' h-full' />
          </div>
        </div>
      </div>
  )
}
