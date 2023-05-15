import React from 'react'
import { useForm } from 'react-hook-form'

const Form = () => {

  const {register,formState:{errors},handleSubmit} = useForm();

  const onSubmit=(data)=>{
    console.log(data);
  }

  return (
    <div className='h-screen w-full flex md:mt-16 mt-14 text-neutral-300'>

      <form onSubmit={handleSubmit(onSubmit)}>

        <div>
          <label>Name</label>
          <input type="text" {...register('name', {required:true})}/>
          {errors.name?.type==='required' && <p>name is required</p>}
        </div>

        <div>
          <label>Email</label>
          <input type="text" {...register('email', {pattern:/^[^\s@]+@[^\s@]+\.[^\s@]+$/i})}/>
          {errors.email?.type==='pattern' && <p>email format is wrong</p>}
        </div>

        <div>
          <label>Age</label>
          <input type="text" {...register('age', {required:true})}/>
        </div>

        <div>
          <label>Country</label>
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