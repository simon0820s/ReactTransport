import React from 'react'
import { useForm } from 'react-hook-form'

const Form = () => {
  return (
    <div className='h-auto w-96 bg-[#0D1926]'>
      <div className='ml-8 grid grid-rows-3 grid-cols-1'>

        <div className='row-start-1 row-end-2 col-start-1 col-end-2 mt-8'>
          <h2 className='text-[#10E698] text-3xl font-bold'>
            Please Complete
          </h2>
          <h2 className='text-[#10E698] text-3xl font-bold mt-2'>
            My Form.
          </h2>
        </div>

        <div className='row-start-2 row-end-2 col-start-1 col-end-1'>
          <p className="text-[#CFD1D4] font-light">este formulario toca llenarlo</p>
        </div>

        <div className='flex justify-start gap-4 items-start row-start-3 row-end-3 col-start-1 col-end-2'>
            <div className='flex flex-col'>
              <span className="text-[#10E698]">Nombre</span>
              <input className='w-40 font-light text-gray-500 mt-1' placeholder="Nombre"></input>
            </div>
            <div className='flex flex-col'>
              <span className="text-[#10E698]">Apellido</span>
              <input className='w-40 font-light text-gray-500 mt-1' placeholder="Apellido"></input>
            </div>
        </div>
      </div>
    </div>
  )
}

export default Form