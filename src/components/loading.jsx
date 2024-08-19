import React from 'react'
import Lottie from 'lottie-react';
import animation from '../assets/animation.json'

export default function Loading() {
    return (
        <div className="loader-container flex flex-col items-center justify-center h-screen">
            <div className='w-10 h-10'>
                <Lottie animationData={animation} loop={true} />
            </div>
        </div>
    )
}
