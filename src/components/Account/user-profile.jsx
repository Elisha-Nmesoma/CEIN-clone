import React, { useEffect, useState } from 'react'
import { styles } from '../../style'
import { useSelector } from 'react-redux'
import ScreenWidth from '../functions/screenWidth'
import { Link, useLocation, Outlet } from 'react-router-dom'
import Orders from './orders'
import { next } from '../../assets';
import { userAccount } from '../Database/landingPageData'
import { useAuth } from '../auth/authContex'

const Account = () => {
    const {user} = useAuth();
    console.log(user.displayName)
    return (
        <div className={`${styles.blackText} ${styles.flex5} md:gap-3`}>
            <h1 className={`text-800`}>My account </h1>

            <div className={`flex gap-4 items-start`}>
                <div className='w-[2.7rem] h-[2.5rem] rounded-full'><img src={user.photoURL} alt='displayImage' className="rounded-full object-cover"/></div>
                <div>
                    <p className='-mt-1 text-400 font-semibold'>{user.displayName}</p>
                    <p className={`${styles.whiteText2} text-100`}>{user.email}</p>
                </div>
            </div>
        </div>
    )
}
const AccountDetails = () => {
    const location = useLocation();
    return (
        <div className={`md:rounded-sm md:bg-neutral-200 md:text-neutral-700 p-2 ${styles.flex5}`}>
            {userAccount.map((item) => (
                <Link to={item.url} className='profile_grid'>
                    {/* user text */}
                    <div key={item.id} className='col-start-1 col-end-3 text-start'>
                        <h4 className='account_text'>{item.title}</h4>
                    </div>

                    {/* link to */}
                    <div className='col-start-4 col-end-4 m-auto w-auto h-fit'>
                        <div className='w-[.875rem]'>
                            <img src={next} alt="next" />
                        </div>
                    </div>
                </Link>
            ))}


            <Link to='/auth/signout' className='text-start'>
                <button className='account_text '>
                    Sign Out
                </button>
            </Link>
        </div>

    )
}

export default function Profile() {
    const isDesktop = ScreenWidth();
    const {user} = useAuth()
    return (
        <div>
            {user ? (
                <div className={` py-10 md:py-5 px-3 md:px-8 bg-neutral-100 relative h-[calc(100vh-5.1rem)] lg:h-[calc(100vh-5.1rem)] overflow-auto `}>
                <div className={`${styles.flex10} md:gap-1 md:items-start`}>
                    <Account />
                    <AccountDetails />
                </div>
            </div>
            ) : null}
            {isDesktop ? <Outlet /> : undefined}
        </div>

    );
};



