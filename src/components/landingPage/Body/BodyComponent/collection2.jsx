import React from 'react'
import { suggestionData2 } from '../../../Database/landingPageData'
import { styles } from '../../../../style'

export default function BigBanner() {
    return (
        <div className={`${styles.flex}`}>
            {suggestionData2.map(item => (
                <div key={item.id} className={`${styles.whiteText} text-300 mt-12 relative`}>
                    <div className='w-full'>
                        <img 
                        src={item.img}
                         alt={item.name}
                         className='object-fit w-full'
                           />
                    </div>
                    <p className={`${styles.absolute} text-400 `}>{item.name}</p>
                </div>
            ))}
        </div>
    )
}
