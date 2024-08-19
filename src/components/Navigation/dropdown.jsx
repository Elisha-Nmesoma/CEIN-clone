import React, { useContext } from 'react'
import { styles } from "../../style"
import { Link } from 'react-router-dom'
import { shops } from '../Database/landingPageData'

export default function DropDown({closeShop}) {

  return (
      <div  className='p-8 md:flex justify-between text-300 leading-5 bg-neutral-50 w-fit absolute z-50 top-[4.83rem] lg:top-[5.59rem]'>
        {shops.map((item) => (
          <div>
            <h2 className={`${styles.whiteText2} md:pb-2 `}>{item.title}</h2>
            <div className={`${styles.blackText}  flex flex-col items-start `} onClick={closeShop}>
              {item.categories.map((category) => (
                <div key={category.id}>
                  <Link to={category.url}>{category.title}</Link>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
  )
}