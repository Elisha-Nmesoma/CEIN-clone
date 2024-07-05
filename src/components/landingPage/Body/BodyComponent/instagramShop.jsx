import React from 'react'
import { instagramCollection } from '../../../Database/landingPageData'
import { styles } from '../../../../style'
import { useNavigate } from 'react-router-dom'

export default function InstagramShop() {
    const navigate = useNavigate()
    return (
        <div>
            {instagramCollection.map( collection => (
                <div className=' flex flex-col items-center justify-center gap-6 mt-6'>
                    <h3 className={`${styles.blackText} text-600`}>{collection.title}</h3>

                    <div className={`${styles.flexRow}`}>
                        {collection.images.map(item => (

                            <div key={item.id} className='w-full'>
                                    <img src={item.img}
                                     alt="instagram shop banners" 
                                     className='object-cover w-full' 
                                     onClick={ ()=> navigate(`/instagram`)}/>
                            </div>
                        ))}
                    </div>
                </div>
            ))}
            </div>
    )
}
