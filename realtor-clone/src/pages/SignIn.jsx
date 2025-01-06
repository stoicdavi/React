import React from 'react'
import { useState, } from 'react'
import { Link } from 'react-router-dom'
import OAuth from '../components/OAuth'

export default function SignIn() {
  const [formData, setFormData] = useState({
    email: '',
    password: ''
  })
  const { email, password } = formData
  function onChange(e){
    setFormData((prevState) => ({
      ...prevState,
      [e.target.id]: e.target.value
    })
  )
  }

  return (
   <section>
    <h1 className='text-3xl text-center mt-6 font-bold'>Sign In</h1>
    <div className='flex flex-wrap justify-center items-center px-6 py-12 max-w-6xl mx-auto'>
      <div className='md:w-[67%] lg:w-[50%] mb-12 md:mb-6'>
        <img className='rounded-2xl m-2 w-full' src="https://plus.unsplash.com/premium_photo-1726863173328-9437d391141a?q=80&w=1958&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="keyImage" />
      </div>
      <div  className='w-full md:w-[67%] lg:w-[40%] mb-12 md:mb-6 lg:ml-20'>
       <form>
        <div>
        <input className="w-full px-4 py-2 text-xl text-gray-700 bg-white border-gray-300 rounded transition ease-in-out" type="email" id="email"  placeholder="Email Address" value={email} onChange={onChange} 
    />
     <input className="w-full px-4 py-2 mt-4 text-xl text-gray-700 bg-white border-gray-300 rounded transition ease-in-out" type="password" id="password"  placeholder="Password" value={password} onChange={onChange} 
    />
    </div>
    <div className='flex justify-between whitespace-nowrap text-sm sm:text-lg mt-3'>
      <p className='mb-3'>Don't have an account? <Link to='/sign-up' className='text-red-500 hover:text-red-700 transition duration-200'>Register</Link></p>
      <p>
        <Link to='/forgot-password' className='text-blue-500 hover:text-blue-700 transition duration-600'>Forgot Password?</Link>
      </p>

      </div>
      <button className='w-full py-3 mt-4 text-lg text-white bg-blue-500 hover:bg-blue-700 transition duration-200 rounded hover:shadow-gray-500 active:bg-blue-900 uppercase ease-in-out'>Sign In</button>
       <div className='flex items-center my-4 before:border-t before:flex-1 before:border-gray-400 after:border-t after:flex-1 after:border-gray-400'>
          <p className='text-center font-semibold mx-3'>OR</p>
        </div>
      <OAuth />
       </form>
       
        </div>
        

    </div>
   </section>
  )
}
