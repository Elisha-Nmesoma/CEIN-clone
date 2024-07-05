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

                        <div className={`${styles.flexRow} whitespace-nowrap overflow-x-scroll hide-scrollbar`}>
                            {item.children.map(child => (

                                <div key={child.id} className='w-full md:w-[18rem]' >
                                    <div className=' flex-shrink-0 mt-6 mb-2 w-full box-border '>
                                        <img src={child.img} alt={child.productName} className='flex-shrink-0' />
                                    </div>

                                    <div className={`${styles.blackText} text-300`}>
                                        <p>{child.productName}</p>
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
