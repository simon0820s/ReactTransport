import React from 'react'
import { useForm } from 'react-hook-form'

const Form = () => {

  const {register,formState:{errors},handleSubmit} = useForm();

  const onSubmit=(data)=>{
    console.log(data);
  }

  return (
    <div className='flex items-start justify-center h-screen w-full mt-14 text-gray-900'>

      <form className='flex flex-col md:mt-24 mt-20 p-10 gap-4 bg-gray-600 rounded-3xl' onSubmit={handleSubmit(onSubmit)}>

        <div className='flex flex-col'>
          <label className='text-indigo-400'>Name</label>
          <input className='border-none bg-neutral-100 rounded-sm mt-2' type="text" {...register('name', {required:true})}/>
          {errors.name?.type==='required' && <p className='text-red-500'>Name is required</p>}
          
        </div>

        <div className='flex flex-col'>
          <label className='text-indigo-400'>Email</label>
          <input className='border-none bg-neutral-100 rounded-sm mt-2' type="text" {...register('email', {pattern:/^[^\s@]+@[^\s@]+\.[^\s@]+$/i})}/>
          {errors.email?.type==='pattern' && <p className='text-red-500'>Email format is wrong</p>}
          {errors.email?.type==='required' && <p className='text-red-500'>Email is required</p>}
        </div>

        <div className='flex flex-col'>
          <label className='text-indigo-400'>Age</label>
          <input className='border-none bg-neutral-100 rounded-sm mt-2' type="text" {...register('age', {required:true})}/>
          {errors.age?.type==='required' && <p className='text-red-500'>Age is required</p>}
        </div>

        <div className='flex flex-col'>
          <label className='text-indigo-400'>Country</label>
          <select {...register('country', {required:true})}>
            <option value="col">Colombia</option>
            <option value="mex">Mexico</option>
            <option value="rus">Rusia</option>
          </select>
        </div>

        <input type="submit" value="Send"/>

      </form>
    </div>
  )
}

export default Form