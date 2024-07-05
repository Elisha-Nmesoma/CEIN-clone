import React, { useState } from 'react'
import { HamberMenu, close } from '../../assets'
import { styles } from "../../style"
import ScreenWidth from '../functions/screenWidth'

export default function BuggerMenu() {

    const isDesktop = ScreenWidth()

    const [showModal, setShowModal] = useState(false);
    return (
        <div>
            <div className={`${styles.navIcon} w-[1.3rem]`}>
                <img src={HamberMenu} alt="mobileNavIcon" className='w-full object-cover' onClick={handleShow} />
            </div>

            { showModal && (
                 <div>

                 <div className={`${styles.hidden}`}>
                   <Navbar />
                 </div>
           
           
                 <div className={`${styles.Bhidden} p-6 border-b-natural-900 border-b-[.02rem] bg-neutral-100 `}>
                     <img src={close} className={`${styles.closeIcon}`} onClick={handleClose} />
                   </div>
           
           
                 <div className='p-6 md:flex md:flex-row md:justify-between bg-neutral-100 '>
                   <div className='md:flex md:flex-row md:gap-16 md:ml-[5.5rem] text-300 leading-10'>
                     <div className=' border-b-natural-900 border-b-[.1rem] w-full py-2'>
           
                       <p className={`${styles.Bhidden} `}>Shop</p>
                       <div className={`${styles.Bhidden}`} >
                         <p className={`${styles.whiteText2} pl-2`}>Categories</p>
           
                         <ul className={` ${isDesktop ? styles.blackText:styles.whiteText2 } border-s-natural-900 border-s-[.1rem] h-fit ml-2 pl-4 `}>
                           <li>Bags</li>
                           <li>Clothing</li>
                           <li>{isDesktop ? "" : "Small"} Leather Goods</li>
                           <li>Accessories</li>
                           <li>Gifts</li>
                           <li>Shop All</li>
                         </ul>
                       </div>
           
                       <div className={``} >
                         <p className={`${styles.whiteText2} pl-2`}>Categories</p>
                         <ul className={`{ isDesktop ? ${styles.blackText} : ${styles.whiteText2}} border-s-natural-900 border-s-[.1rem] h-fit  bg-grat-200 pl-6 ${styles.hidden}`}>
                           <li>Bags</li>
                           <li>Clothing</li>
                           <li>{isDesktop ? "" : "Small"} Leather Goods</li>
                           <li>Accessories</li>
                           <li>Gifts</li>
                           <li>Shop All</li>
                         </ul>
                       </div>
           
                       <div className={``} >
                         <p className={`${styles.whiteText2} pl-2`}>Categories</p>
                         <ul className={`{ isDesktop ? ${styles.blackText} : ${styles.whiteText2}} border-s-natural-900 border-s-[.1rem] h-fit  bg-grat-200 pl-4 ${styles.hidden}`}>
                           <li>Bags</li>
                           <li>Clothing</li>
                           <li>{isDesktop ? "" : "Small"} Leather Goods</li>
                           <li>Accessories</li>
                           <li>Gifts</li>
                           <li>Shop All</li>
                         </ul>
                       </div>
                     </div>
                   </div>
                   <div className={`${styles.hidden} w-64 h-72 lg:w-[22rem] lg:h-96`}>
                        <img src="https://res.cloudinary.com/dyknfomwp/image/upload/v1717592761/e-commerce-app/f3_spcawv.jpg" className='h-full'/>
                     </div>
                 </div>
               </div>
            )}
        </div>
    )
}
