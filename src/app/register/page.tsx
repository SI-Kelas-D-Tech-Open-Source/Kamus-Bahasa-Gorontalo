import React from 'react';
import Home from '../page';
import Login from '../login/page';

export default function SignIn() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-purple-900">
      {/* Login/Logout Button */}
      <div className="absolute top-4 right-4">
        <a href="login">
          <button className="text-white font-semibold bg-red-600 hover:bg-red-800 py-2 px-4 rounded mr-2">
            Kembali
          </button>
        </a>
      </div>
      
      <div className="bg-gray-200 p-10 rounded-lg shadow-lg max-w-sm w-full">
        <h1 className="text-3xl font-bold text-center text-black mb-4">Bahasa Hulondalo</h1>
        <h2 className="text-center text-lg text-black font-medium mb-6">SIGN-IN</h2>

        {/* Username Input */}
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="username">
            Username
          </label>
          <div className="flex items-center border rounded-lg py-2 px-3">
            <span className="mr-2">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="black" className="w-5 h-5">
                <path d="M12 12c2.485 0 4.5-2.015 4.5-4.5S14.485 3 12 3 7.5 5.015 7.5 7.5 9.515 12 12 12zM12 14.25c-3.2 0-6.562 1.585-6.562 2.813v1.187h13.125v-1.187c0-1.228-3.363-2.813-6.563-2.813z" />
              </svg>
            </span>
            <input type="text" id="username" placeholder="Username" className="w-full border-none text-gray-700 focus:outline-none" />
            </div>
        </div>

        {/* Email Input */}
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="email">
            Email
          </label>
          <div className="flex items-center border rounded-lg py-2 px-3">
            <span className="mr-2">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="black" className="w-5 h-5">
                <path d="M1.5 4.875a.375.375 0 01.375-.375h20.25a.375.375 0 01.375.375v13.5a.375.375 0 01-.375.375H1.875a.375.375 0 01-.375-.375v-13.5zm3.096.375l6.456 4.3c.99.659 2.494.659 3.484 0l6.457-4.3h-16.397zm16.529 1.185l-6.219 4.143a3.937 3.937 0 01-4.215 0L3.471 6.435v9.69h17.654V6.435z" />
              </svg>
            </span>
            <input type="email" id="email" placeholder="Email" className="w-full border-none text-gray-700 focus:outline-none" />
          </div>
        </div>

        {/* Password Input */}
        <div className="mb-6">
          <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="password">
            Password
          </label>
          <div className="flex items-center border rounded-lg py-2 px-3">
            <span className="mr-2">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="black" className="w-5 h-5">
                <path d="M17.25 9V7.5A5.25 5.25 0 006.75 7.5V9H5.25A.75.75 0 004.5 9v9a.75.75 0 00.75.75h13.5a.75.75 0 00.75-.75V9a.75.75 0 00-.75-.75H17.25zm-6.375 7.874a.75.75 0 11-1.5 0v-3a.75.75 0 011.5 0v3zm3.75-7.874H8.625V7.5a3.375 3.375 0 016.75 0V9z" />
              </svg>
            </span>
            <input type="password" id="password" placeholder="Password" className="w-full border-none text-black focus:outline-none" />
          </div>
        </div>

        {/* Submit Button */}
        <button type="submit" className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline flex items-center justify-center w-full">
          <span className="mr-2">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="black" className="w-5 h-5">
              <path d="M1.5 12a1.5 1.5 0 011.5-1.5h15.379l-5.44-5.44a1.5 1.5 0 012.122-2.122l7.5 7.5a1.5 1.5 0 010 2.122l-7.5 7.5a1.5 1.5 0 11-2.122-2.122l5.44-5.44H3A1.5 1.5 0 011.5 12z" />
            </svg>
          </span>
          Request
        </button>
      </div>
    </div>
  );
}
