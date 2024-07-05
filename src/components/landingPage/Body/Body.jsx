import React from 'react'
import SuggestionPage from './BodyComponent/collection1'
import Article from './BodyComponent/Article'
import Collection from './BodyComponent/collection'
import BigBanner from './BodyComponent/collection2'
import InstagramShop from './BodyComponent/instagramShop'
import { styles } from '../../../style'

export default function BodyCollection() {
  return (
    <body className={`${styles.margin}`}>
      <Collection />
      <SuggestionPage />
      <BigBanner />
      <Article />
      <InstagramShop />
    </body>
  )
}
