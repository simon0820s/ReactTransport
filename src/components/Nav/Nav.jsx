import React, { useState, useEffect } from 'react'
import Button from './Button';
import { HiLocationMarker,HiMenu,HiArrowNarrowUp } from "react-icons/hi";

const Nav = () => {

    const Links =[
      {name:"HOME",link:"/"},
      {name:"SERVICE",link:"/"},
      {name:"ABOUT",link:"/"},
      {name:"BLOG'S",link:"/"},
      {name:"CONTACT",link:"/"},
    ];

    const [open,setOpen]=useState(false);
    
    const icon = open ? <HiArrowNarrowUp/> : <HiMenu />;
    
  return (
    <div className='shadow-md w-full fixed top-0 left-0'>
      <div className='md:flex items-center justify-between bg-neutral-100 py-4 md:px-5 px-10'>
      <div className='font-bold text-2xl cursor-pointer flex items-center font-[Poppins] 
      text-gray-800'>
        <span className='text-3xl text-indigo-600 mr-1 pt-2'>
        <HiLocationMarker className='text-2xl pb-1' name="logo-ionic"></HiLocationMarker>
        </span>
        Designer
      </div>
      
      <div onClick={()=>setOpen(!open)} className='text-3xl absolute right-8 top-6 cursor-pointer md:hidden'>
        {icon}
      </div>

      <ul className={`md:flex md:items-center md:pb-0 pb-12 absolute md:static bg-neutral-100 md:z-auto z-[-1] left-0 w-full md:w-auto md:pl-0 pl-9 transition-all duration-500 ease-in ${open ? 'top-20 ':'top-[-490px]'}`}>
        {
          Links.map((link)=>(
            <li key={link.name} className='md:ml-8 text-xl md:my-0 my-7'>
              <a href={link.link} className='text-gray-800 hover:text-gray-400 duration-500'>{link.name}</a>
            </li>
          ))
        }
        <Button>
          Get Started
        </Button>
      </ul>
      </div>
    </div>
  )
}

export default Nav