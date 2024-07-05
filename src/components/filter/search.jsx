import React, { useContext } from 'react'
import { searchIcon, close } from '../../assets/index'
import { styles } from '../../style'
import { ModalContext } from '../functions/ModalPopup'

export default function Search() {
    const { searchClose } = useContext(ModalContext)

    return (
        <div className='bg-neutral-50 w-full px-2 py-4 absolute top-20 md:top-[4.57rem] lg:top-[5.32rem]'> 

          <div className=' flex flex-row gap-5 items-center justify-between mx-6 '>
                <div className='flex items-center gap-5 w-full'>
                    <div className='w-[1rem] '>
                        <img src={searchIcon} className='object-cover w-full' />
                    </div>
                    <input
                        placeholder="Search..."
                        className='w-full p-1 bg-neutral-50 outline-none border-none'
                    />
                </div>
                <div className={`${styles.closeIcon}`}>
                    <img src={close} onClick={searchClose} />
                </div>
            </div>
            <div className='backgroundDim'></div>
            


           <div className=' hidden'>
            {/* className='px-2 mx-5 md:mx-12' the spacing before saerching 
            className='bg-neutral-50 px-2 mx-1 md:mx-5 pt-3 md:pt-10 pb-8 absolute top-8' */}

            <div className='flex flex-row gap-5 items-center justify-between '>
                <div className='flex items-center gap-5 w-full'>
                    <div className='w-[1rem] '>
                        <img src={searchIcon} className='object-cover w-full' />
                    </div>
                    <input
                        placeholder="Search..."
                        className='w-full p-1 outline-none border-none'
                    />
                </div>
                <div className={`${styles.closeIcon}`}>
                    <img src={close} onClick={searchClose} />
                </div>
            </div>




            <section className=' mt-7 md:mt-12'>

                <div className=' text-100 flex justify-between border-b-natural-900 border-b-[.02rem] pb-1'>
                    <p>13 results</p>
                    <p>View all</p>
                </div>

                <div className=" mt-5 flex gap-[1.125rem] flex-wrap w-full max-w-[2560px] bg-blue-500">

                    <div>
                        <div className=' bg-green-900 w-[10rem] h-[13rem]  md:w-[14rem] md:h-[17rem] relative'>
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

                    <div>
                        <div className=' bg-green-900 w-[10rem] md:w-[14rem] h-[13rem] md:h-[17rem] relative'>
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

                    <div>
                        <div className=' bg-green-900 w-[10rem] md:w-[14rem] h-[13rem] md:h-[17rem] relative'>
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
        </div>

    )
}
