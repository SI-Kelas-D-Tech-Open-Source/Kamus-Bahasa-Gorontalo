import React from "react"
import { IoSearch } from "react-icons/io5"

const Search = () => {
  return (
    <div className="relative flex flex-1">
        <input 
        type="text" 
        className="w-full bg-gray-50 border border-gray-300 text-gray-900 text-md rounded-lg py-2 pl-10" 
        placeholder="Search..."/>
        <IoSearch className="absolute left-3 top-3 h-5 w-5 text-gray-500"/>
    </div>
  )
}

export default Search