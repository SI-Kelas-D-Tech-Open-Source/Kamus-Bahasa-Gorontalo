
// pages/index.js
import React from 'react';

const Home = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-b from-purple-950 to-purple-900 text-white relative">
      
    {/* Bagian Kiri Atas */}
    <div className="absolute top-4 left-4">
      <span className="text-lg font-bold">Tumuwoto log</span>
      <div className="border-t-2 border-white mt-1 w-20"></div>
    </div>

    {/* Bagian Kanan Atas */}
    <div className="absolute top-4 right-4 flex items-center space-x-2">
      <a href="/register" className="text-lg font-medium">
        Account
      </a>
      <i className="fas fa-user-circle text-2xl"></i>
    </div>

    {/* Konten Tengah */}
    <div className="text-center">
      <h1 className="text-6xl font-bold mb-8">HULONDALO</h1>
      
      {/* Search Bar */}
      <form className="relative w-full max-w-2xl mx-auto">
        <input 
          type="search" 
          className="block w-full h-16 p-4 pl-14 text-lg text-gray-900 rounded-full bg-gray-100 focus:ring-2 focus:ring-blue-500 focus:outline-none" 
          placeholder="cari kata" 
          required 
        />
        <button 
          type="submit" 
          className="absolute top-1/2 left-4 transform -translate-y-1/2 text-gray-500"
        >
          <svg 
            className="w-6 h-6" 
            aria-hidden="true" 
            xmlns="http://www.w3.org/2000/svg" 
            fill="none" 
            viewBox="0 0 24 24"
          >
            <path 
              stroke="currentColor" 
              strokeLinecap="round" 
              strokeLinejoin="round" 
              strokeWidth="2" 
              d="m21 21-5-5m0-7A7 7 0 1 1 3 10a7 7 0 0 1 13 0Z"
            />
          </svg>
        </button>
      </form>
      
      {/* Teks Keterangan */}
      <p className="mt-4 text-sm text-gray-300">
        *kosakata yang ada masih belum diinput semuanya, dan masih dalam tahap pengembangan
      </p>
    </div>
  </div>
);
};

export default Home;

