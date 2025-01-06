import React from 'react'
import { FcGoogle } from "react-icons/fc";
export default function OAuth() {
  return (
    <button className='flex items-center justify-center w-full p-2 mt-4 text-white bg-red-600 rounded-md uppercase text-sm font-medium hover:bg-red-700 active:bg-red-900 transition duration-200'>
        <FcGoogle className='text-2xl bg-white rounded'/>
        continue with Google
        
    </button> 
         )
}
