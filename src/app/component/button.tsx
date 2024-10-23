import React from "react"
import Link from "next/link"
import { IoAddSharp, IoPencil, IoTrashSharp } from "react-icons/io5"

export const CreateButton = () =>  {
    return (
        <Link 
        href="/languages/create"
        className="inline-flex items-center text-white bg-purple-400 px-10 py-2 focus:outline-none hover:bg-purple-600 rounded text-md">
            <IoAddSharp size={20} />
            Create
        </Link>
    )
}

export const UpdateButton = () =>  {
    return (
        <Link 
        href="/languages/update"
        className="text-white bg-blue-400 p-1 focus:outline-none hover:bg-blue-600 rounded text-md">
            <IoPencil size={20} />
        </Link>
    )
}

export const DeleteButton = () =>  {
    return (
        <button 

        className="text-white bg-red-400 p-1 focus:outline-none hover:bg-red-600 rounded text-md">
            <IoTrashSharp size={20} />
        </button>
    )
}