import React, { useContext } from 'react'
import { styles } from '../../style'
import { favouriteIcon, addCart, dropdown } from '../../assets'
import { ModalContext } from '../functions/ModalPopup'
import ScreenWidth from '../functions/screenWidth'
import Sort from '../filter/sort'
import Filter from '../filter/filter'

export default function NewArrivals() {
    const isDesktop = ScreenWidth();
    const { sort, openSort, closeSort, filter, openFilter, closeFilter} = useContext(ModalContext);

    return (
        <>
            <div className='mt-8'>
                <div className={`${styles.bottomBorder} px-6 pb-4`}>
                    <h2 className='text-400 '>New Arrivals</h2>
                    <div className='flex flex-col md:flex-row justify-between gap-7 text-100 mt-2 tracking-tight'>
                        <div className='flex items-center gap-2 flex-wrap md:gap-[0.15rem] w-[85%] md:w-full search-result'>
                            <p>Outerwear</p>
                            <p>Outerwear</p>
                            <p>Outerwear</p>
                            <p>Outerwears</p>
                            <p>Outerwear</p>
                        </div>

                        <div className='flex items-center justify-around  md:justify-between gap-14 md:w-[16%]'>
                            <div >
                                <div
                                    className='flex cursor-pointer'

                                    // {isDesktop ?
                                    //     onMouseEnter={() =>{
                                    //         openSort,
                                    //     closeFilter,
                                    //     }} :
                                    //     onClick={openSort}
                                    // }
                                    >
                                    <button> Sort</button>
                                    <div className={`w-[1.2rem]`}>
                                        <img src={dropdown} />
                                    </div>
                                </div>
                                {sort && <Sort />}
                            </div>
                            <div>
                            <button 
                            onClick={openFilter}
                            onMouseEnter={closeSort}
                            >Filter</button>

                            {filter && <Filter />}
                            </div>
                        </div>
                    </div>

                </div>

                <section className='flex items-center justify-center z-0 md:mt-10'>
                    <div className={`${styles.margin}  gap-x-3 gap-y-8 grid grid-cols-2 md:grid-cols-4 w-full`}>

                        <div className={`${styles.boxContainer}`}>
                            <div className={`${styles.imgConatner}`}>
                                <div>
                                    <img />
                                    <div className=' w-3 h-3 absolute bottom-2 right-2'>
                                        <img src={addCart} />
                                    </div>
                                    <div>
                                        <img src={favouriteIcon} className=' w-3 h-3 absolute top-2 right-2' />
                                    </div>
                                </div>
                            </div>
                            <div className='text-200'>
                                <p>Silk Wide-Leg Pant</p>
                                <p>$248</p>
                            </div>
                        </div>
                        <div className={`${styles.boxContainer}`}>
                            <div className={`${styles.imgConatner}`}>
                                <div>
                                    <img />
                                    <div className='bg-blue-200 w-3 h-3 absolute bottom-2 right-2'>
                                        <img />
                                    </div>
                                </div>
                            </div>
                            <div className='text-200'>
                                <p>Silk Wide-Leg Pant</p>
                                <p>$248</p>
                            </div>
                        </div>
                        <div className={`${styles.boxContainer}`}>
                            <div className={`${styles.imgConatner}`}>
                                <div>
                                    <img />
                                    <div className='bg-blue-200 w-3 h-3 absolute bottom-2 right-2'>
                                        <img />
                                    </div>
                                </div>
                            </div>
                            <div className='text-200'>
                                <p>Silk Wide-Leg Pant</p>
                                <p>$248</p>
                            </div>
                        </div>
                        <div className={`${styles.boxContainer}`}>
                            <div className={`${styles.imgConatner}`}>
                                <div>
                                    <img />
                                    <div className='bg-blue-200 w-3 h-3 absolute bottom-2 right-2'>
                                        <img />
                                    </div>
                                </div>
                            </div>
                            <div className='text-200'>
                                <p>Silk Wide-Leg Pant</p>
                                <p>$248</p>
                            </div>
                        </div>
                        <div className={`${styles.boxContainer}`}>
                            <div className={`${styles.imgConatner}`}>
                                <div>
                                    <img />
                                    <div className='bg-blue-200 w-3 h-3 absolute bottom-2 right-2'>
                                        <img />
                                    </div>
                                </div>
                            </div>
                            <div className='text-200'>
                                <p>Silk Wide-Leg Pant</p>
                                <p>$248</p>
                            </div>
                        </div>
                        <div className={`${styles.boxContainer}`}>
                            <div className={`${styles.imgConatner}`}>
                                <div>
                                    <img />
                                    <div className='bg-blue-200 w-3 h-3 absolute bottom-2 right-2'>
                                        <img />
                                    </div>
                                </div>
                            </div>
                            <div className='text-200'>
                                <p>Silk Wide-Leg Pant</p>
                                <p>$248</p>
                            </div>
                        </div>



                    </div>
                </section>
            </div>
        </>
    )
}
