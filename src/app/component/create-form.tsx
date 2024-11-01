"use client"

import React from "react"
import { getCategory } from "../../../lib/data"
import { saveLanguage } from "../../../lib/actions"
import { useFormState } from "react-dom"

const CreateForm = async() => {

    const [state, formAction] = useFormState(saveLanguage, null)
    
    const category = await getCategory()

  return (
    <div>
        <form action={formAction}>
            <div className="mb-5">
                <label  
                className="block text-md font-medium text-gray-700 mb-2">Bahasa Indonesia</label>
                <input 
                type="text" name="indonesia" id="indonesia"
                className="bg-gray-50 border border-gray-300 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"  
                placeholder="Indonesia"/>
                <div id="name-error" aria-live="polite" aria-atomic="true">
                    <p className="text-red-500 mt-2 text-sm">{state?.Error?.indonesia}</p>
                </div>
            </div>
            <div className="mb-5">
                <label 
                className="block text-md font-medium text-gray-700 mb-2">Bahasa gorontalo</label>
                <input 
                type="text" name="gorontalo"
                className="bg-gray-50 border border-gray-300 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"  
                placeholder="Gorontalo"/>
                <div id="name-error" aria-live="polite" aria-atomic="true">
                    <p className="text-red-500 mt-2 text-sm">{state?.Error?.gorontalo}</p>
                </div>
            </div>
            <div className="mb-5">
                <label 
                className="block text-md font-medium text-gray-700 mb-2">Kategori</label>
                <select 
                name="category"
                className="bg-gray-50 border border-gray-300 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5">
                    <option>- Pilih kategori kata -</option>
                    {category.map((category) => (
                        <option key={category.id} value={category.id}>{category.name}</option>
                    ))}
                </select>
                <div id="name-error" aria-live="polite" aria-atomic="true">
                    <p className="text-red-500 mt-2 text-sm">{state?.Error?.categoryId}</p>
                </div>
            </div>
            <div className="mb-5">
                <label 
                className="block text-md font-medium text-gray-700 mb-2">Gambar</label>
                <input 
                type="file" name="picture"
                className="bg-gray-50 border border-gray-300 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"/>
                <div id="name-error" aria-live="polite" aria-atomic="true">
                    <p className="text-red-500 mt-2 text-sm">{state?.Error?.picture}</p>
                </div>
            </div>
            <div className="mb-5">
                <label 
                className="block text-md font-medium text-gray-700 mb-2">Suara</label>
                <input 
                type="file" name="audio"
                className="bg-gray-50 border border-gray-300 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"/>
                <div id="name-error" aria-live="polite" aria-atomic="true">
                    <p className="text-red-500 mt-2 text-sm">{state?.Error?.audio}</p>
                </div>
            </div>
            <button type="submit" 
            className="text-white bg-purple-400 hover:bg-purple-600 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-sm text-sm w-full px-5 py-3 text-center">Simpan
            </button>
        </form>
    </div>
  )
}

export default CreateForm