// pages/index.js
import React from 'react';
import Nav from '../components/Nav';

export default function history() {
  return (
    <div className="flex h-screen bg-gray-200">
      {/* Sidebar */}
       <Nav></Nav>
      {/* Main Content */}
      <div className="w-4/5 p-8 pt-0">
        <div className="bg-purple-900 text-white text-center py-1 px-8 mb-8">
          <h1 className="text-xl">ADMINISTRATOR DASHBOARD</h1>
        </div>

        {/* History Section */}
        <section className="flex-grow space-y-6 bg-purple-900 p-6 rounded-md shadow-md">
          <h2 className="text-2xl font-bold mb-4">History</h2>
          <div className="relative mb-6">
            <input
              type="text"
              placeholder="Search History"
              className="w-full p-2 rounded-full text-black"
            />
            <i className="fas fa-search absolute right-4 top-3 text-black"></i>
          </div>

          {/* History List */}
          <div>
            {/* Today's History */}
            <div className="mb-4">
              <h3 className="font-bold">Today - 28 Okt 2024</h3>
              <div className="flex items-center mb-2">
                <i className="fas fa-check text-green-500 mr-2"></i>
                <span>(v.) Le’ibaca</span>
              </div>
              <div className="ml-6 text-sm">
                <span className="font-bold">Indonesia :</span> Suruh Membaca
              </div>
            </div>

            {/* Additional History */}
            <div className="mb-4">
              <div className="flex items-center mb-2">
                <i className="fas fa-check text-green-500 mr-2"></i>
                <span>(v.) Le’ibaca</span>
              </div>
              <div className="ml-6 text-sm">
                <span className="font-bold">Indonesia :</span> Suruh Membaca
              </div>
            </div>

            <hr className="border-gray-400 mb-4" />

            {/* Yesterday's History */}
            <div className="mb-4">
              <h3 className="font-bold">Yesterday - 27 Okt 2024</h3>
              <div className="flex items-center mb-2">
                <i className="fas fa-check text-green-500 mr-2"></i>
                <span>(v.) Le’ibaca</span>
              </div>
              <div className="ml-6 text-sm">
                <span className="font-bold">Indonesia :</span> Suruh Membaca
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}
