import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { styles } from '../../style'
import { menuLinks, shops } from '../Database/landingPageData'
import { useAuth } from '../auth/authContex'


const MobileMenu = () => {
  const { user } = useAuth();
  const [shop, setShop] = useState(false);
  const shopClick = () => { setShop(!shop) };

  const [category, setCategory] = useState(false);
  const categoryClick = () => { setCategory(!category) };
  return (
    <div
      className='absolute z-10 h-screen w-full md:hidden overflow-auto text-300 bg-neutral-50'
      style={{ backgroundColor: "rgba(17, 24, 39, 0.5)" }}>
      {/* shop conatiner */}
      <div className='p-4 w-[60%] bg-neutral-50 h-full'>
        {/* shop link */}
        <p className='p-4 cursor-pointer' onClick={shopClick} >Shop</p>
        {/* category container */}
        {shop && (
          <div className='flex flex-col gap-4 text-200'>
            {shops.map((item) => (
              <div className={`pl-8 ${styles.whiteText2}`}>
                {/* category text */}
                <p className='cursor-pointer ' onClick={categoryClick}>{item.title}</p>
                {/* category section */}
                {category && (
                  <div className=' px-2 w-fit mt-2 border-l-2'>
                    {item.categories.map((index) => (
                      <div key={index.id}
                        className='cursor-pointer p-2 '>
                        <Link to={index.url} onClick={() => setIsOpen(false)}>{index.title}</Link>
                      </div>
                    ))}
                  </div>
                )}
              </div>
            ))
            }
          </div>
        )}

        {/* other menu link */}
        {menuLinks.map(item => (
          <div className='p-4 w-[75%] '>
            <Link key={item.id} to={item.url} onClick={() => setIsOpen(false)}>{item.title}</Link>
          </div>
        ))}

        {/* account menu links */}
        {user ? (
          <div className={`p-4 w-[75%] ${styles.whiteText2} text-200`}>
            <Link to="/account" onClick={() => setIsOpen(false)}>Account</Link>
          </div>
        ) : (
          <div className={`p-4 w-[75%] ${styles.whiteText2} text-200`}>
            <Link to="/auth/login" onClick={() => setIsOpen(false)}>Login</Link>
          </div>
        )}
        <div className={`p-4 w-[75%] ${styles.whiteText2} text-200`}>
          <Link to="/stores" onClick={() => setIsOpen(false)}>Stores</Link>
        </div>


      </div>
    </div>

  )

}

export default MobileMenu