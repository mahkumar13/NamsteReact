import React, { useState } from 'react'
import ItemList from './ItemList'

function ResturantCategory(props) {
  console.log(props)
  // const [hide,setHide]= useState(false)
     const handleClick= ()=>{
      setShowIndex()
     }
    const data= props.data.card.card
    const {showItem}= props
    const {setShowIndex}= props
  return (
    <div>
    <div className='w-9/12 bg-orange-100 mx-auto my-4 shadow-lg p-4   '>
      <div className='flex justify-between cursor-pointer' onClick={handleClick}>
      <span className='font-bold text-lg'>{data.title} ({data.itemCards.length})</span>
      <span>🔽</span>
      </div>
      { showItem &&<ItemList item={data.itemCards}></ItemList>}
    </div>
    
    </div>
  )
}

export default ResturantCategory
