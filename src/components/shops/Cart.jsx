import React from 'react'
import { styles } from '../../style'
import { close, addCart } from '../../assets'
import ScreenWidth from '../functions/screenWidth'

export default function Cart() {
    const isDesktop = ScreenWidth()
    return (
        <div className='flex-1 p-4 md:p-7 flex flex-col md:justify-center md:items-center gap-7 '>
            <h2 className='text-400 text-center '>Shopping Bag</h2>
            <div className=' flex flex-col md:flex-row gap-3 items-start md:flex-wrap'>

                <div className=' w-full md:w-fit border rounded-sm mb-4 pt-2 px-1 text-100 flex flex-col '>
                    <div className={`${styles.bottomBorder} pb-4 flex flex-col items-center gap-2`}>

                        <div className={` flex gap-4 ${isDesktop ? "items-start justify-start" : " pl-5 w-full justify-between"}`}>
                            <h2 className={`${styles.blackText} -mt-1 text-300 md:text-200 leading-5  flex justify-center items-center flex-wrap `}>Alpaca Wool Crewneck Sweater</h2>
                            <div className='w-[.6rem] float-end'> <img src={close} /> </div>
                        </div>

                        <p className={`${styles.whiteText2} text-start`}> {/*color */} Belge</p>

                        <div className={` bg-neutral-800 w-36 h-44 md:w-28 md:h-36`}>
                            <img />
                        </div>

                        <div className={` rounded-2xl border`}>
                            <p className='flex justify-between gap-3 items-center px-2 py-1 text-100'>
                                <button>
                                    <img src={addCart} className='w-[.56rem]' />
                                </button>
                                1
                                <button>
                                    <img src={addCart} className='w-[.56rem]' />
                                </button>
                            </p>
                        </div>
                    </div>
                    <div className={`${styles.whiteText2} flex items-center justify-between p-3 text-100`}>
                        <p>Subtotal</p>
                        <p> {/*price*/} $200</p>
                    </div>
                </div>




                <div className={` w-full md:w-fit md:ml-12 flex flex-col gap-2 text-100 ${styles.blackText}`}>
                    <div>
                        <ul className='order-summary border rounded-[0.25rem] '>
                            <li className='text-center'>Order Summary</li>
                            <li>Subtotal<span className='float-end'>$200</span></li>
                            <li>Bag Total <span className='float-end'>$200</span></li>
                        </ul>
                    </div>

                    <div className='border rounded-[0.25rem] flex flex-col gap-2 p-3'>
                        <p>Add a gift message to your order</p>
                        <textarea className='text-200 resize-none border rounded-sm p-1 w-full h-20 md:h-16 outline-none tracking-wider' />
                    </div>

                    <div className={` w-full flex flex-col gap-3 text-100`}>
                        <p className={`${styles.whiteText2}`}>Shipping & taxes calculated at checkout</p>
                        <button
                            className={`${styles.Button}`} >
                            Go To Checkout $200
                        </button>
                    </div>
                </div>
            </div>

            <div className='text-100 flex flex-col gap-3'>
                <h2 className="text-400 text-center">What to Wear Now</h2>
                <div className={isDesktop ? 'flex items-center justify-center' : undefined}>
                    <div className={` flex gap-3 whitespace-nowrap overflow-x-scroll hide-scrollbar ${isDesktop ? "p-7 items-center justify-start flex-wrap w-[45rem]" : "p-3 "}`}>

                        <div className={styles.flex2}>
                            <div className='relative'>
                                <div className='bg-red-400 w-full h-48'> <img /></div>
                                <div className='w-[.7rem] absolute bottom-2 right-1'> <img src={addCart} /></div>
                            </div>
                            <div className={styles.flex1}>
                                <p>Alpaca Wool Crewneck Sweater</p>
                                <p>$200</p>
                            </div>
                        </div>

                        <div className={styles.flex2}>
                            <div className='relative'>
                                <div className='bg-red-400 w-full h-48'> <img /></div>
                                <div className='w-[.7rem] absolute bottom-2 right-1'> <img src={addCart} /></div>
                            </div>
                            <div className={styles.flex1}>
                                <p>Alpaca Wool Crewneck Sweater</p>
                                <p>$200</p>
                            </div>
                        </div>
                        <div className={styles.flex2}>
                            <div className='relative'>
                                <div className='bg-red-400 w-full h-48'> <img /></div>
                                <div className='w-[.7rem] absolute bottom-2 right-1'> <img src={addCart} /></div>
                            </div>
                            <div className={styles.flex1}>
                                <p>Alpaca Wool Crewneck Sweater</p>
                                <p>$200</p>
                            </div>
                        </div>
                        <div className={styles.flex2}>
                            <div className='relative'>
                                <div className='bg-red-400 w-full h-48'> <img /></div>
                                <div className='w-[.7rem] absolute bottom-2 right-1'> <img src={addCart} /></div>
                            </div>
                            <div className={styles.flex1}>
                                <p>Alpaca Wool Crewneck Sweater</p>
                                <p>$200</p>
                            </div>
                        </div>
                        
                    
                    </div>
                </div>
            </div>
        </div>
    )
}
