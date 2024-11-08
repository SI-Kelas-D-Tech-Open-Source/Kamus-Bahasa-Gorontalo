// pages/dashboard.js
import React from 'react';
import Nav from '../components/Nav'; // Pastikan jalur impor benar
const Dashboard = () => {
  return (
    <div className="flex h-screen bg-gray-300">
      {/* Sidebar */}
      
        <Nav></Nav>
      
      {/* Main Content */}
      <div className="w-4/5 p-4 pt-0">
      <div className="bg-purple-900 text-white text-center py-1 px-8 mb-8">
          <h1 className="text-xl">ADMINISTRATOR DASHBOARD</h1>
        </div>
        <div className="flex space-x-4">
          <div className="bg-blue-500 text-white p-4 rounded shadow-md flex-1" >
            <a href="">
            <div className="flex justify-between items-center">
              <div>
                <span className="text-4xl font-bold">200</span>
                <p>Total Kata</p>
              </div>
              
              <i className="fas fa-file-alt text-4xl"></i>
            </div>
            </a>
          </div>
          <div className="bg-green-500 text-white p-4 rounded shadow-md flex-1">
          <a href="">
            <div className="flex justify-between items-center">
              <div>
                <span className="text-4xl font-bold">5</span>
                <p>Total Editor</p>
              </div>
              <i className="fas fa-users text-4xl"></i>
            </div>
            </a>
          </div>
          <div className="bg-yellow-500 text-white p-4 rounded shadow-md flex-1">
            <a href="">
            <div className="flex justify-between items-center">
              <div>
                <span className="text-4xl font-bold">3</span>
                <p>Permintaan Editor</p>
              </div>
              <i className="fas fa-user-check text-4xl"></i>
            </div>
            </a>
          </div>
        </div>
      </div>
      <footer className="absolute bottom-0 left-0 w-full bg-gray-200 text-gray-600 text-xs text-right p-2">
      </footer>
    </div>
  );
};

export default Dashboard;
