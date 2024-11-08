import React from 'react';
import Nav from '../components/Nav';

export default function Ubahkata() {
  return (
    <div className="flex h-screen bg-gray-300">
      {/* Sidebar */}
        <Nav></Nav>
      {/* Main Content */}
      <div className="w-4/5 p-8 pt-0">
        <div className="bg-purple-900 text-white text-center py-1 px-8 mb-8">
          <h1 className="text-xl">ADMINISTRATOR DASHBOARD</h1>
        </div>

        {/* Form Section */}
        <form className="space-y-6 bg-purple-900 p-6 rounded-md shadow-md">
          <div className="grid gap-6">
            <div className="flex items-center">
              <label className="w-1/3 text-white">Kata</label>
              <input
                type="text"
                className="w-full p-2 rounded-lg bg-gray-200 text-black"
                placeholder="Masukkan Kata"
              />
            </div>
            <div className="flex items-center">
              <label className="w-1/3 text-white">Kategori</label>
              <select className="w-full p-2 rounded-lg bg-gray-200 text-black">
                <option value="">Pilih Kategori</option>
              </select>
            </div>
            <div className="flex items-center">
              <label className="w-1/3 text-white">Pengucapan</label>
              <input
                type="text"
                className="w-full p-2 rounded-lg bg-gray-200 text-black"
                placeholder="Masukkan Pengucapan"
              />
            </div>
            <div className="flex items-center">
              <label className="w-1/3 text-white">Arti</label>
              <input
                type="text"
                className="w-full p-2 rounded-lg bg-gray-200 text-black"
                placeholder="Masukkan Arti"
              />
            </div>
          </div>

          {/* Upload Section */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div>
              <h1 className="text-white">Upload gambar atau suara</h1>
              </div>
            <div>
              <input
                className="block w-full text-sm text-gray-900 border border-gray-300 rounded-lg cursor-pointer bg-gray-50 focus:outline-none focus:ring focus:ring-purple-300"
                type="file"
                accept="image/*"
              />
            </div>
            <div>
              <input
                className="block w-full text-sm text-gray-900 border border-gray-300 rounded-lg cursor-pointer bg-gray-50 focus:outline-none focus:ring focus:ring-purple-300"
                type="file"
              />
            </div>
          </div>

          {/* Action Buttons */}
          <div className="flex justify-end space-x-4">
            <button type="submit" className="bg-purple-700 text-white p-2 rounded-lg">
              Simpan
            </button>
            <button type="button" className="bg-purple-700 text-white p-2 rounded-lg">
              Batal
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
