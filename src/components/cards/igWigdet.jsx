import React from 'react'
import { styles } from '../../style'
import { close } from "../../assets/index"


export default function IgWidget() {
    return (
        <body className={`md:h-screen  flex justify-center items-center `}>
            <div className={`${styles.whiteColour2} md:pr-5 md:pb-5 md:pt-7 md:pl-7 md:rounded-md h-full md:h-[28rem] xl:h-[30rem] md:w-[49rem] xl:w-[52rem] md:flex md-flex-row relative`}>

                <div className={` pt-12 md:pt-0 w-full md:w-[65%]`}>
                    <img src="https://res.cloudinary.com/dyknfomwp/image/upload/v1717592761/e-commerce-app/f3_spcawv.jpg" className='h-full' />
                </div>

                <div className='pb-7 md:pb-0 px-7 md:pl-8 md:pr-0 md:w-[50%]'>
                    <div className='absolute top-4 right-4 md:top-3 md:right-2 w-[.85rem] '>
                        <img src={close} />
                    </div>

                    <div className=' flex gap-5 mt-8 justify-between'>
                        <div className='w-[6rem] h-[fit] bg-red-500'>
                            <img src="https://res.cloudinary.com/dyknfomwp/image/upload/v1717592761/e-commerce-app/f3_spcawv.jpg" className='h-full' />
                        </div>
                        <div className='flex flex-col gap-3 '>
                            <h4 className='text-200'>Poplin Tiered Dress</h4>
                            <p className='text-100'>white</p>
                            <p className='text-100'>$288</p>
                            <button className={`${styles.cartBtn}`}>
                                Add to Bag
                            </button>
                        </div>
                    </div>
                    <div className=' flex gap-5 mt-8 justify-between'>
                        <div className='w-[6rem] h-[fit]'>
                            <img src="https://res.cloudinary.com/dyknfomwp/image/upload/v1717592761/e-commerce-app/f3_spcawv.jpg" className='h-full' />
                        </div>
                        <div className='flex flex-col gap-3 '>
                            <h4 className='text-200'>Poplin Tiered Dress</h4>
                            <p className='text-100'>white</p>
                            <p className='text-100'>$288</p>
                            <button className={`${styles.cartBtn}`}>
                                Add to Bag
                            </button>
                        </div>
                    </div>

                </div>
            </div>
        </body>
    )
}
