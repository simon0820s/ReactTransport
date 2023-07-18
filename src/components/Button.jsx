import React from 'react'

const Button = (props) => {
  return (
    <a href='https://wa.me/3002540388'>
      <button className='bg-indigo-600 text-neutral-100 py-2 px-6 rounded mt-4 md:mt-0 md:ml-4 md:mr-2 lg:ml-20 hover:bg-indigo-400 
    duration-500'>
      {props.children}
    </button>
    </a>

    
  )
}

export default Button