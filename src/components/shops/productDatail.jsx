import React, { useContext } from 'react'
import { styles } from '../../style'
import { dropdown } from '../../assets'
import ScreenWidth from '../functions/screenWidth'
import { addCart } from '../../assets'
import { ModalContext } from '../functions/ModalPopup'
import { useLocation } from 'react-router-dom'
import ShoppingBag from '../cards/ShopingBag'



export default function ProductDetails() {
    const location = useLocation();
    const { openBag, bag } = useContext(ModalContext);
    const { product } = location.state || {};
    const isDesktop = ScreenWidth();

    return (
        <div className='px-4 md:py-6 md:px-10'>

            <div className={`${isDesktop ? styles.bottomBorder : undefined} md:pb-8 flex flex-col gap-y-10 md:grid md:grid-cols-3 md:gap-6`}>

                <div className='col-start-1 col-end-3 '>
                    <div className='flex flex-col relative -mx-4'>
                        <div className={`${styles.flex4} product-Img-container  hide-scrollbar flex-row md:flex-col overflow-x-scroll`}>
                        {product.images.map((img, index) => (
                                <div key={index}><img src={img} alt={product.title} /></div>
                            ))}
                        </div>

                        <div className='color flex md:flex-col absolute bottom-[-7%] left-[40%] md:top-[10%] md:-left-4'>
                        {product.images.map((_, index) => (
                                <div key={index}></div>
                            ))}
                        </div>
                    </div>
                </div>


                <div className={`  col-start-3 col-end-4 text-100 ${styles.flex4} md:w-[15rem] h-fit`}>
                    <p className={`${styles.whiteText2} text-200`}>Shop / Clothing</p>

                    <div className={`${styles.flex4}`}>
                        <h2 className={`${styles.blackText1} text-400 text-center md:text-start `}>{product.title} <br className='hidden md:block' /> ${product.price}</h2>
                        <p className='leading-4'>{product.description}</p>

                        <div className={`${styles.flex1}`}>
                            <h4 className='font-[600] text-200'>Product Color: {product.colors ? product.colors.join(', ') : 'N/A'}</h4>
                            <p className={`${styles.whiteText2}`}>Color</p>
                            <div className='color-container'>
                                <div></div>
                                <div></div>
                                <div></div>
                            </div>
                        </div>

                        <div className='leading-5'>
                            <h4 className='font-semibold text-200'>Product Size:
                                <span className='float-end underline cursor-pointer font-extralight'> Size Chart</span>
                            </h4>
                            <div className='size-container gap-[1.5rem] md:gap-[1rem]'>
                                <div>XS</div>
                                <div>S</div>
                                <div>M</div>
                                <div>L</div>
                                <div>XL</div>
                            </div>
                        </div>
                        <div>
                            <div className={`${styles.cartBtn} py-1 text-100 w-full `} onClick={openBag}>
                                <button type='button'
                                    className='text-100'
                                >Add to Bag</button>
                            </div>
                            {bag && <ShoppingBag />}
                        </div>
                        <div>
                            <div className={`${styles.bottomBorder} py-1 cursor-pointer`}>
                                <p> Check In-Store Availiabilty <span className={`${styles.spanImg}`}><img src={dropdown} /></span></p>
                            </div>

                            <div className={`${styles.bottomBorder} py-1 cursor-pointer`}>
                                <p>Fit Details <span className={`${styles.spanImg}`}><img src={dropdown} /></span></p>
                            </div>

                            <div className={`${styles.bottomBorder} py-1 cursor-pointer`}>
                                <p>Fabrication & Core <span className={`${styles.spanImg}`}><img src={dropdown} /></span></p>
                            </div>

                            <div className={`${styles.bottomBorder} py-1 cursor-pointer`}>
                                <p>Shipping & Return <span className={`${styles.spanImg}`}><img src={dropdown} /></span></p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className=' pt-10 md:py-6 md:px-6 xl:px-20 flex flex-col gap-10 '>
                <div className={`${styles.flex} gap-y-12 md:gap-5 text-200 `}>

                    <div className={`${styles.flex3}`}>
                        <h2 className={`${styles.whiteText2} text-300`}> Design</h2>
                        <div className={`${styles.flex2}`}>
                            <h2 className='text-400'>Airy & Worm</h2>
                            <p className='leading-4 text-100'> Discover a world where fashion meets passion at Foe Clothings. Our curated collections are designed to empower and inspire, blending timeless elegance with modern trends.</p>
                        </div>
                    </div>

                    <div className={`${styles.flex3}`}>
                        <h2 className={`${styles.whiteText2} text-300`}> Design</h2>
                        <div className={`${styles.flex2}`}>
                            <h2 className='text-400'>Airy & Worm</h2>
                            <p className='leading-4 text-100'> Discover a world where fashion meets passion at Foe Clothings. Our curated collections are designed to empower and inspire, blending timeless elegance with modern trends.</p>
                        </div>
                    </div>

                    <div className={`${styles.flex3}`}>
                        <h2 className={`${styles.whiteText2} text-300`}> Design</h2>
                        <div className={`${styles.flex2}`}>
                            <h2 className='text-400'>Airy & Worm</h2>
                            <p className='leading-4 text-100'> Discover a world where fashion meets passion at Foe Clothings. Our curated collections are designed to empower and inspire, blending timeless elegance with modern trends.</p>
                        </div>
                    </div>
                </div>

                {/* product review */}
                <div className={``}>
                    <h2>Recently viewed</h2>
                    <input type='rating'/>
                </div>
            </div>
        </div>
    )
}
