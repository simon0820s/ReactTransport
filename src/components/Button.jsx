import React from 'react'

const Button = (props) => {
  return (
    <button className='bg-indigo-600 text-neutral-100 py-2 px-6 rounded mt-4 md:ml-4 md:mr-2 lg:ml-20 hover:bg-indigo-400 
    duration-500'>
      <a href='https://wa.me/3002540388'>{props.children}</a>
    </button>
  )
}

export default Button