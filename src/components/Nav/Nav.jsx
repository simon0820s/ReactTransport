import React from 'react'
import { BiAnalyse } from "react-icons/bi";

const Nav = () => {
  const links=[
    {name:"Home",link:"/"},
    {name:"Home",link:"/"},
    {name:"Home",link:"/"},
    {name:"Home",link:"/"}
  ]
  return (
    <div className='shadow-md w-full fixed top-0 left-0'>
      <div className='md:flex bg-white py-4 items-center justify-between'>
        <div className='flex flex-row font-bold text-2xl ml-3 gap-1/2 cursor-pointer items-center text-gray-800'>

          <span className='text-3xl text-green-700 mr-1 pt-1/2'>
            <BiAnalyse/>
          </span>
          Transport

        </div>
        <ul className='md:flex md:items-center mr-10'>
          {
            links.map((link)=>(
              <li key={link.name} className='md:ml-8 text-xl'>
                <a href={link.link} className='text-gray-800 hover:text-green-700 transition-all ease-in-out duration-300'>{link.name}</a>
              </li>
            ))
          }
        </ul>

      </div>
    </div>
  )
}

export default Nav