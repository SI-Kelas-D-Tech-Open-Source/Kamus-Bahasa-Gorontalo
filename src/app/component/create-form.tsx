import React from "react"
import { getCategory } from "../../../lib/data"

const CreateForm = async() => {
    const category = await getCategory()
  return (
    <div>
        <form action="">
            <div className="mb-5">
                <label 
                htmlFor="indonesia" 
                className="block text-md font-medium text-gray-700 mb-2">Bahasa Indonesia</label>
                <input 
                type="text" name="indonesia" id="indonesia"
                className="bg-gray-50 border border-gray-300 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"  
                placeholder="Indonesia"/>
            </div>
            <div className="mb-5">
                <label 
                htmlFor="gorontalo" 
                className="block text-md font-medium text-gray-700 mb-2">Bahasa gorontalo</label>
                <input 
                type="text" name="gorontalo" id="gorontalo"
                className="bg-gray-50 border border-gray-300 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"  
                placeholder="Gorontalo"/>
            </div>
            <div className="mb-5">
                <label 
                htmlFor="picture" 
                className="block text-md font-medium text-gray-700 mb-2">Kategori</label>
                <select 
                name="category" id="category"
                className="bg-gray-50 border border-gray-300 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5">
                    <option value="default">- Pilih kategori kata -</option>
                    {category.map((category) => (
                        <option key={category.id} value={category.id}>{category.name}</option>
                    ))}
                </select>
            </div>
            <div className="mb-5">
                <label 
                htmlFor="picture" 
                className="block text-md font-medium text-gray-700 mb-2">Gambar</label>
                <input 
                type="file" name="picture" id="picture"
                className="bg-gray-50 border border-gray-300 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"/>
            </div>
            <div className="mb-5">
                <label 
                htmlFor="audio" 
                className="block text-md font-medium text-gray-700 mb-2">Suara</label>
                <input 
                type="file" name="audio" id="audio"
                className="bg-gray-50 border border-gray-300 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"/>
            </div>
            <button type="submit" 
            className="text-white bg-purple-400 hover:bg-purple-600 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-sm text-sm w-full px-5 py-3 text-center">Simpan
            </button>
        </form>
    </div>
  )
}

export default CreateForm