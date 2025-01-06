import React from 'react';
import { useLocation, useNavigate } from 'react-router-dom';

export default function Header() {
  const location = useLocation();
  const navigate = useNavigate();

  function pathMatchRoute(route) {
    return route === location.pathname;
  }

  return (
    <div className="bg-white shadow-md border-b sticky top-0 z-100">
      <header className="flex justify-between items-center px-3 max-w-6xl mx-auto">
        <div>
          <img
            src="https://itechnet.co.ke/wp-content/uploads/2023/08/White-Logo-slogan-PNG-COLOR.png"
            className="h-10 m-2 cursor-pointer"
            alt="logo"
            onClick={() => navigate('/')}
          />
        </div>
        <div>
          <ul className="flex justify-between items-center space-x-4">
            <li
              className={`cursor-pointer py-3 text-sm font-semibold border-b-[3px] ${
                pathMatchRoute('/') ? 'text-black border-b-red-500' : 'text-gray-400 border-b-transparent'
              }`}
              onClick={() => navigate('/')}
            >
              Home
            </li>
            <li
              className={`cursor-pointer py-3 text-sm font-semibold border-b-[3px] ${
                pathMatchRoute('/offers') ? 'text-black border-b-red-500' : 'text-gray-400 border-b-transparent'
              }`}
              onClick={() => navigate('/offers')}
            >
              Offers
            </li>
            <li
              className={`cursor-pointer py-3 text-sm font-semibold border-b-[3px] ${
                pathMatchRoute('/signin') ? 'text-black border-b-red-500' : 'text-gray-400 border-b-transparent'
              }`}
              onClick={() => navigate('/signin')}
            >
              SignIn
            </li>
          </ul>
        </div>
      </header>
    </div>
  );
}
