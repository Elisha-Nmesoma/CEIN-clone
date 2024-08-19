import React, { useContext, useState } from 'react'
import { styles } from '../../style'
import { searchIcon, logo, HamberMenu, userProfileIcon, favouriteIcon, shoppingBag, close, addCart } from '../../assets'
import NavbarMenu from './NavbarMenu'
import MobileMenu from './MobileMenu'
import ScreenWidth from '../functions/screenWidth'
import { Link, useNavigate, useLocation } from 'react-router-dom'
import Search from '../filter/search'
import { useAuth } from '../auth/authContex'

const Navbar = () => {
  const {user} = useAuth();
  const navigate = useNavigate();
  const location = useLocation();
  const isDesktop = ScreenWidth();
  const [isOpen, setIsOpen] = useState(false);
  const [search, setSearch] = useState(false);
  const openSearch = () => {
    setSearch(true),
      setIsOpen(false),
      document.body.style.overflow = 'hidden'
  };
  const closeSearch = () => {
    setSearch(false),
      document.body.style.overflow = 'auto'
  };


  return (
    <>
      <nav >
        <div className={`flex justify-between w-full py-3 px-3 md:px-8 items-center ${styles.bottomBorder} `}>

          {/* the left navbar */}
          <div className="flex gap-3.5 items-center justify-between md:justify-center flex-row-reverse md:flex-row w-[60%] md:w-fit">
            <Link to="/">
              {/* the website main logo */}
              <img
                src={logo}
                alt='main logo'
                className={`${styles.bigLogo}`}
                onClick={() => { handleClose() }} />
            </Link>

            <div>
              {isDesktop ? (
                <div>
                  <NavbarMenu />
                </div>
              ) : (
                <div className={`${styles.navIcon} w-[1.1rem] cursor-pointer`} >
                  {!isOpen ? (
                    <img src={HamberMenu} alt="mobileNavIcon" onClick={() => {
                      setIsOpen(true),
                        setSearch(false),
                        document.body.style.overflow = 'hidden'
                    }} />
                  ) : (
                    <img src={close} alt="" onClick={() => {
                      setIsOpen(false),
                        document.body.style.overflow = 'auto'
                    }
                    } />
                  )}
                </div>
              )}
            </div>
          </div>


          {/* left nav houses the profile,cart and favourite items */}
          <div className={`${styles.flexRow}`}>
            <div className={`${styles.navIcon}`} onClick={openSearch} >
              <img
                src={searchIcon}
                alt='searchIcon'
              />
            </div>

            <Link to={"stores"}>{isDesktop ? "Stores" : ""}</Link>

            {/* account image */}
            {user ? (
              <div className={`${styles.navIcon} ${styles.hidden}`}>
              <Link to="/account">
                <img
                  src={userProfileIcon}
                  alt='account'
                />
              </Link>
            </div>

            ) : null}
            <div className={`${styles.navIcon} gap-0.5 text-100 `}>
              <img
                src={favouriteIcon}
                alt='user wish list'
              />
              <p>0</p>
            </div>

            <div className={`${styles.navIcon} gap-0.5 text-100 `}>
              <img
                src={shoppingBag}
                alt='shopping bag'
              />
              <p>0</p>
            </div>

          </div>

        </div>
      </nav>
      {isOpen && <MobileMenu />}
      {search && <Search closeSearch={closeSearch} />}
    </>
  )
}

export default Navbar