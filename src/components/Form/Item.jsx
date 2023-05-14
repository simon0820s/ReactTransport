import React from 'react'

const Item = ({text,placeHolder,type}) => {
  return (
    <div className='my-2'>

        <p className='text-center'>{text}</p>

        <input type={type} placeholder={placeHolder} className='appearance-none outline-none'/>
    </div>
  )
}

export default Item