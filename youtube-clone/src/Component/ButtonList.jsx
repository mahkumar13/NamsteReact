import React from 'react'
import Button from './Button'
const ButtonList = () => {

  const buttonList= ["All","Gaming","Songs","Live","Cricket","Cooking ","Live","React"]
  return (
    <div className='flex'>
     {/* <Button name="All"></Button>
     <Button name="Gaming"></Button>
     <Button name="Songs"></Button>
     <Button name="Live"></Button>
     <Button name="Cricket"></Button>
     <Button name="Cooking"></Button>
     <Button name="Gaming"></Button>
     <Button name="Songs"></Button>
     <Button name="Live"></Button>
     <Button name="Cricket"></Button>
     <Button name="Cooking"></Button>
     <Button name="Gaming"></Button>
     <Button name="Songs"></Button>
     <Button name="Live"></Button> */}
     {buttonList.map((button,index)=>(
        <Button key={index} name={button} ></Button>
      ))}

    </div>
  )
}

export default ButtonList
