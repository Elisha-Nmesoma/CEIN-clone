import React, {useContext} from 'react'
import { styles } from '../../style'
import { searchIcon, logo, HamberMenu, userProfileIcon, favouriteIcon, shoppingBag } from '../../assets'
import NavbarMenu from './NavbarMenu'
import ScreenWidth from '../functions/screenWidth'
import { ModalContext } from '../functions/ModalPopup'
import { Link, useNavigate } from 'react-router-dom'

export default function Navbar() {
  const navigate = useNavigate();
  const isDesktop = ScreenWidth();

  const { handleShow,handleClose, searchOpen } = useContext(ModalContext);

  return (
    <>
      <nav >
        <div className={`flex justify-between w-full py-3 px-3 md:px-8 items-center ${styles.bottomBorder} `}>

          {/* the left navbar */}
          <div className="flex gap-3.5 items-center justify-between md:justify-center flex-row-reverse md:flex-row w-[60%] md:w-fit">
            <div>
              {/* the website main logo */}
              <img
                src={logo}
                alt='main logo'
                className={`${styles.bigLogo}`}
                onClick={()=> {
                  navigate(`/`);
                  handleClose();
                }}/>
            </div>

            <div>
              {isDesktop ? (
                <div>
                  <NavbarMenu />
                </div>
              ) : (
                <div className={`${styles.navIcon} w-[1.1rem]`}>
                  <img src={HamberMenu} alt="mobileNavIcon" className='w-full object-cover' onClick={handleShow} />
                </div>
              )}
            </div>
          </div>


          {/* left nav houses the profile,cart and favourite items */}
          <div className={`${styles.flexRow}`}>
            <div className={`${styles.navIcon}`} >
              <img
                src={searchIcon}
                alt='searchIcon'
                onClick={searchOpen}
              />
            </div>

            <Link to={"/stores/"} onClick={handleClose}>Stores</Link>

            <div className={`${styles.navIcon} ${styles.hidden}`}>
              <img
                src={userProfileIcon}
                alt='user profile icon'
                onClick={()=> navigate(`/users/user`)}
              />
            </div>

            <div className={`${styles.navIcon} gap-0.5`}>
              <img
                src={favouriteIcon}
                alt='user wish list'
              />
              <p className='text-100 '>0</p>
            </div>

            <div className={`${styles.navIcon} gap-0.5`}>
              <img
                src={shoppingBag}
                alt='shopping bag'
              />
              <p className='text-100'>0</p>
            </div>


          </div>
        </div>
      </nav>
    </>
  )
}
