import React, { useState } from 'react'
import { styles } from '../../style'
import { useLocation, useNavigate } from 'react-router-dom'
import { orders } from '../Database/landingPageData'
import { back } from '../../assets'
import ScreenWidth from '../functions/screenWidth'

const OrderDetails = () => {
    const [active, setActive] = useState(0);
    const setActiveOrder = (order) => {
        setActive(order);
        console.log(setActive)
    }

    return (
        <div className={`${styles.blackText} flex flex-col gap-5`}>
            {/* header conent */}
            <h1 className={`text-800`}>My Orders</h1>

            <div className={`flex gap-4 items-center text-200 `} >
                {orders.map((order, index) => (
                    <button
                        key={order.id}
                        className={` px-3 w-fit text-100 rounded-2xl rounded-xs py-1.5 tracking-widest 
                                   ${active === order.id
                                ? "  bg-neutral-900 text-neutral-100 min-h-[20%] text-center" : " "}
                                      `}
                        onClick={() => setActiveOrder(order.id)}>{order.title}</button>
                ))}
            </div>




            <div>
                {orders.map((order) => (
                    <div key={order.id}>
                        {active === order.id && (
                            order.orderItems.map((item) => (
                                <div className='flex flex-col lg:flex-row gap-5 items-start w-full text-400 ' >
                                    <div key={item.id} className={`bg-neutral-100 grid grid-cols-2 md:grid-col-6 md:grid-row-2 gap-2 justify-between items-center  w-full p-4 rounded-md `}>
                                        {/* image container */}
                                        <div className='hidden md:flex h-[4rem] w-[18rem] row-start-1 col-start-1 bg-red-500'>
                                            <img src="" />
                                            <img src="" />
                                            <img src="" />
                                            <img src="" />
                                        </div>
                                        {/* order text-container */}
                                        <p
                                            className=' flex-1 font-semibold col-start-1 col-end-1 md:row-start-2 md:col-start-1 md:col-end-1'>
                                            Order No:
                                            <br className='hidden md:block' />
                                            <span>{item.orderNo}</span>
                                        </p>

                                        <p
                                            className=' flex-1 col-start-2 col-end-2 md:row-start-2 md:col-start-2 md:col-end-2  md:flex md:flex-col items-center  text-end '>
                                            <span className='hidden md:block font-semibold'>Shipping date</span>
                                            <br className='hidden md:block' />
                                            <span className='font-normal'>{item.date}</span>
                                        </p>

                                        <p
                                            className='flex-1 col-span-2 md:row-start-2  md:col-start-3 md:col-end-3'>
                                            Tracking No:
                                            <br className='hidden md:block' />
                                            <span className='font-semibold'>
                                                {item.trackNo}
                                            </span>
                                        </p>

                                        <p
                                            className='flex-1 col-start-1 col-end-1 md:row-start-2  md:col-start-4 md:col-end-4'>
                                            Quantity:
                                            <br className='hidden md:block' />
                                            <span className='font-semibold'>
                                                {item.quantity}
                                            </span>
                                        </p>

                                        <p
                                            className=' flex-1 col-start-2 col-end-2 md:row-start-2  md:col-start-5 md:col-end-5 text-end'>
                                            Total:
                                            <br className='hidden md:block' />
                                            <span className='font-semibold'>
                                                $ {item.price}
                                            </span>
                                        </p>

                                        <p
                                            className={`${item.color} flex-1 col-start-2 col-end-2 row-start-4 md:row-start-1 md:col-start-6 md:col-end-6 text-end`}>
                                            {item.status}
                                        </p>

                                        <button
                                            className=' flex-1 rounded-2xl border border-gray-500 text-200 px-5 py-1.5 col-start-1 col-end-1 md:row-start-2 md:col-start-6 md:col-end-6  w-fit'>
                                            Details
                                        </button>
                                    </div>
                                </div>
                            ))
                        )}
                    </div>
                ))}
            </div>


        </div>
    )
}


export default function Orders() {
    const location = useLocation();
    const navigate = useNavigate()

    return (
        <div className={`account_container ${styles.flex3} ${styles.whiteColour} `}>
            <button onClick={() => navigate('/account')} className='w-[1rem] md:hidden'>
                <img src={back} alt="back" />
            </button>
            <OrderDetails />
            {/* <OrderItem /> */}
        </div>
    )
}
