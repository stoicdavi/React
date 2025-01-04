import React from 'react'
import { useLocation, useNavigate } from 'react-router-dom'

export default function Header() {
    const location = useLocation()
    const navigate = useNavigate()
    // console.log(location.pathname)
    function pathMatchRoute(route){
        if (route === location.pathname ){
            return true;
        }
        
    }
  return (
    <div className='bg-white shadow-md border-b sticky top-0 z-100'>
        <header className='flex justify-between items-center px-3 max-w-6xl mx-auto'>
            <div>
                <img src="https://itechnet.co.ke/wp-content/uploads/2023/08/White-Logo-slogan-PNG-COLOR.png" className="h-10 m-2 cursor-pointer" alt="logo" onClick={()=>navigate("/")} />
            </div>
            <div>
                <ul className='flex justify-between items-center space-x-4'>
                    <li className={ `cursor-pointer py-3 text-sm font-semibold text-gray-400 border-b-[3px] border-b-transparent ${pathMatchRoute('/') && "text-black border-b-red-500"}`} onClick={()=>navigate('/')}>Home</li>
                    <li className={ `cursor-pointer py-3 text-sm font-semibold text-gray-400 border-b-[3px] border-b-transparent ${pathMatchRoute('/offers') && "text-black border-b-red-500"}`} onClick={()=>navigate('/offers')}>Offers</li>
                    <li className={ `cursor-pointer py-3 text-sm font-semibold text-gray-400 border-b-[3px] border-b-transparent ${pathMatchRoute('/signin') && "text-black border-b-red-500"}`} onClick={()=>navigate('/signin')}>SignIn</li>
                    
                </ul>
            </div>
        </header>
    </div>
  )
}
