import React, { useContext } from 'react';
import { styles } from '../../style';
import { ModalContext } from '../functions/ModalPopup';
import ScreenWidth from '../functions/screenWidth';
import { addCart, close } from '../../assets';
import { useNavigate } from 'react-router-dom';


export default function Shoppingbag() {
    const isDesktop = ScreenWidth();
    const { closeBag } = useContext(ModalContext);
    const navigate = useNavigate()

    return (
        <div className='bg-Dim '>
            <div className={`bg-neutral-50 h-full flex flex-col ${!isDesktop ? undefined : "w-[20rem] float-end"}`}>

                <div className={`flex-1 ${styles.bottomBorder}`}>
                    <div className={` ${styles.bottomBorder} grid grid-cols-2 p-5`}>
                        <p className={`text-black text-400 col-start-1 col-end-3`}>Shopping Bag</p>
                        <div className={`${styles.closeIcon} col-start-5 col-end-5`}>
                            <img src={close} onClick={closeBag} />
                        </div>
                    </div>

                    <div className={`${styles.bottomBorder} mx-7 py-5 flex items-start gap-5 text-100`}>
                        <div className={` bg-neutral-800 ${isDesktop ? "w-28 h-28" : ' w-24 h-32'}`}>
                            <img />
                        </div>

                        <div className='leading-9'>
                            <div className='flex items-start justify-between gap-4 '>
                                <h2 className={`${styles.blackText} text-start -mt-1 text-200 w-[90%] leading-5`}>Alpaca Wool Crewneck Sweater</h2>
                                <div className='w-[.7rem]'>
                                    <img src={close} />
                                </div>
                            </div>
                            <div className={`${styles.whiteText2} text-start`}>
                                <p> {/*color */} Belge</p>
                                <p> {/*price*/} $200</p>
                            </div>
                            <div className=' w-fit rounded-2xl border'>
                                <p className='flex justify-between items-center gap-3 px-2 py-1 text-100'>
                                    <span>
                                        <img src={addCart} className='w-[.6rem]' />
                                    </span>
                                    1
                                    <span>
                                        <img src={addCart} className='w-[.6rem]' />
                                    </span>
                                </p>
                            </div>
                        </div>
                    </div>

                </div>

                <div className={`py-5 px-7 flex flex-col justify-center gap-3 items-center text-200`}>
                    <p>Shipping & taxes calculated at checkout</p>
                    <button
                        className={`${styles.smallButton} w-full`}
                        onClick={() => navigate('/shops/Clothing/cart')} >
                        Go To Checkout $200
                    </button>
                </div>
            </div>
        </div>
    )
}
