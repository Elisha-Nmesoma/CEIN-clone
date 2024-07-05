import React, { useContext } from 'react'
import { styles } from '../../style'
import { ModalContext } from '../functions/ModalPopup'
import { close } from '../../assets'
import ScreenWidth from '../functions/screenWidth'

export default function Sort() {
    const isDesktop = ScreenWidth();
    const { sort, openSort, closeSort } = useContext(ModalContext)

    return (
        <>
            <div className={`${isDesktop ? "" : "bg-Dim"}`}>
                <div className={`${isDesktop ? "" : "fixed z-50 bg-neutral-50 bottom-0 w-full"}`}>
                    <div className={` ${styles.bottomBorder} ${styles.Bhidden} grid grid-cols-4 p-5`}>
                        <p className={`${styles.blackText1} text-400 col-start-3`}>Sort</p>
                        <div className={`${styles.closeIcon} col-start-5 col-end-5`}>
                            <img src={close} onClick={closeSort} />
                        </div>
                    </div>

                    <div
                        className={` ${styles.whiteText2} bg-neutral-50  py-7 px-5 flex flex-col gap-5 md:shadow-2xl md:w-[9rem] md:fixed md:top-44 md:right-24 md:z-50 sort `}
                        onMouseLeave={isDesktop ? closeSort : undefined}>
                        <p>Featured</p>
                        <p>Best selling</p>
                        <p>Price, low to high</p>
                        <p>Price, high to low</p>
                    </div>
                </div>
            </div>
        </>
    )
}
