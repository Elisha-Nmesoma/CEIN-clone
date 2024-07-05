import React, { useContext } from 'react';
import { styles } from '../../style';
import { ModalContext } from '../functions/ModalPopup';
import ScreenWidth from '../functions/screenWidth';


export default function Filter() {
    const isDesktop = ScreenWidth();
    const { filter, openFilter, closeSort  } = useContext(ModalContext);

    return (
        <div className='bg-Dim'>
            <div className={`bg-neutral-50 h-full ${!isDesktop ? undefined : "w-[20rem] float-end" }`}>
                <div className={` ${styles.bottomBorder} grid grid-cols-4 p-5`}>
                    <p className={`${styles.blackText1} text-400 col-start-3`}>Filters</p>
                    <div className={`${styles.closeIcon} col-start-5 col-end-5`}>
                        <img src={close} onClick={closeFilter} />
                    </div>
                </div>
                <div className={`${styles.bottomBorder} ${styles.padding2} text-200 tracking-wide flex flex-col gap-7 pt-6 pb-10`}>
                    <p>Color</p>
                    <div className={`flex justify-start gap-5 flex-wrap color-container`}>
                        <div></div>
                        <div></div>
                        <div></div>
                        <div></div>
                        <div></div>
                        <div></div>
                        <div></div>
                        <div></div>
                        <div></div>
                    </div>

                    <div  className={`${styles.filterFlex}`}>
                        <p>Material</p>
                        <div className=' flex justify-start items-start flex-col gap-1'>
                        <button>cotton(45)</button>
                        <button>cotton(45)</button>
                        <button>cotton(45)</button>
                        <button>cotton(45)</button>
                        </div>
                    </div>

                    <div className={`${styles.filterFlex}`}>
                        <p>Size</p>
                        <div className=' flex justify-start items-start flex-col gap-1'>
                            <button>Extra Small (99)</button>
                            <button>Small (99)</button>
                            <button>Small (99)</button>
                            <button>Small (99)</button>
                        </div>
                    </div>
                </div>

                <div className={`py-4 px-6 flex justify-center items-center bg-red-500`}>
                    <button className={`${styles.smallButton} w-full py-4`} >See Results</button>
                </div>
            </div>
        </div>
    )
}
