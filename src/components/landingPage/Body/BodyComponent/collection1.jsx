import React from 'react'
import { suggestionData1 } from '../../../Database/landingPageData'
import { styles } from '../../../../style'

export default function SuggestionPage() {
    return (
        <>
            <div>
                {suggestionData1.map(item => (

                    <div className={`${styles.blackText} mt-4`}>
                        <h2 className='text-600'>{item.title}</h2>

                        <div className={`${styles.flexRow} overflow-x-scroll h-full hide-scrollbar`}>
                            {item.children.map(child => (

                                <div key={child.id} className='w-full md:w-[18rem] flex flex-col justify-start' >
                                    <div className=' mt-6 mb-2 w-full h-full '>
                                        <img src={child.img} alt={child.productName} className='flex-shrink-0' />
                                    </div>

                                    <div className={`${styles.blackText} text-300`}>
                                         <p className='pb-1'>{child.productName}</p> 
                                        <p>${child.price}</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                ))}
            </div>
        </>
    )
}
