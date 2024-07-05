import React from 'react'
import { footerData } from "../components/Database/footerData"
import { footerLogo } from '../assets';
import { styles } from "../style"
import Subscribe from './form/subscribeBtn';
import EmailInput from './form/inputField';
import ScreenWidth from './functions/screenWidth';

export default function Footer() {
    const isDesktop = ScreenWidth();
    return (
        <>
            <footer className={`${styles.whiteColour} ${styles.padding1} pb-10 md:pb-5  pt-12 md:gap-12 flex flex-col`}>
                <div className={` ${styles.footerSection} md:space-between pb-20 md:pb-5`}>
                    <div className={`${styles.footerSection} md:w-[60%] xl:w-[50%]`} >
                        {footerData.map((section, index) => (

                            <div key={index} >

                                <h3
                                    className={`${styles.lightBlackText} text-100 mb-3`}>
                                    {section.title}
                                </h3>

                                <ul className={`md:flex flex-col gap-1 w-[10rem] whitespace-nowrap overflow-auto`}>
                                    {section.linkTo.map((links, linkIndex) => (
                                        <li key={linkIndex} className={`${styles.blackText} text-300`}>
                                            {links.link ?
                                                (
                                                    <a href={links.link}>
                                                        {links.name}
                                                    </a>
                                                ) :
                                                (
                                                    <p>{links.name}</p>
                                                )
                                            }
                                        </li>
                                    ))}
                                </ul>

                            </div>
                        ))}
                    </div>

                    <form
                        action="submit_data.php"
                        method="post"
                        className={`md:w-[40%] xl:w-[25%] ${styles.blackText}`}
                    >
                        <h2 className='text-500 pb-4'>Get the latest new from us</h2>
                        <EmailInput />
                        <p className='text-300 pb-4'>By signing up, you agree to our <a>Privacy Policy</a> and <a>Terms of Service.</a> </p>
                        <Subscribe />
                    </form>
                </div>

                <div className={` w-fit ${isDesktop ? "float-start" : undefined}`}>
                    <img src={footerLogo} />
                </div>
            </footer>
        </>
    );
};
