import React from 'react'
import { article } from '../../../Database/landingPageData'
import { styles } from '../../../../style'

export default function Article() {
    return (
        <article className={`${styles.whiteColour} flex items-center justify-center pt-20 pb-32 mt-6 -mx-4 md:-mx-6`} >
            {article.map(item => (
                <div
                    key={item.id}
                    className=
                    {` ${styles.blackText} text-center items-center w-[75%] lg:w-[50%] xl:w-[45%]`}>

                    <h4 className={`text-900 mb-10 md:mb-12`}>
                        {item.title}
                    </h4>
                    <p className={`items-center text-500`}>
                        {item.text}
                    </p>
                </div>
            ))}
        </article>
    )
}
