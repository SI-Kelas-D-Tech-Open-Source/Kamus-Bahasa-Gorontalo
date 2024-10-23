import React from "react"

const CreateForm = () => {
  return (
    <div>
        <form action="">
            <div className="mb-5">
                <label 
                htmlFor="indonesia" 
                className="block text-md font-medium text-gray-700 mb-2">Bahasa Indonesia</label>
                <input 
                type="text" name="indonesia" id="indonesia"
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"  
                placeholder="Indonesia"/>
            </div>
            <div className="mb-5">
                <label 
                htmlFor="gorontalo" 
                className="block text-md font-medium text-gray-700 mb-2">Bahasa gorontalo</label>
                <input 
                type="text" name="gorontalo" id="gorontalo"
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"  
                placeholder="Gorontalo"/>
            </div>
            <div className="mb-5">
                <label 
                htmlFor="picture" 
                className="block text-md font-medium text-gray-700 mb-2">Gambar</label>
                <input 
                type="picture" name="picture" id="picture"
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"  
                placeholder="Pilih salah satu"/>
            </div>
            <div className="mb-5">
                <label 
                htmlFor="audio" 
                className="block text-md font-medium text-gray-700 mb-2">Suara</label>
                <input 
                type="text" name="audio" id="audio"
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"  
                placeholder="Masukkan Rekaman"/>
            </div>
            <button type="submit" 
            className="text-white bg-purple-400 hover:bg-purple-600 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-sm text-sm w-full px-5 py-3 text-center">Simpan
            </button>
        </form>
    </div>
  )
}

export default CreateForm