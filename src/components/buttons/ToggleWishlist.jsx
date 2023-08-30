import React from 'react';
import AddToWishlist from './AddToWishlist';
import RemoveFromWishlist from './RemoveFromWishlist';
import { useState } from 'react';
const ToggleWishlist = () => {
     const [isAdded,setIsAdded]=useState(false);
    
  return (
 <>
 {isAdded? <AddToWishlist/> : <RemoveFromWishlist/>}
 </>
  )
}

export default ToggleWishlist