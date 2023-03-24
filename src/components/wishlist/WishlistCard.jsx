import React from 'react'
import BookInfo from '../book/BookInfo'
import WishlistActions from './WishlistActions'

const WishlistCard = () => {
  return (
<article  className='card'>

    <BookInfo/>
    <WishlistActions/>
</article>
  )
}

export default WishlistCard