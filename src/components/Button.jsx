const Button = (props) => {
  return (
    <a href='https://wa.me/3002540388'>
      <button className='bg-indigo-600 text-neutral-100 font-semibold py-2 px-6 rounded hover:bg-indigo-400 mt-2 md:mt-0 duration-500'>
      {props.children}
    </button>
    </a>

    
  )
}

export default Button