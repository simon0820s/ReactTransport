import React from 'react'
import Item from './Item'

const Form = () => {
  return (
    <div className='relative bg-gray-900 w-full mt-14 h-screen flex items-center justify-center'>
      <div className='absolute top-12 flex flex-col items-center justify-center bg-gray-700 w-96 gap-4 rounded-2xl'>
        <Item text="email" type="password" placeHolder="Enter your email"/>
        <Item text="email" type="text" placeHolder="Enter your email"/>
        <Item text="email" type="text" placeHolder="Enter your email"/>
        <Item text="email" type="text" placeHolder="Enter your email"/>
      </div>
    </div>
  )
}

export default Form