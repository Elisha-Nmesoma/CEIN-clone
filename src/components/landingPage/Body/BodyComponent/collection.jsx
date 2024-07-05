import React from 'react'
import { collection } from '../../../Database/landingPageData'
import { styles } from '../../../../style'

export default function Collection() {
    return (
        <div>
            {collection.map(item => (
                <div key={item.id} className='text-600'>

                    <h2 className={`${styles.blackText} mb-7 mx-2 md:w-[70%] xl:w-[40%] `}> {item.title} </h2>

                    <div className={`${styles.flex} `}>
                        {item.children.map(child => (

                            <div key={child.id} className=' w-full relative '>
                                <div className={`w-full`}>
                                    <img src={child.img} alt={child.text} className='object-cover w-full' />
                                </div>
                                <p className={`${styles.whiteText} text-400 ${styles.absolute}`}>{child.text}</p>
                            </div>
                        ))}
                    </div>
                </div>
            ))}
        </div>
    )
}
