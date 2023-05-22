import { useState } from 'react'
import Button from './Button';
import { HiLocationMarker,HiMenu,HiArrowNarrowUp } from "react-icons/hi";

const Nav = () => {

    const Links =[
      {name:"Inicio",link:"#inicio"},
      {name:"Nosotros",link:"#nosotros"},
      {name:"Section",link:"#quienes_somos"},
      {name:"Mision",link:"#mision"},
      {name:"Vision",link:"#vision"},
      {name:"Valores",link:"#valores"},
      {name:"Section",link:"#trabaja_con_nosotros"},
    ];

    const [open,setOpen]=useState(false);
    
    const icon = open ? <HiArrowNarrowUp/> : <HiMenu />;
    
  return (
    <div className='shadow-md w-full fixed top-0 left-0 z-10'>
      <div className='md:flex items-center justify-between bg-neutral-100 py-3 md:px-5 px-10'>
      <div className='font-bold text-2xl cursor-pointer flex items-center font-[Poppins] 
      text-gray-800'>
        <span className='text-3xl text-indigo-600 mr-1 pt-2'>
        <HiLocationMarker className='text-2xl pb-1' name="logo-ionic"></HiLocationMarker>
        </span>
        Designer
      </div>
      
      <div onClick={()=>setOpen(!open)} className='text-3xl absolute right-8 top-4 cursor-pointer md:hidden'>
        {icon}
      </div>

      <ul className={`md:flex md:items-center md:pb-0 pb-12 absolute md:static bg-neutral-100 md:z-auto z-[-2] left-0 w-full md:w-auto md:pl-0 pl-9 transition-all duration-150 ease-in ${open ? 'top-10 ':'top-[-500px]'}`}>
        {
          Links.map((link)=>(
            <li key={link.name} className='md:ml-8 text-lg  md:my-0 my-7'>
              <a onClick={()=>setOpen(false)} href={link.link} className='text-gray-800 hover:text-gray-400 duration-500 cursor-pointer'>{link.name}</a>
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